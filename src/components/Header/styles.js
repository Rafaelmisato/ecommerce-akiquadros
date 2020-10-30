import styled from 'styled-components';

export const HeaderWraper = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 0px;
`;

export const Container = styled.div`
  padding-top: ${({ header }) => (header ? '5px' : '20px')};
  padding-bottom: ${({ header }) => (header ? '5px' : '20px')};
  padding-left: 1.5%;
  padding-right: 1.5%;
  background: ${({ header }) => (header ? 'pink' : '#fff')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
  transition: all 0.4s ease-in-out;

  span > a {
    font-family: 'Vampiro One', cursive;
    font-size: ${({ header }) => (header ? '25px' : '30px')};
    color: #000;
    text-decoration: none;
  }

  button {
    padding-top: 4px;
    background: transparent;
  }

  button + button {
    margin-left: 30px;
  }

  button:hover > svg {
    color: #9969bf;
    transition: color 0.3s;
  }

  button:hover > a > svg {
    color: #9969bf;
    transition: color 0.3s;
  }

  button > a:hover > div {
    position: absolute;
    top: ${({ header }) => (header ? '42px' : '78px')};
    right: 10px;
    transition: all 0.4s linear;
  }

  svg {
    width: 22px;
    height: 22px;
    color: #3a3a3a;
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-direction: column;
  background: #fff;
  padding: 0 4px;
  position: relative;
  transform: translateX(-100%);
  animation: ${({ openMenu }) =>
    openMenu ? 'closeMenu 0.6s forwards' : 'openMenu 0.4s forwards'};

  ul > li {
    border-bottom: 1px solid #dedede;

    a,
    button {
      color: #3a3a3a;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      width: 100%;
      background: transparent;

      svg {
        color: #3a3a3a;
      }
    }

    a:hover {
      color: #fff;
      background: #c45abd;
    }

    button:hover {
      color: #fff;
      background: #c45abd;
    }

    button:hover > svg {
      color: #fff;
    }
  }

  @keyframes openMenu {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes closeMenu {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

export const SubList = styled.ul`
  height: ${({ open }) => (open ? '100%' : '0')};
  opacity: ${({ open }) => (open ? '100%' : '0')};

  transition: all 0.6s ease-in-out;

  li > a {
    padding: 10px 0 10px 16px;
    font-size: 14px;
    border-bottom: 1px solid #dedede;
  }

  li > a:last-of-type {
    border: none;
  }
`;
