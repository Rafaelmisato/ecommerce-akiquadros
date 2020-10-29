import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { TiThMenu } from 'react-icons/ti';
import { FaShoppingCart } from 'react-icons/fa';
import { BsCaretDownFill } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { Container, HeaderWraper, MenuList, SubList } from './styles';
import CartPopup from '../CartPopup/CartPopup';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [header, setHeader] = useState(false);

  const resizeHeader = () => {
    if (window.scrollY >= 30) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener('scroll', resizeHeader);

  return (
    <HeaderWraper>
      <Container header={header}>
        <span>
          <Link to="/">AkiQuadros</Link>
        </span>
        <div>
          <button type="button" onClick={() => setOpenMenu(!openMenu)}>
            <TiThMenu />
          </button>
          <button type="button">
            <GoSearch />
          </button>
          <button type="button">
            <Link to="/cart">
              <FaShoppingCart />
              <CartPopup title="Nenhum produto no carrinho" />
            </Link>
          </button>
        </div>
      </Container>

      <MenuList openMenu={openMenu}>
        <ul>
          <li>
            <a href="home">
              <span>Página inicial</span>
            </a>
          </li>
          <li>
            <button type="button" onClick={() => setOpen(!open)}>
              <span>Categorias</span> <BsCaretDownFill />
            </button>
          </li>
          <SubList open={open}>
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
          </SubList>
          <li>
            <a href="create">
              <span>Crie seu quadro</span>
            </a>
          </li>
        </ul>
      </MenuList>
    </HeaderWraper>
  );
};

export default Header;
