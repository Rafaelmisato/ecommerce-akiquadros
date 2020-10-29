import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding-top: 20px;
  background: #232224;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 260px;

  .footer-menu {
    color: #f0f3fa;
    font-weight: 700;
    font-size: 20px;
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    p {
      cursor: default;
    }

    ul {
      margin-top: 10px;
    }

    ul > li {
      display: flex;
      flex-direction: column;

      a {
        color: #f0f3fa;
        text-decoration: none;
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 4px;
        transition: color 0.4s;

        &:hover {
          color: #78419c;
        }
      }
    }
  }

  .footer {
    margin-top: 20px;
    background: #3b383d;
    display: flex;
    width: 100%;
    padding: 20px 0;
    justify-content: center;

    p {
      cursor: default;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ccc;
      font-size: 12px;

      & + p {
        margin-left: 20px;
      }

      svg {
        width: 14px;
        height: 14px;
        margin-right: 4px;
      }
    }
  }
`;
