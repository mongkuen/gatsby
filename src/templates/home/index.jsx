import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import FadeTransition from 'src/utils/FadeTransition';
import {
  red,
  redDark,
  green,
  greenDark,
  blue,
  blueDark,
  gray,
} from 'src/styles';
import {
  BlockGroup,
  HalfBlock,
  Title,
  IntroSub,
  IntroHead,
  IntroWrapper,
} from 'src/templates/home/homeStyles';

const Index = ({ pathContext }) => (
  <FadeTransition>
    <BlockGroup borderColor={blue}>
      <HalfBlock backgroundColor={blueDark} justify="center">
        <Link to="work">
          <Title>&#8202; Work &#8202;</Title>
        </Link>
      </HalfBlock>
      <HalfBlock backgroundColor={gray}>
        <IntroWrapper padding="padding-top: 7rem;">
          <IntroSub>Latest Work:</IntroSub>
          <IntroHead>Tovi (Alexandria Project)</IntroHead>
        </IntroWrapper>
      </HalfBlock>
    </BlockGroup>
    <BlockGroup borderColor={red}>
      <HalfBlock backgroundColor={redDark} justify="center">
        <Link to="me">
          <Title>&#8202; Mong-Kuen &#8202;</Title>
        </Link>
      </HalfBlock>
      <HalfBlock backgroundColor={gray}>
        <IntroWrapper opacity="1">
          <IntroSub>Who Am I:</IntroSub>
          <IntroHead>
            Professional Developer &middot; Wannabe Designer &middot;
            Perpetually Inquisitive
          </IntroHead>
        </IntroWrapper>
      </HalfBlock>
    </BlockGroup>
    <BlockGroup borderColor={green}>
      <HalfBlock backgroundColor={greenDark} justify="center">
        <Link to="posts">
          <Title>&#8202; Blog &#8202;</Title>
        </Link>
      </HalfBlock>
      <HalfBlock backgroundColor={gray}>
        <IntroWrapper padding="padding-bottom: 7rem;">
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
