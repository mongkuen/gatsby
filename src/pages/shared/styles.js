import styled from 'styled-components';
import {
  transitionEase,
  media,
  grayMedium,
  grayDark,
  nearWhite,
} from 'src/styles';

export const Contact = styled.div`
  background-color: ${grayDark};
  width: 100%;
  text-align: center;
  padding: 3.5rem 0;
  color: ${grayMedium};

  h4 {
    color: ${grayMedium};
  }

  a {
    ${transitionEase};
    &:hover {
      color: ${nearWhite};
    }
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;

  img {
    filter: invert(0.9);
    width: 1rem;
    height: 1rem;
    margin: 0 0.25rem;
    opacity: 0.65;
    ${transitionEase};

    &: hover {
      filter: invert(1);
      opacity: 1;
    }
  }
`;

export const Anchor = styled.span`
  position: absolute;
  margin-top: -4rem;

  ${media.desktop`
    margin-top: initial;
  `};
`;
