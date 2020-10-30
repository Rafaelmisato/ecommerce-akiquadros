import React from 'react';
import { Link } from 'react-router-dom';

import { FaChevronRight } from 'react-icons/fa';
import { Container } from './styles';

const styles = ({ title, category }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <div>
        <Link to="/">Início</Link>
        <FaChevronRight />
        <Link to={`/${category}`}>{category}</Link>
        <FaChevronRight />
        <p>{title}</p>
      </div>
    </Container>
  );
};

export default styles;
