import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'src/templates/shared';
import { BlockBackground, Block, BlockBlurb } from 'src/templates/shared/Block';
import { lightGray, nearWhite } from 'src/styles';

const BlockBrand = styled.img`
  filter: saturate(0) brightness(10);
  margin: 0 auto;
  display: block;
  max-width: 10rem;
  margin-bottom: 2.5rem;
  max-height: 4rem;
`;

const BlockDescription = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h4 {
    color: ${lightGray};
    margin-bottom: 0.25rem;
    opacity: 0.6;
  }
`;

const BlockTitle = styled.h2`
  font-weight: 400;
  color: ${nearWhite};
  text-align: center;
  margin-bottom: 2.5rem;
`;

/* eslint-disable object-curly-newline */
const Hero = ({ color, brand, jobDescription, title, blurb, className }) => (
  <BlockBackground backgroundColor={color} className={className}>
    <Block hero>
      <Container>
        <BlockBrand src={brand} />
        <BlockDescription>{jobDescription}</BlockDescription>
        <BlockTitle>{title}</BlockTitle>
        <BlockBlurb>{blurb}</BlockBlurb>
      </Container>
    </Block>
  </BlockBackground>
);

Hero.propTypes = {
  color: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  jobDescription: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
};

Hero.defaultProps = {
  className: '',
};

export default Hero;
