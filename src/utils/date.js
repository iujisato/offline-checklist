import moment from 'moment';

export const getMonthName = (timestamp) => moment(timestamp).format('MMMM');
export const displayDate = (timestamp) => moment(timestamp).format('MMMM Do YYYY, h:mm a');
export const timeNowUnix = () => moment().valueOf();
