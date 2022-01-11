import React from 'react';
import WikipediaSearch from './components/WikipediaSearch';
import { Container } from '@mui/material';

const App = () => {

  return (
    <Container>
      <h1 data-cy="wiki-viewer-header">Wikipedia Search</h1>
      <WikipediaSearch />
    </Container>
  );
};

export default App;
