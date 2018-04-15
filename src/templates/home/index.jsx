import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
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
  PictureBlock,
  Title,
  IntroSub,
  IntroHead,
  IntroWrapper,
} from 'src/templates/home/homeStyles';
import profile from 'src/images/profile.png';
import licor from 'src/images/licor.png';
import js from 'src/images/js.png';

const Index = ({ pathContext }) => (
  <FadeTransition>
    <BlockGroup borderColor={blue}>
      <PictureBlock
        backgroundColor={blueDark}
        justify="center"
        image={licor}
        imageSize="65%"
        hoverSize="70%"
        onClick={() => navigateTo('/work')}
      >
        <Title>&#8202; Work &#8202;</Title>
      </PictureBlock>
      <HalfBlock backgroundColor={gray}>
        <IntroWrapper padding="padding-top: 6.5rem;">
          <IntroSub>Latest Work:</IntroSub>
          <IntroHead>Tovi (Alexandria Project)</IntroHead>
        </IntroWrapper>
      </HalfBlock>
    </BlockGroup>
    <BlockGroup borderColor={red}>
      <PictureBlock
        backgroundColor={redDark}
        justify="center"
        image={profile}
        imageSize="auto 100%"
        hoverSize="auto 105%"
        onClick={() => navigateTo('/me')}
      >
        <Title>&#8202; Mong-Kuen &#8202;</Title>
      </PictureBlock>
      <HalfBlock backgroundColor={gray}>
        <IntroWrapper opacity="1">
          <IntroSub>Who Am I:</IntroSub>
          <IntroHead>
            Full-Stack Dev &middot; Frontend Obsessed &middot; Perpetually
            Inquisitive
          </IntroHead>
        </IntroWrapper>
      </HalfBlock>
    </BlockGroup>
    <BlockGroup borderColor={green}>
      <PictureBlock
        backgroundColor={greenDark}
        justify="center"
        image={js}
        imageSize="auto 75%"
        hoverSize="auto 80%"
        onClick={() => navigateTo('/posts')}
      >
        <Title>&#8202; Blog &#8202;</Title>
      </PictureBlock>
      <HalfBlock backgroundColor={gray}>
        <IntroWrapper padding="padding-bottom: 6.5rem;">
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
