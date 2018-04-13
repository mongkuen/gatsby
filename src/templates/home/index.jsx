import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import FadeTransition from 'src/utils/FadeTransition';
import {
  media,
  transitionEase,
  red,
  redLite,
  green,
  greenLite,
  blue,
  blueLite,
  nearWhite,
  lightGray,
  gray,
  nearBlack,
} from 'src/styles';

const BlockGroup = styled.div`
  border-left: 0.5rem solid ${props => props.borderColor};

  ${media.desktop`
    border-left: none;
  `};
`;

const HalfBlock = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'initial'};
  align-items: center;
  height: calc(50vh - 2.5rem);
  background-color: ${props => props.backgroundColor || nearWhite};
  padding-right: 0.5rem;

  ${media.desktop`
    padding-right: 0;
  `};
`;

const Title = styled.h1`
  text-decoration: underline;
  opacity: 0.8;
  color: ${lightGray};
  ${transitionEase};

  &:hover {
    opacity: 1;
  }
`;

const IntroSub = styled.h3`
  color: ${nearWhite};
`;

const IntroHead = styled.h2`
  color: ${nearBlack};
  margin: 0;
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;

  ${media.phoneLandscape`
    padding: 0 4rem;
  `};

  ${media.tablet`
    padding: 0 8rem;
  `};
`;

const Index = ({ pathContext }) => (
  <FadeTransition>
    <BlockGroup borderColor={blueLite}>
      <HalfBlock backgroundColor={blue} justify="center">
        <Link to="work">
          <Title>&#8202; Work &#8202;</Title>
        </Link>
      </HalfBlock>
      <HalfBlock backgroundColor={gray}>
        <IntroWrapper>
          <IntroSub>Latest Work:</IntroSub>
          <IntroHead>Tovi (Alexandria Project)</IntroHead>
        </IntroWrapper>
      </HalfBlock>
    </BlockGroup>
    <BlockGroup borderColor={redLite}>
      <HalfBlock backgroundColor={red} justify="center">
        <Link to="me">
          <Title>&#8202; Mong-Kuen &#8202;</Title>
        </Link>
      </HalfBlock>
      <HalfBlock backgroundColor={gray}>
        <IntroWrapper>
          <IntroSub>Who Am I:</IntroSub>
          <IntroHead>
            Professional Developer &middot; Wannabe Designer &middot; Perpetual
            Learner
          </IntroHead>
        </IntroWrapper>
      </HalfBlock>
    </BlockGroup>
    <BlockGroup borderColor={greenLite}>
      <HalfBlock backgroundColor={green} justify="center">
        <Link to="posts">
          <Title>&#8202; Blog &#8202;</Title>
        </Link>
      </HalfBlock>
      <HalfBlock backgroundColor={gray}>
        <IntroWrapper>
          <IntroSub>Latest Post:</IntroSub>
          <IntroHead>{pathContext.latestPost.node.frontmatter.title}</IntroHead>
        </IntroWrapper>
      </HalfBlock>
    </BlockGroup>
  </FadeTransition>
);

Index.propTypes = {
  pathContext: PropTypes.shape({}).isRequired,
};

export default Index;
