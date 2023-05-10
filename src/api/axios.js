import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.stockdata.org/v1/'
});

export default instance;