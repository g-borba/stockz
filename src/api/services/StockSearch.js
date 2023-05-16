import axios from '../axios'
import setAuthToken from '../auth'

const StockSearch = {
  getStockData: async (symbol) => {
    try {
      const response = await axios.get('entity/search', {
        params: {
          symbols: symbol,
          api_token: process.env.REACT_APP_SD_API_KEY,
        },
      })

      setAuthToken()

      return response.data
    } catch (error) {
      console.error(error)
      throw new Error('Error calling the API')
    }
  },
}

export default StockSearch
