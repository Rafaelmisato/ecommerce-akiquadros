import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';

import GlobalStyle from './styles/global';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GlobalContainer from './components/GlobalContainer/GlobalContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <GlobalContainer>
          <Routes />
        </GlobalContainer>
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
