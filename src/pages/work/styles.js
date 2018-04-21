import styled from 'styled-components';
import { media, transitionEase, nearWhite, nearBlack } from 'src/styles';

export const Block = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 2.5rem 1rem 0 1rem;
  text-align: center;
  ${transitionEase};

  ${media.tablet`
    padding-top: 10rem;
  `};
`;

export const Description = styled.h4`
  line-height: 1.25;
  margin-bottom: 0.5rem;
`;

export const DescriptionWrapper = styled.div`
  margin: 1.25rem 0;
`;

export const Brand = styled.img`
  filter: saturate(0) brightness(10);
  height: 2rem;
  margin: 0.5rem;
`;

export const InvertBrand = Brand.extend`
  filter: saturate(0) brightness(0);
`;

export const Button = styled.div`
  display: inline-block;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  font-size: 0.75rem;
  margin: 0.5rem 0 2rem 0;
  background-color: ${nearWhite};
  ${transitionEase};

  &:hover {
    color: ${nearWhite};
    background-color: ${nearBlack};
  }
`;

export const InvertButton = Button.extend`
  background-color: ${nearBlack};
  color: ${nearWhite};

  &:hover {
    color: ${nearBlack};
    background-color: ${nearWhite};
  }
`;
