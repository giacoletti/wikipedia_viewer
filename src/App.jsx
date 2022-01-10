import React from 'react';
import { Container, Fab, InputBase } from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SearchIcon from '@mui/icons-material/Search';

const App = () => {

  return (
    <Container>
      <h1 data-cy="wiki-viewer-header">Wikipedia Search</h1>
      <Fab data-cy="random-article-btn" color="secondary" sx={{ m: 1 }}>
        <ShuffleIcon />
      </Fab>
      <Fab data-cy="search-article-btn" color="primary" 
        variant="extended" sx={{ m: 1 }}>
        <SearchIcon />
        <InputBase placeholder="Search" sx={{ m: 1, color: 'white' }} />
      </Fab>
    </Container>
  );
};

export default App;
