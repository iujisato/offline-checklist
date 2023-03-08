import axios from 'axios';
import environment from '../configs/environment';

const instance = axios.create({
  baseURL: environment.baseURL,
  headers: { accept: 'application/json' },
});

export default instance;
