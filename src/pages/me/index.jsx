import React from 'react';
import Link from 'gatsby-link';
import FadeTransition from 'src/utils/FadeTransition';
import LinkedIn from 'src/images/iconLinkedIn.png';
import Instagram from 'src/images/iconInstagram.png';
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
  Contact,
  Social,
} from './styles';

export default () => (
  <FadeTransition>
    <ProfileWrapper>
      <Half>
        <IntroWrapper background={gray} desktopHeight="100vh">
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
        <IntroWrapper desktopHeight="calc(100vh - 13rem)">
          <Description>
            My tech journey has taken me from startup{' '}
            <Highlight>
              <Link to="/">cofounder</Link>
            </Highlight>, to non-profit{' '}
            <Highlight>
              <Link to="/">developer</Link>
            </Highlight>, and creative agency{' '}
            <Highlight>
              <Link to="/">hacker</Link>
            </Highlight>.
          </Description>
          <Description>
            Today, I{"'"}m a{' '}
            <Highlight>
              <Link to="/">software engineer lead</Link>
            </Highlight>, helping our team make data analysis awesome for
            climate scientists.
          </Description>
        </IntroWrapper>
        <Contact>
          <h4>I{"'"}d &hearts; to hear from you.</h4>
          <p>
            <a href="mailto:mongkuen.sun@gmail.com">mongkuen.sun@gmail.com</a>
          </p>
          <Social>
            <a
              href="https://www.linkedin.com/in/mongkuensun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="Linked In" />
            </a>
            <a
              href="https://www.instagram.com/mongkuen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </Social>
        </Contact>
      </Half>
    </ProfileWrapper>
  </FadeTransition>
);
