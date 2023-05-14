import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function MainSearchBar({ selectedButton, handleSearchClick }) {
  return (
    <TextField
      id="outlined-basic"
      label={`Pesquise por${selectedButton ? ` ${selectedButton}` : ''}`}
      variant="outlined"
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" onClick={handleSearchClick} style={{ cursor: 'pointer' }}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default MainSearchBar;