import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import PageTransition from 'gatsby-plugin-page-transitions';
import { profile, licor, js } from 'src/templates/home/backgrounds';
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
  Intro,
  IntroSub,
  IntroHead,
  IntroWrapper,
  Caret,
} from 'src/templates/home/styles';

const Index = ({ pathContext }) => (
  <PageTransition>
    <BlockGroup borderColor={blue}>
      <Link to="/work" style={{ width: '50%' }}>
        <PictureBlock
          backgroundColor={blueDark}
          justify="center"
          image={licor}
          imageSize="65%"
          hoverSize="70%"
          width="100%"
        >
          <Title>&#8202; Work &#8202;</Title>
        </PictureBlock>
      </Link>
      <HalfBlock backgroundColor={gray}>
        <Caret backgroundColor={blueDark} />
        <IntroWrapper padding="padding-top: 6.5rem;">
          <Intro>
            <IntroSub>Latest Work:</IntroSub>
            <Link to="/work/licor">
              <IntroHead>LI-COR: Tovi Data Analysis</IntroHead>
            </Link>
          </Intro>
        </IntroWrapper>
      </HalfBlock>
    </BlockGroup>
    <BlockGroup borderColor={red}>
      <Link to="/me" style={{ width: '50%' }}>
        <PictureBlock
          backgroundColor={redDark}
          justify="center"
          image={profile}
          imageSize="auto 100%"
          hoverSize="auto 105%"
          width="100%"
        >
          <Title>&#8202; Mong-Kuen &#8202;</Title>
        </PictureBlock>
      </Link>
      <HalfBlock backgroundColor={gray}>
        <Caret backgroundColor={redDark} />
        <IntroWrapper opacity="1">
          <IntroSub>Who Am I:</IntroSub>
          <IntroHead>
            Full-Stack Dev &middot; Frontend Obsessed &middot; Currently in
            Silicon Prairie
          </IntroHead>
        </IntroWrapper>
      </HalfBlock>
    </BlockGroup>
    <BlockGroup borderColor={green}>
      <Link to="/posts" style={{ width: '50%' }}>
        <PictureBlock
          backgroundColor={greenDark}
          justify="center"
          image={js}
          imageSize="auto 75%"
          hoverSize="auto 80%"
          width="100%"
        >
          <Title>&#8202; Blog &#8202;</Title>
        </PictureBlock>
      </Link>
      <HalfBlock backgroundColor={gray}>
        <Caret backgroundColor={greenDark} />
        <IntroWrapper padding="padding-bottom: 6.5rem;">
          <Intro>
            <IntroSub>Latest Post:</IntroSub>
            <Link to={pathContext.latestPost.node.frontmatter.slug}>
              <IntroHead>
                {pathContext.latestPost.node.frontmatter.title}
              </IntroHead>
            </Link>
          </Intro>
        </IntroWrapper>
      </HalfBlock>
    </BlockGroup>
  </PageTransition>
);

Index.propTypes = {
  pathContext: PropTypes.shape({}).isRequired,
};

export default Index;
