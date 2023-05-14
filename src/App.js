import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import TopBarButton from './components/TopBarButton/TopBarButton';
import MainSearchBar from './components/MainSearchBar/MainSearchBar';
import Header from './components/Header/Header';

import StockSearch from './api/services/StockSearch'

function App() {
  const [selectedButton, setSelectedButton] = useState('ações');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleSearchClick = () => {
    console.log('Search clicked');
  };

  return (
    <div>
      <Header/>
      <Container sx={{ marginTop: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
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
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <MainSearchBar
            selectedButton={selectedButton}
            handleSearchClick={handleSearchClick}
          />
        </Box>
      </Container>
      <Box sx={{ paddingTop: '20px' }}>
        <Paper sx={{ backgroundColor: '#4f5c7a', minHeight: 'calc(100vh - 84px)' }}>
        </Paper>
      </Box>
    </div>
  );
}

export default App;