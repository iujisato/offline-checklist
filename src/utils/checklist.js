import { omit } from './function';

export const normalizeData = ({ data, synced }) => {
  const normalizedData = data;

  if (data['_id']) {
    normalizedData['_id'] = String(data['_id']);
  }

  normalizedData.amount_of_milk_produced = Number(data.amount_of_milk_produced);
  normalizedData.number_of_cows_head = Number(data.number_of_cows_head);
  normalizedData['_synced'] = synced;

  return normalizedData;
};

export const normalizeDataToApi = (data) => {
  const normalizedData = data.map((value) => omit(value, '_synced'));

  return normalizedData;
};

export const normalizeDataToForm = (data) => ({
  amountOfCows: String(data.number_of_cows_head),
  amountOfMilk: String(data.amount_of_milk_produced),
  farmCity: data.farmer.city,
  farmName: data.farmer.name,
  farmerName: data.from.name,
  hadSupervision: data.had_supervision,
  supervisorName: data.to.name,
  type: data.type,
});

export const normalizeDataFromForm = ({ data, changeUpdatedAt, location }) => {
  const normalizedData = {
    number_of_cows_head: Number(data.amountOfCows),
    amount_of_milk_produced: data.amountOfMilk,
    farmer: {
      city: data.farmCity,
      name: data.farmName,
    },
    from: {
      name: data.farmerName,
    },
    had_supervision: data.hadSupervision,
    to: {
      name: data.supervisorName,
    },
    type: data.type.key,
    updated_at: new Date(),
    location: {
      longitude: location.longitude,
      latitude: location.latitude,
    },
  };

  return changeUpdatedAt ? normalizedData : omit(normalizedData, 'updated_at');
};
