import React, { useState } from 'react';

import { TiThMenu } from 'react-icons/ti';
import { FaShoppingCart } from 'react-icons/fa';
import { BsCaretDownFill } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { Container, HeaderWraper, MenuList } from './styles';
import './animations.css';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  return (
    <HeaderWraper>
      <Container>
        <span>
          <a href="home">AkiQuadros</a>
        </span>
        <div>
          <button type="button" onClick={() => setOpenMenu(!openMenu)}>
            <TiThMenu />
          </button>
          <button type="button">
            <GoSearch />
          </button>
          <button type="button">
            <FaShoppingCart />
          </button>
        </div>
      </Container>

      {openMenu && (
        <MenuList>
          <ul>
            <li>
              <a href="home">
                <span>Página inicial</span>
              </a>
            </li>
            <li>
              <button type="button" onClick={() => setOpenSub(!openSub)}>
                <span>Categorias</span> <BsCaretDownFill />
              </button>
            </li>
            {openSub && (
              <ul>
                <li>
                  <a href="teste">Animais</a>
                  <a href="teste">Figurativos</a>
                  <a href="teste">Filmes</a>
                  <a href="teste">Frases</a>
                  <a href="teste">Geométricos</a>
                  <a href="teste">Infatil</a>
                  <a href="teste">Música</a>
                  <a href="teste">Retrô e Vintage</a>
                  <a href="teste">Séries</a>
                  <a href="teste">Personalizáveis</a>
                </li>
              </ul>
            )}
            <li>
              <a href="create">
                <span>Crie seu quadro</span>
              </a>
            </li>
          </ul>
        </MenuList>
      )}
    </HeaderWraper>
  );
};

export default Header;
