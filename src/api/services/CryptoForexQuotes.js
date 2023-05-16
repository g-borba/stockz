import axios from '../axios'
import setAuthToken from '../auth'

const CryptoForexQuotes = {
  getCryptoForexData: async (symbol) => {
    try {
      const response = await axios.get('data/currency/latest', {
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

export default CryptoForexQuotes
