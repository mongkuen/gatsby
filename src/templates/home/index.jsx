import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  media,
  red,
  orange,
  yellow,
  green,
  blue,
  nearWhite,
  lightGray,
  nearBlack,
} from 'src/styles';

const HalfBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(50vh - 2.5rem);
  background-color: ${props => props.backgroundColor || nearWhite};
  border-left: 12px solid ${props => props.borderColor || nearBlack};
  padding-right: 12px;

  ${media.desktop`
    border-left: none;
    padding-right: 0;
  `};
`;

const Title = styled.h1`
  text-decoration: underline;
  opacity: 70%;
  color: ${lightGray};
`;

const IntroSub = styled.h3`
  color: ${nearWhite};
`;

const IntroHead = styled.h2`
  color: ${nearBlack};
  margin: none;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 1rem;
`;

const Index = ({ pathContext }) => (
  <div>
    <HalfBlock backgroundColor={blue} borderColor={orange}>
      <Title>&#8202; Work &#8202;</Title>
    </HalfBlock>
    <HalfBlock backgroundColor={green} borderColor={orange}>
      <TitleWrapper>
        <IntroSub>Latest Work:</IntroSub>
        <IntroHead>Tovi (Alexandria Project)</IntroHead>
      </TitleWrapper>
    </HalfBlock>
    <HalfBlock backgroundColor={orange} borderColor={red}>
      <Title>&#8202; Mong-Kuen &#8202;</Title>
    </HalfBlock>
    <HalfBlock backgroundColor={yellow} borderColor={red}>
      <TitleWrapper>
        <IntroSub>Who Am I:</IntroSub>
        <IntroHead>
          Professional Developer &middot; Wannabe Designer &middot; Perpetual
          Learner
        </IntroHead>
      </TitleWrapper>
    </HalfBlock>
    <HalfBlock backgroundColor={red} borderColor={blue}>
      <Title>&#8202; Blog &#8202;</Title>
    </HalfBlock>
    <HalfBlock backgroundColor={orange} borderColor={blue}>
      <TitleWrapper>
        <IntroSub>Latest Post:</IntroSub>
        <IntroHead>{pathContext.latestPost.node.frontmatter.title}</IntroHead>
      </TitleWrapper>
    </HalfBlock>
  </div>
);

Index.propTypes = {
  pathContext: PropTypes.shape({}).isRequired,
};

export default Index;
