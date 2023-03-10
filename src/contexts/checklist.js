import React, {
  createContext, useState, useMemo, useEffect,
} from 'react';
import { getCheckLists } from '../services/checkListApi';
import { useDatabase, useQuery } from './database';
import { normalizeData } from '../utils/checklist';
import { difference, isEmpty } from '../utils/function';

export const CheckListContext = createContext({
  loading: false,
  checkLists: [],
  storeValues: () => {},
});

export const CheckListProvider = ({ children }) => {
  const db = useDatabase();
  const [loading, setLoading] = useState(false);
  const allCheckLists = useQuery('CheckList');
  const syncedCheckLists = useMemo(() => allCheckLists.filtered('_synced = true'), [allCheckLists]);
  const unsyncedCheckLists = useMemo(() => allCheckLists.filtered('_synced = false'), [allCheckLists]);

  const deleteValues = async ({ data, synced }) => {
    if (isEmpty(data)) {
      return;
    }

    const checkLists = synced ? syncedCheckLists : allCheckLists;

    const destroyedCheckLists = checkLists.filter((checkList) => data.includes(checkList['_id']));

    await db.write(async () => {
      await db.delete(destroyedCheckLists);
    });
  };

  const storeValues = async (data) => {
    if (!data) {
      return;
    }

    try {
      data.forEach(async (value) => {
        await db.write(async () => {
          await db.create('CheckList', normalizeData({ data: value, synced: true }), 'modified');
        });
      });
    } catch (error) {
      console.log({ error });
    }
  };

  const syncValues = async () => {
    setLoading(true);
    const apiData = await getCheckLists();

    const apiIds = apiData.map((data) => String(data['_id']));
    const databaseIds = syncedCheckLists.map((data) => data['_id']);
    const removeIds = difference(databaseIds, apiIds).map((id) => String(id));

    await deleteValues({ data: removeIds, synced: true });
    await storeValues(apiData);

    setLoading(false);
  };

  const value = useMemo(() => ({
    loading,
    allCheckLists,
    syncedCheckLists,
    unsyncedCheckLists,
    syncValues,
  }), [
    loading,
    allCheckLists,
    syncedCheckLists,
    unsyncedCheckLists,
    syncValues,
  ]);

  useEffect(() => {
    syncValues();
  }, []);

  return (
    <CheckListContext.Provider value={value}>
      {children}
    </CheckListContext.Provider>
  );
};
