import axios from '../axios'
import setAuthToken from '../auth'

const ListNews = {
  getNewsData: async (symbol) => {
    try {
      const response = await axios.get('news/all', {
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

export default ListNews
