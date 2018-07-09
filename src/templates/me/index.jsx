import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';
import ContactMe from 'src/templates/shared/ContactMe';
import { Footer } from 'src/templates/shared';
import { siteName } from 'src/siteMetadata';
import { gray } from 'src/styles';
import {
  ProfilePicture,
  IntroWrapper,
  ProfileWrapper,
  Greeting,
  Intro,
  Caret,
  Half,
  Description,
  Highlight,
} from 'src/templates/me/styles';

export default () => (
  <PageTransition>
    <Helmet>
      <title>About Me | {siteName}</title>
    </Helmet>
    <ProfileWrapper>
      <Half>
        <IntroWrapper background={gray} tabletHeight="100vh">
          <ProfilePicture />
          <Greeting>Hi, I{"'"}m Mong.</Greeting>
          <Intro>
            I{"'"}m a full-stack developer obsessed with frontend tech in the
            Silicon Prairie of Lincoln, Nebraska.
          </Intro>
          <Caret />
        </IntroWrapper>
      </Half>
      <Half>
        <IntroWrapper tabletHeight="calc(100vh - 13rem)">
          <Description>
            My tech journey has taken me from startup{' '}
            <Highlight>
              <Link to="/work/starting">cofounder</Link>
            </Highlight>, to non-profit{' '}
            <Highlight>
              <Link to="/work/starting#stbaldricks">developer</Link>
            </Highlight>, and creative agency{' '}
            <Highlight>
              <Link to="/work/firespring">hacker</Link>
            </Highlight>.
          </Description>
          <Description>
            Today, I{"'"}m a{' '}
            <Highlight>
              <Link to="/work/licor">software engineer lead</Link>
            </Highlight>, helping our team make data analysis awesome for
            climate scientists.
          </Description>
        </IntroWrapper>
        <Footer>
          <ContactMe />
        </Footer>
      </Half>
    </ProfileWrapper>
  </PageTransition>
);
