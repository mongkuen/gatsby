import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media, lightGray, nearWhite } from 'src/styles';
import { Container, SmallBrand } from 'src/pages/shared';
import Framed from 'src/pages/shared/Framed';

const BlockBackground = styled.div`
  background-color: ${props => props.backgroundColor};
`;

const BlockBrand = styled.img`
  filter: saturate(0) brightness(10);
  margin: 0 auto;
  display: block;
  width: 10rem;
  margin-bottom: 2.5rem;
  max-height: 4rem;
`;

const Block = styled.div`
  padding: 3rem 1rem 2rem 1rem;

  ${media.tablet`
    padding: 6rem 3rem 2rem 3rem;
    padding: ${props => (props.hero ? '9rem 4rem 9rem 4rem' : '')};
  `};
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

const BlockBlurb = styled.div`
  text-align: center;

  h4 {
    color: ${props => props.color || nearWhite};
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
`;

const BlockLead = styled.h2`
  text-align: center;
`;

const Caption = styled.h5`
  text-align: center;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
`;

/* eslint-disable object-curly-newline */
export const Hero = ({
  color,
  brand,
  jobDescription,
  title,
  blurb,
  className,
}) => (
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

export const WorkBlock = ({
  color,
  smallBrand,
  blockLead,
  blockBlurb,
  caption,
  src,
  alt,
}) => (
  <BlockBackground backgroundColor={color}>
    <Block>
      <Container>
        {smallBrand && <SmallBrand src={smallBrand} />}
        <BlockLead>{blockLead}</BlockLead>
        <BlockBlurb color="initial">{blockBlurb}</BlockBlurb>
      </Container>
    </Block>
    <Caption>{caption}</Caption>
    <Framed src={src} alt={alt} />
  </BlockBackground>
);

WorkBlock.propTypes = {
  color: PropTypes.string,
  smallBrand: PropTypes.string,
  blockLead: PropTypes.string.isRequired,
  blockBlurb: PropTypes.shape({}).isRequired,
  caption: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

WorkBlock.defaultProps = {
  color: '',
  smallBrand: '',
};
