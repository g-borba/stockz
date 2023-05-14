import axios from '../axios';
import setAuthToken from '../auth';

const StockSearch = {
  getStockData: async (symbol) => {
    setAuthToken();

    try {
      const response = await axios.get('entity/search', {
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

export default StockSearch;
