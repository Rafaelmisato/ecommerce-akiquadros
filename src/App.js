import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
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
        {/* <MessengerCustomerChat
          pageId="106559391258089"
          appId="362286935025693"
        /> */}
        {/* fb so funciona apos deploy */}
        {/* pagina single quase pronta, falta api correios */}
        {/* configurar pagina carrinho */}
        {/* adicionar ao carrinho */}
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
