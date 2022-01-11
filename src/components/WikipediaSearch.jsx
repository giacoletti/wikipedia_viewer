import React, { useState } from 'react';
import { Fab, InputBase } from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SearchIcon from '@mui/icons-material/Search';

const WikipediaSearch = () => {
  const [wikiSearch, setWikiSearch] = useState();

  const handleChange = (event) => {
    setWikiSearch(event.target.value);
  };

  const handleOnEnter = async (event) => {
    if (event.key === 'Enter') {
      // make wikipedia api call
    }
  }

  return (
    <>
      <Fab data-cy="random-article-btn" color="secondary" sx={{ m: 1 }}>
        <ShuffleIcon />
      </Fab>
      <Fab data-cy="search-article-btn" color="primary" 
        variant="extended" sx={{ m: 1 }}>
        <SearchIcon />
        <InputBase data-cy="search-article-input" onChange={handleChange}
          onKeyPress={handleOnEnter}
          placeholder="Search" sx={{ m: 1, color: 'white' }} />
      </Fab>
    </>
  )
};

export default WikipediaSearch;
