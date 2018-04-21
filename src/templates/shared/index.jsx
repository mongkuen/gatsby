import styled from 'styled-components';
import { media, grayDark } from 'src/styles';

export const Anchor = styled.span`
  position: absolute;
  margin-top: -4rem;

  ${media.tablet`
    margin-top: initial;
  `};
`;

export const Footer = styled.div`
  background-color: ${grayDark};
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 46rem;
`;

export const SmallBrand = styled.img`
  filter: saturate(0) brightness(0.2);
  margin: 0 auto 1rem auto;
  height: 2rem;
  display: block;
`;

export const BlurbTech = styled.h4`
  font-weight: 700;
`;
