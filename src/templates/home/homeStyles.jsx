import styled from 'styled-components';
import {
  media,
  transitionEase,
  nearWhite,
  lightGray,
  nearBlack,
} from 'src/styles';

export const BlockGroup = styled.div`
  border-left: 0.5rem solid ${props => props.borderColor};

  ${media.desktop`
    border-left: none;
    display: flex;
    flex-direction: row-reverse;
  `};
`;

export const HalfBlock = styled.div`
  display: flex;
  align-items: center;
  height: calc(50vh - 2.5rem);
  background-color: ${props => props.backgroundColor || nearWhite};
  padding-right: 0.5rem;
  ${transitionEase};

  ${media.desktop`
    padding-right: 0;
    height: calc(33.33vh);
    width: 50%;
  `};
`;

export const Title = styled.h1`
  text-decoration: underline;
  opacity: 0.8;
  color: ${lightGray};
  ${transitionEase};
`;

export const PictureBlock = HalfBlock.extend`
  cursor: pointer;
  justify-content: ${props => props.justify || 'initial'};

  background-image: url('${props => props.image}');
  background-size: ${props => props.imageSize || 'auto'};
  background-repeat: no-repeat;
  background-position: 50%;

  &:hover {
    background-size: ${props => props.hoverSize || 'auto'};
    ${Title} {
      opacity: 1;
      text-shadow: 0px 0px 3px #fff;
    }
  }
`;

export const IntroSub = styled.h3`
  color: ${nearWhite};
  margin-bottom: 0rem;
`;

export const IntroHead = styled.h2`
  color: ${nearBlack};
  margin: 0;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  ${transitionEase};

  ${media.phoneLandscape`
    padding: 0 4rem;
  `};

  ${media.tablet`
    padding: 0 8rem;
  `};

  ${media.desktop`
    ${props => props.padding};
    width: 100%;
    text-align: right;
    padding-left: 1rem;
    padding-right: 6rem;
    opacity: ${props => props.opacity || 0.5};

    &:hover {
      opacity: 1;
    }
  `};
`;
