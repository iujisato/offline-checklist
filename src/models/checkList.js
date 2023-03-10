import { Realm } from '@realm/react';

export const FarmerSchema = {
  name: 'Farmer',
  embedded: true,
  properties: {
    name: 'string',
    city: 'string',
  },
};

export const FromSchema = {
  name: 'From',
  embedded: true,
  properties: {
    name: 'string',
  },
};

export const ToSchema = {
  name: 'To',
  embedded: true,
  properties: {
    name: 'string',
  },
};

export const LocationSchema = {
  name: 'Location',
  embedded: true,
  properties: {
    latitude: 'float',
    longitude: 'float',
  },
};
export const CheckListSchema = {
  name: 'CheckList',
  primaryKey: '_id',
  properties: {
    _id: { type: 'string', default: () => new Realm.BSON.UUID() },
    type: 'string',
    amount_of_milk_produced: 'string',
    farmer: 'Farmer',
    from: 'From',
    to: 'To',
    number_of_cows_head: 'int',
    had_supervision: 'bool',
    location: 'Location',
    createdAt: { type: 'date', default: () => new Date() },
    updatedAt: { type: 'date', default: () => new Date() },
    __v: { type: 'int', default: 0 },
    _synced: { type: 'bool', default: false },
  },
};
