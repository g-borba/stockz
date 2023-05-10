import axios from 'axios';
require('dotenv').config();

const setAuthToken = () => {
  const token = process.env.SD_API_KEY;

  if (token) {
    axios.defaults.params = {
      ...axios.defaults.params,
      api_token: token,
    };
  } else {
    delete axios.defaults.params.api_token;
  }
};

export default setAuthToken;
