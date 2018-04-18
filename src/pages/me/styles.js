import styled from 'styled-components';
import colorProfile from 'src/images/colorProfile.jpg';
import {
  media,
  transitionEase,
  gray,
  grayMedium,
  nearWhite,
  nearBlack,
} from 'src/styles';

export const ProfilePicture = styled.img.attrs({
  src: colorProfile,
})`
  border-radius: 50%;
  height: 8rem;
  width: 8rem;
  border: 0.25rem solid #fff;
`;

export const IntroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.background};
  padding: 2rem 1rem;

  ${media.tablet`
    min-height: 19rem;
  `};

  ${media.desktop`
    padding: 2rem 5rem;
    height: ${props => props.desktopHeight};
  `};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
    flex-direction: row;
  `};
`;

export const Greeting = styled.h2`
  letter-spacing: 0.05rem;
  color: ${nearWhite};
  margin-bottom: 1rem;
  text-align: center;
`;

export const Intro = styled.h3`
  max-width: 30rem;
  letter-spacing: 0.04rem;
  color: ${nearBlack};
  margin-bottom: 0rem;
  line-height: 1.35;
  text-align: center;
`;

export const Caret = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${gray};
  transform: rotate(45deg);
  position: absolute;
  bottom: -1.5rem;

  ${media.desktop`
    width: 3rem;
    height: 3rem;
    right: -1.5rem;
    bottom: calc(50vh + 5.5rem);
  `};
`;

export const Half = styled.div`
  width: 100%;
  ${media.desktop`
    width: 50%
  `};
`;

export const Description = Intro.extend`
  text-align: left;
  color: ${nearBlack};
  margin: 0.5rem 0;
`;

export const Highlight = styled.span`
  color: ${grayMedium};
  text-decoration: underline;
  ${transitionEase};

  &:hover {
    color: #666;
  }
`;
