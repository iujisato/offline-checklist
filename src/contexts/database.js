import { createRealmContext } from '@realm/react';
import {
  FarmerSchema, FromSchema, ToSchema, LocationSchema, CheckListSchema,
} from '../models/checkList';

const config = {
  schema: [FarmerSchema, FromSchema, ToSchema, LocationSchema, CheckListSchema],
};

export const DatabaseContext = createRealmContext(config);
export const DatabaseProvider = DatabaseContext.RealmProvider;
export const { useRealm: useDatabase, useQuery, useObject } = DatabaseContext;
