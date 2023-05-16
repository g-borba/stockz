import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import TopBarButton from './components/TopBarButton/TopBarButton'
import MainSearchBar from './components/MainSearchBar/MainSearchBar'
import Header from './components/Header/Header'
import StockSearchResults from './components/StockSearchResults/StockSearchResults'
import NewsSearchResults from './components/NewsSearchResults/NewsSearchResults'
import CryptoForexSearchResults from './components/CryptoForexSearchResult/CryptoForexSearchResult'

import StockSearch from './api/services/StockSearch'
import ListNews from './api/services/ListNews'
import CryptoForexQuotes from './api/services/CryptoForexQuotes'

function App() {
  const [selectedButton, setSelectedButton] = useState('ações')

  const [stockList, setStockList] = useState([])
  const [newsList, setNewsList] = useState([])
  const [cryptoForexList, setCryptoForexList] = useState([])

  const handleButtonClick = (button) => {
    setSelectedButton(button)
  }

  const handleSearchClick = async (searchValue) => {
    console.log('Search clicked with value:', searchValue)
    switch (selectedButton) {
      case 'ações':
        const stockData = await StockSearch.getStockData(searchValue)
        setStockList((prevResults) => [...prevResults, ...stockData.data])
        break
      case 'notícias':
        const newsData = await ListNews.getNewsData(searchValue)
        console.log('News data:', newsData)
        setNewsList((prevResults) => [...prevResults, ...newsData.data])
        break
      case 'criptoativos':
        const cryptoForexData = await CryptoForexQuotes.getCryptoForexData(
          `${searchValue}USD`
        )
        console.log('Crypto data:', cryptoForexData)
        setCryptoForexList((prevResults) => [
          ...prevResults,
          ...cryptoForexData.data,
        ])
        break
      default:
        console.error('Invalid')
        break
    }
  }

  const renderResults = () => {
    switch (selectedButton) {
      case 'ações':
        return <StockSearchResults result={stockList} />
      case 'notícias':
        return <NewsSearchResults result={newsList} />
      case 'criptoativos':
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            {cryptoForexList.map((i) => {
              const tickerData = i[0]
              return <CryptoForexSearchResults data={tickerData} />
            })}
          </div>
        )
      default:
        break
    }
  }

  return (
    <div>
      <Header />
      <Container sx={{ marginTop: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <TopBarButton
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
            buttonText="ações"
          />
          <TopBarButton
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
            buttonText="notícias"
          />
          <TopBarButton
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
            buttonText="criptoativos"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <MainSearchBar
            selectedButton={selectedButton}
            handleSearchClick={handleSearchClick}
          />
        </Box>
      </Container>
      <Box sx={{ paddingTop: '20px' }}>
        <Paper
          sx={{
            backgroundColor: '#4f5c7a',
            minHeight: 'calc(100vh - 84px)',
          }}
        >
          {renderResults()}
        </Paper>
      </Box>
    </div>
  )
}

export default App
