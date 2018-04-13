import styled from 'styled-components';
import { media, transitionEase, rotate360, nearBlack } from 'src/styles';
import { themeBrandColor } from 'src/siteMetadata';
import sun from 'src/images/sun.svg';

export const Main = styled.main`
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Sun = styled.img.attrs({
  src: sun,
})`
  width: 1rem;
  height: 1rem;
  ${transitionEase};

  &:hover {
    filter: invert(1) drop-shadow(0px 0px 1px #fff);
    animation: ${rotate360} 7s linear infinite;
  }

  ${media.desktop`
    margin-bottom: 0;
    width: 4rem;
    height: 4rem;

    &:hover {
      filter: drop-shadow(0px 0px 1px #fff);
    }
  `};
`;

export const SunWrapper = styled.div`
  ${media.desktop`
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

  ${media.desktop`
    margin: 0.25rem 0;
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

  ${media.desktop`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    width: 50%;
    background-color: inherit;
    text-align: right;
    padding: 1rem 2rem 0 2rem;
  `};
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${media.desktop`
    display: block;
  `};
`;
