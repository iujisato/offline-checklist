import { timeNowUnix } from '../utils/date';

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
    latitude: { type: 'float', default: () => 0 },
    longitude: { type: 'float', default: () => 0 },
  },
};
export const CheckListSchema = {
  name: 'CheckList',
  primaryKey: '_id',
  properties: {
    _id: { type: 'string', default: () => String(timeNowUnix()) },
    type: 'string',
    amount_of_milk_produced: 'float',
    farmer: 'Farmer',
    from: 'From',
    to: 'To',
    number_of_cows_head: 'int',
    had_supervision: 'bool',
    location: { type: 'Location', default: () => ({ latitude: 0, longitude: 0 }) },
    created_at: { type: 'date', default: () => new Date() },
    updated_at: { type: 'date', default: () => new Date() },
    _synced: { type: 'int', default: 0 },
  },
};
