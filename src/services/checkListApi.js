import request from '../utils/request';

export const getCheckLists = async () => {
  try {
    const response = await request.get('v1/checkList');

    return response;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export const getCheckList = async ({ id }) => {
  try {
    const response = await request.get(`v1/checkList/${id}`);

    return response;
  } catch (error) {
    console.log({ error });
    return null;
  }
};
