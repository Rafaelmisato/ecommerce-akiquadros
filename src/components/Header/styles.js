import styled from 'styled-components';

export const HeaderWraper = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const Container = styled.div`
  padding: 20px 1.5%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;

  span > a {
    font-family: 'Vampiro One', cursive;
    font-size: 30px;
    color: #000;
    text-decoration: none;
  }

  button {
    background: #fff;
  }

  button + button {
    margin-left: 30px;
  }

  button:hover > svg {
    color: #9969bf;
    transition: color 0.3s;
  }

  svg {
    width: 22px;
    height: 22px;
    color: #3a3a3a;
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 0 4px;
  position: relative;
  animation: showRightToLeft 0.4s linear;

  ul > ul {
    animation: showRightToLeft 0.4s linear;
  }

  ul > ul > li > a {
    padding: 10px 0 10px 16px;
    font-size: 14px;
    border-bottom: 1px solid #dedede;
  }

  ul > ul > li > a:last-of-type {
    border: none;
  }

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

  @keyframes showRightToLeft {
    0% {
      position: relative;
      right: -110%;
    }
    100% {
      position: relative;
      right: 0px;
    }
  }
`;
