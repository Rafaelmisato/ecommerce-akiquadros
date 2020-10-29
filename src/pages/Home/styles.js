import styled from 'styled-components';

import bg from '../../assets/wallbg.png';

import img1 from '../../assets/rocklee.png';
import img2 from '../../assets/breakingbad.png';
import img3 from '../../assets/jake.png';
import img4 from '../../assets/capAmerica.png';
import img5 from '../../assets/darthVader.png';
import img6 from '../../assets/naruto.png';
import img7 from '../../assets/stormtrooper.png';
import img8 from '../../assets/onepiece.png';

export const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;

export const Wall = styled.div`
  background: url(${bg}) no-repeat center;
  width: 400px;
  height: 600px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  box-shadow: 0px 0px 14px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s linear;

  &:hover {
    box-shadow: 0px 0px 20px 10px #f0b9ec;
  }

  div {
    width: 320px;
    height: 420px;
    border: 16px solid #eae6ed;
    box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.6);
  }

  .bg1 {
    background: url(${img1}) no-repeat center;
    background-size: cover;
  }
  .bg2 {
    background: url(${img2}) no-repeat center;
    background-size: cover;
  }
  .bg3 {
    background: url(${img3}) no-repeat center;
    background-size: cover;
  }
  .bg4 {
    background: url(${img4}) no-repeat center;
    background-size: cover;
  }
  .bg5 {
    background: url(${img5}) no-repeat center;
    background-size: cover;
  }
  .bg6 {
    background: url(${img6}) no-repeat center;
    background-size: cover;
    background-position: top;
  }
  .bg7 {
    background: url(${img7}) no-repeat center;
    background-size: cover;
  }
  .bg8 {
    background: url(${img8}) no-repeat center;
    background-size: cover;
  }

  a {
    width: 100%;
    height: 100px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: rgb(255, 255, 255);
    color: #312d33;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    h5 {
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: 500;
    }

    p {
      font-weight: 700;
    }

    button {
      z-index: 1;
      position: absolute;
      bottom: -2px;
      width: 100%;
      height: 101%;
      outline: none;
      border: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      background: transparent;
      color: transparent;
      transition: 0.5s;
    }
  }

  a:hover > button {
    background: #e3aadf;
    color: #fff;
    height: 120%;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  min-height: 100px;
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 80px;
    height: 80px;
    background: pink;
    margin: 0 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: filter 300ms;

    &:hover {
      animation: icon3d 200ms infinite;
      filter: saturate(8);
    }

    svg {
      width: 50px;
      height: 50px;
      color: #fff;
    }
  }
  @keyframes icon3d {
    0% {
      box-shadow: 5px 4px rgba(244, 67, 54, 1), -5px -6px rgba(33, 150, 243, 1);
    }
    25% {
      box-shadow: -5px -6px rgba(244, 67, 54, 1), 5px 4px rgba(33, 150, 243, 1);
    }
    50% {
      box-shadow: 5px -4px rgba(244, 67, 54, 1), -8px 4px rgba(33, 150, 243, 1);
    }
    75% {
      box-shadow: -8px -4px rgba(244, 67, 54, 1),
        -5px -4px rgba(33, 150, 243, 1);
    }
    100% {
      box-shadow: -5px 0 rgba(244, 67, 54, 1), 5px -4px rgba(33, 150, 243, 1);
    }
  }
`;
