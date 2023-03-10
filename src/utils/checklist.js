export const normalizeData = ({ data, synced }) => {
  const normalizedData = data;

  normalizedData['_id'] = String(data['_id']);
  normalizedData.number_of_cows_head = Number(data.number_of_cows_head);

  if (synced) {
    normalizedData['_synced'] = synced;
  }

  return normalizedData;
};
