import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <div className="footer-menu">
        <div>
          <p>Navege</p>
          <ul>
            <li>
              <a href="teste"> Página Inicial</a>
              <a href="teste"> Categorias</a>
              <a href="teste"> Crie seu quadro</a>
              <a href="teste"> Pagamento</a>
            </li>
          </ul>
        </div>

        <div>
          <p>Área do cliente</p>
          <ul>
            <li>
              <a href="teste"> Dúvidas Frequentes</a>
              <a href="teste"> Trocas e devoluções</a>
              <a href="teste"> Fale Conosco</a>
            </li>
          </ul>
        </div>

        <div>
          <p>Segurança</p>
          <ul>
            <li>
              <a href="teste"> Lock google</a>
              <a href="teste"> Pagseguro</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer">
        <p>&#169; 2020 AkiQuadros</p>
        <p>CNPJ: 11.111.111.0001-00</p>
        <p>
          <FaWhatsapp />
          Whatsapp: (11) 99999-9999
        </p>
        <p>
          <FiMail />
          Email@email.com
        </p>
      </div>
    </Container>
  );
};

export default Footer;
