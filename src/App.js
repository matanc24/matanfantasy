import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Container from './components/Container';
import Content from './components/Content';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Content />
      </Container>
    </>
  );
}

export default App;
