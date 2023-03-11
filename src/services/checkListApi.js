import request from '../utils/request';
import { omit } from '../utils/function';

export const getCheckLists = async () => {
  try {
    const response = await request.get('v1/checkList');

    return response.data;
  } catch (error) {
    return null;
  }
};

export const createCheckList = async ({ data }) => {
  try {
    const response = await request.post('v1/checkList', { checklists: data });

    return response.data;
  } catch (error) {
    return null;
  }
};

export const updateCheckList = async ({ data }) => {
  try {
    const response = await request.put(`v1/checkList/${data['_id']}`, omit(data, '_id'));

    return response.data;
  } catch (error) {
    return null;
  }
};
