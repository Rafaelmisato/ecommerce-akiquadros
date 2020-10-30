import React, { useState, useCallback } from 'react';
import { FaShoppingCart, FaChevronRight } from 'react-icons/fa';
import {
  Container,
  Info,
  SelectSize,
  Shipping,
  Input,
  Description,
} from './styles';

import HeaderSingle from '../../../components/HeaderSingle/HeaderSingle';
import PhotoGrid from '../../../components/PhotoGrid/PhotoGrid';

import Center from '../../../components/Center/Center';

import image from '../../../assets/rocklee.png';

const NarutoRockLee = () => {
  const [selected, setSelected] = useState(false);
  const [hiddenInput, setHiddenInput] = useState(false);

  const handleInputBlur = useCallback(() => {
    setSelected(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setSelected(true);
  }, []);

  return (
    <Center>
      <HeaderSingle title="Naruto Rock Lee" category="Animes" />
      <Container>
        <Info>
          <PhotoGrid>
            <img src={image} alt="Rock Lee" />
          </PhotoGrid>
          <SelectSize>
            <form>
              <span>Selecione o tamanho</span>
              <select name="size" id="size">
                <option value="A5">A5 (15 x 20 cm)</option>
                <option value="A4">A5 (20 x 30 cm)</option>
                <option value="A4">A5 (30 x 40 cm)</option>
                <option value="A2">A5 (40 x 60 cm)</option>
              </select>

              <span>Moldura</span>
              <select name="frame" id="frame">
                <option value="branco">Branca de madeira</option>
                <option value="preto">Preta de madeira</option>
                <option value="rosa">Rosa de madeira</option>
                <option value="tabacco">Tabacco de madeira</option>
                <option value="natural">Natural de madeira</option>
              </select>

              <span>Acabamento</span>
              <select name="acrylic" id="acrylic">
                <option value="no">Sem acrílico</option>
                <option value="yes">Com acrílico</option>
              </select>
            </form>

            <h5>R$29,90*</h5>

            <section>
              <button
                type="button"
                onClick={() => setHiddenInput(!hiddenInput)}
              >
                Calcular frete
              </button>

              <button type="button">
                <FaShoppingCart />
                Comprar
              </button>
            </section>

            <Shipping
              hiddenInput={hiddenInput}
              selected={selected}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            >
              <Input type="text" placeholder="CEP" />
              <button type="button">
                <FaChevronRight color="black" />
              </button>
            </Shipping>

            <p>(*Mais o custo do frete)</p>
          </SelectSize>
        </Info>

        <Description>
          <span>Prazo</span>
          <p>
            Os quadros levam até 8 dias úteis para serem produzidos e após a
            produção eles entram em transporte para serem entregues em seu
            endereço. Você pode calcular o prazo de entrega diretamente na
            página do produto informando o seu CEP.
          </p>

          <span>Papel e impressão</span>
          <p>
            As impressões são feitas com tecnologia digital de altíssima
            resolução, em gráfica certificada pelo selo FSC® de gestão florestal
            responsável. Usamos papel resistente escolhido a dedo para garantir
            firmeza, qualidade e cores lindas ao seu quadro.
          </p>

          <span>Molduras</span>
          <p>
            Todos os quadros acompanham molduras produzidas a partir de madeira
            maciça com pinturas laqueadas e acabamentos caprichados realizados
            por quem mais entende do assunto.
          </p>

          <span>Acabamento</span>
          <p>
            Recomendamos adicionar o vidro de acrílico ao seu quadro, além de
            dar mais vida e brilho, ele irá proteger a imagem e aumentará a
            durabilidade do quadro, evitando desgates naturais e ambientais.
          </p>
        </Description>
      </Container>
    </Center>
  );
};

export default NarutoRockLee;
