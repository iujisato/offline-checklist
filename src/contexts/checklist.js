import React, {
  createContext, useState, useMemo, useEffect, useContext,
} from 'react';
import { AppContext } from './app';
import { getCheckLists, createCheckList, updateCheckList } from '../services/checkListApi';
import { useDatabase, useQuery } from './database';
import { normalizeData, normalizeDataToApi } from '../utils/checklist';
import { difference, isEmpty, isArray } from '../utils/function';
import { SYNC_TYPES } from '../screens/CheckList/constants';

export const CheckListContext = createContext({
  loading: false,
  checkLists: [],
});

export const CheckListProvider = ({ children }) => {
  const db = useDatabase();
  const { offline } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const allCheckLists = useQuery('CheckList').sorted('created_at', true);
  const syncedCheckLists = useMemo(() => allCheckLists.filtered('_synced = 0'), [allCheckLists]);
  const unsyncedCheckLists = useMemo(() => allCheckLists.filtered('_synced != 0'), [allCheckLists]);

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

  const storeValues = async ({ data, synced }) => {
    if (!data) {
      return;
    }

    try {
      if (isArray(data)) {
        data.forEach(async (value) => {
          await db.write(async () => {
            await db.create('CheckList', normalizeData({ data: value, synced }), 'modified');
          });
        });
      } else {
        await db.write(async () => {
          await db.create('CheckList', normalizeData({ data, synced }), 'modified');
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const syncValuesFromApi = async () => {
    if (offline) {
      return;
    }

    setLoading(true);

    try {
      const apiData = await getCheckLists();

      const apiIds = apiData.map((data) => String(data['_id']));
      const databaseIds = syncedCheckLists.map((data) => data['_id']);
      const removeIds = difference(databaseIds, apiIds).map((id) => String(id));

      await deleteValues({ data: removeIds, synced: SYNC_TYPES.SYNCED });
      await storeValues({ data: apiData, synced: SYNC_TYPES.SYNCED });
    } catch (error) {
      console.log({ error });
    }

    setLoading(false);
  };

  const syncValuesToApi = async () => {
    if (offline) {
      return;
    }

    setLoading(true);

    try {
      const createData = unsyncedCheckLists.filtered(`_synced = ${SYNC_TYPES.PENDING_CREATE}`).toJSON();
      const updateData = unsyncedCheckLists.filtered(`_synced = ${SYNC_TYPES.PENDING_UPDATE}`).toJSON();

      if (!isEmpty(createData)) {
        const res = await createCheckList({ data: normalizeDataToApi(createData) });

        if (res) {
          await storeValues({ data: createData, synced: SYNC_TYPES.SYNCED });
        }
      }

      if (!isEmpty(updateData)) {
        normalizeDataToApi(updateData).forEach(async (data) => {
          const res = await updateCheckList({ data });

          if (res) {
            await storeValues({ data: updateData, synced: SYNC_TYPES.SYNCED });
          }
        });
      }
    } catch (error) {
      console.log({ error });
    }

    setLoading(false);
  };

  const getCheckList = (id) => allCheckLists.find((value) => value['_id'] === id).toJSON();

  const value = useMemo(() => ({
    loading,
    allCheckLists: allCheckLists.toJSON(),
    syncedCheckLists: syncedCheckLists.toJSON(),
    unsyncedCheckLists: unsyncedCheckLists.toJSON(),
    syncValuesFromApi,
    syncValuesToApi,
    getCheckList,
    storeValues,
  }), [
    loading,
    allCheckLists,
    syncedCheckLists,
    unsyncedCheckLists,
    syncValuesFromApi,
    syncValuesToApi,
    getCheckList,
    storeValues,
  ]);

  useEffect(() => {
    syncValuesFromApi();
    syncValuesToApi();
  }, [offline]);

  return (
    <CheckListContext.Provider value={value}>
      {children}
    </CheckListContext.Provider>
  );
};
