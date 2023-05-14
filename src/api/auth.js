import axios from 'axios';

const setAuthToken = () => {
  const token = process.env.REACT_APP_SD_API_KEY;

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
