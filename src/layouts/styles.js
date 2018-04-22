import styled from 'styled-components';
import { media, transitionEase, rotate360, nearBlack } from 'src/styles';
import { themeBrandColor } from 'src/siteMetadata';
import sun from 'src/images/sun.svg';

export const Main = styled.main``;

export const Sun = styled.img.attrs({
  src: sun,
})`
  width: 1rem;
  height: 1rem;
  margin-bottom: 0;
  ${transitionEase};

  &:hover {
    filter: invert(1) drop-shadow(0px 0px 1px #fff);
    animation: ${rotate360} 7s linear infinite;
  }

  ${media.tablet`
    width: 4rem;
    height: 4rem;

    &:hover {
      filter: drop-shadow(0px 0px 1px #fff);
    }
  `};
`;

export const SunWrapper = styled.div`
  ${media.tablet`
    background-color: ${themeBrandColor};
    line-height: 0;
    padding: 0.5rem;
  `};
`;

export const Heading = styled.div`
  ${transitionEase};

  &:hover {
    text-shadow: 0px 0px 0.1px ${nearBlack};
  }

  ${media.tablet`
    margin: 0.25rem 0;
  `};
`;

export const Pusher = styled.div`
  height: 4rem;
  ${transitionEase};

  ${media.tablet`
    height: initial;
  `};
`;

export const Header = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: ${nearBlack};
  font-size: 0.75rem;
  padding: 1rem;
  background-color: ${themeBrandColor};
  position: fixed;
  top: 0;
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.3);
  z-index: 3;
  ${transitionEase};

  ${media.tablet`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    width: 50%;
    width: ${props => props.wide && '100%'};
    background-color: initial;
    text-align: right;
    padding: 2rem 2rem 0 2rem;
    box-shadow: initial;
  `};
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${media.tablet`
    display: block;
  `};
`;
