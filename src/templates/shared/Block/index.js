import styled from 'styled-components';
import { media, nearWhite } from 'src/styles';

export const BlockBackground = styled.div`
  background-color: ${props => props.backgroundColor};
`;

export const Block = styled.div`
  padding: 3rem 1rem 2rem 1rem;

  ${media.tablet`
    padding: 6rem 3rem 2rem 3rem;
    padding: ${props => (props.hero ? '9rem 4rem 9rem 4rem' : '')};
  `};
`;

export const BlockBlurb = styled.div`
  text-align: center;

  h4 {
    color: ${props => props.color || nearWhite};
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
`;
