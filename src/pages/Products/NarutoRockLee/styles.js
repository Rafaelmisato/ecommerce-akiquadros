import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  color: #332f33;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectSize = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 20px;

  span {
    display: flex;
    margin: 10px 0;
    font-weight: 700;
  }

  select {
    display: flex;
    flex: 1;
    background: #e1e8f5;
    border: none;
    border: transparent;
    padding: 10px;
    width: 100%;
    border-radius: 6px;
    box-shadow: -2px 2px 6px 0px #d3dae8;
    color: #332f33;
    margin: 0 auto;
  }

  h5 {
    font-size: 26px;
    text-align: center;
    margin: 14px;
    color: #c257c2;
  }

  section {
    display: flex;

    button:hover {
      box-shadow: 1px 3px 6px #c257c2;
    }

    button {
      margin: 0 auto;
      background: #c257c2;
      padding: 16px 20px;
      border-radius: 6px;
      color: #fff;
      display: flex;
      align-items: center;
      font-weight: 600;
      transition: all 0.3s ease-in-out;

      svg {
        margin-right: 10px;
      }
    }
  }

  p {
    font-size: 12px;
    margin-top: 20px;
  }
`;

export const Shipping = styled.div`
  display: flex;
  transform: ${({ hiddenInput }) =>
    hiddenInput ? 'translateX(0)' : 'translateX(120%)'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  background: ${({ hiddenInput }) =>
    hiddenInput ? 'rgb(225, 232, 245, 1)' : 'rgb(225, 232, 245, 0)'};
  border-radius: 30px;
  box-shadow: ${({ hiddenInput }) =>
    hiddenInput ? '-2px 2px 6px 0px #d3dae8' : 'none'};
  color: #332f33;
  visibility: ${({ hiddenInput }) => (hiddenInput ? 'show' : 'hidden')};
  border: ${({ selected }) =>
    selected ? '2px solid #c257c2' : ' 2px solid transparent'};
  transition: border 0.3s linear;
  padding: 10px 20px;
  width: 300px;
  transition: all 0.4s ease-in-out;

  button:hover {
    box-shadow: 0px 0px 8px 4px #969eb5;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0px 0px 6px 6px #d3dae8;
    padding: 0;

    svg {
      margin-top: 2px;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  width: 100%;
`;

export const Description = styled.div`
  max-width: 1280px;
  margin: 40px 0 40px 0;
  padding: 0px 20px;

  span {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    margin: 20px 0px;
  }
`;
