import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function MainSearchBar({ selectedButton, handleSearchClick }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClick = () => {
    handleSearchClick(searchValue);
  };

  return (
    <TextField
      id="outlined-basic"
      label={`Pesquise por${selectedButton ? ` ${selectedButton}` : ''}`}
      variant="outlined"
      size="small"
      value={searchValue}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          >
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default MainSearchBar;