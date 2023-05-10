import axios from '../axios';
import setAuthToken from '../auth';

const IntradayQuote = {
  getIntradayData: async (symbol) => {
    setAuthToken();

    try {
      const response = await axios.get('data/intraday', {
        params: {
          symbols: symbol,
        },
      });

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error calling the API');
    }
  },
};

export default IntradayQuote;
