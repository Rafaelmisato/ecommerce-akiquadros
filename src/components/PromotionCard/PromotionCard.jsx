import React from 'react';

import { FaTruck, FaLock } from 'react-icons/fa';
import { BsCreditCard } from 'react-icons/bs';
import {
  Container,
  CardContainer,
  Card,
  TextCard,
  TextCardObs,
} from './styles';

const PromotionCard = () => {
  return (
    <Container>
      <CardContainer>
        <Card>
          <FaTruck />
        </Card>
        <TextCard>Frete Grátis</TextCard>
        <TextCardObs>Em compras acima de R$200,00</TextCardObs>
      </CardContainer>

      <CardContainer>
        <Card>
          <BsCreditCard />
        </Card>
        <TextCard>3x sem juros</TextCard>
        <TextCardObs>Ou até 12x com juros</TextCardObs>
      </CardContainer>

      <CardContainer>
        <Card>
          <FaLock />
        </Card>
        <TextCard>Compra Segura</TextCard>
        <TextCardObs>Ou seu dinheiro de volta</TextCardObs>
      </CardContainer>
    </Container>
  );
};

export default PromotionCard;
