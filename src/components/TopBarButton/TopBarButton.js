import React from 'react';
import Button from '@mui/material/Button';

function TopBarButton({selectedButton, handleButtonClick, buttonText }) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: selectedButton === buttonText ? 'white' : '#000a21',
        color: selectedButton === buttonText ? '#000a21' : 'white',
        border: selectedButton === buttonText ? '1px solid #000a21' : '1px solid #000a21',
        '&:hover': {
          backgroundColor: '#4651cc',
          color: 'white',
          border: '1px solid white',
        },
        textTransform: 'capitalize',
      }}
      onClick={() => handleButtonClick(buttonText)}
    >
      {buttonText.charAt(0).toUpperCase() + buttonText.slice(1)}
    </Button>
  );
}

export default TopBarButton;