import React from 'react';

import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import PromotionCard from '../../components/PromotionCard/PromotionCard';
import Footer from '../../components/Footer/Footer';

import { Container, Wall, SocialMedia } from './styles';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <PromotionCard />

      <SectionTitle title="NOVIDADES" />

      <Container>
        <Wall>
          <div className="bg1" />
          <a href="teste">
            <h5>Rock Lee - Naruto</h5>
            <p>R$ 29,90</p>
            <button type="button">Comprar</button>
          </a>
        </Wall>
        <Wall>
          <div className="bg2" />
          <a href="teste">
            <h5>Breaking bad</h5>
            <p>R$ 29,90</p>
            <button type="button">Comprar</button>
          </a>
        </Wall>
      </Container>

      <Container>
        <Wall>
          <div className="bg3" />
          <a href="teste">
            <h5>Jake - Hora de aventura</h5>
            <p>R$ 29,90</p>
            <button type="button">Comprar</button>
          </a>
        </Wall>
        <Wall>
          <div className="bg4" />
          <a href="teste">
            <h5>Capitão América - Vingadores</h5>
            <p>R$ 29,90</p>
            <button type="button">Comprar</button>
          </a>
        </Wall>
      </Container>

      <Container>
        <Wall>
          <div className="bg5" />
          <a href="teste">
            <h5>Darth Vader - Star Wars</h5>
            <p>R$ 29,90</p>
            <button type="button">Comprar</button>
          </a>
        </Wall>
        <Wall>
          <div className="bg6" />
          <a href="teste">
            <h5>Cross Over - Naruto Goku</h5>
            <p>R$ 29,90</p>
            <button type="button">Comprar</button>
          </a>
        </Wall>
      </Container>

      <Container>
        <Wall>
          <div className="bg7" />
          <a href="teste">
            <h5>Stormtrooper - Star Wars</h5>
            <p>R$ 29,90</p>
            <button type="button">Comprar</button>
          </a>
        </Wall>
        <Wall>
          <div className="bg8" />
          <a href="teste">
            <h5>One Piece</h5>
            <p>R$ 29,90</p>
            <button type="button">Comprar</button>
          </a>
        </Wall>
      </Container>

      <SocialMedia>
        <div>
          <FaTwitter />
        </div>
        <div>
          <FaFacebookSquare />
        </div>
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaWhatsapp />
        </div>
      </SocialMedia>

      <Footer />
    </>
  );
};

export default Home;
