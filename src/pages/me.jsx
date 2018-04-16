import React from 'react';
import styled from 'styled-components';
import FadeTransition from 'src/utils/FadeTransition';
import colorProfile from 'src/images/colorProfile.jpg';
import LinkedIn from 'src/images/iconLinkedIn.png';
import Instagram from 'src/images/iconInstagram.png';
import { gray, nearWhite, nearBlack } from 'src/styles';

const ProfilePicture = styled.img.attrs({
  src: colorProfile,
})`
  border-radius: 50%;
  height: 8rem;
  width: 8rem;
  border: 0.25rem solid #fff;
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color ${gray};
  min-height: calc(100vh - 4rem);
  padding: 2rem 1rem;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Greeting = styled.h2`
  letter-spacing: 0.05rem;
  color: ${nearWhite};
  margin-bottom: 1rem;
  text-align: center;
`;

const Intro = styled.h3`
  letter-spacing: 0.04rem;
  color: ${nearBlack};
  margin-bottom: 0rem;
  line-height: 1.35;
  text-align: center;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 4rem);
  padding: 2rem 1rem;
`;

const Description = Intro.extend`
  text-align: left;
  color: ${nearBlack};
`;

const Highlight = styled.span`
  color: #999;
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const Contact = styled.div`
  background-color: #222;
  width: 100%;
  text-align: center;
  padding: 3.5rem 0;
  color: #999;

  h4 {
    color: #999;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;

  img {
    filter: invert(0.9);
    width: 1rem;
    height: 1rem;
    margin: 0 0.25rem;
    opacity: 0.65;
  }
`;

export default () => (
  <FadeTransition>
    <ProfileWrapper>
      <IntroWrapper>
        <ProfilePicture />
        <Greeting>Hi, I{"'"}m Mong.</Greeting>
        <Intro>
          I{"'"}m a full-stack developer obsessed with frontend tech in the
          Silicon Prairie of Lincoln, Nebraska.
        </Intro>
      </IntroWrapper>
      <DescriptionWrapper>
        <Description>
          My tech journey has taken me from startup{' '}
          <Highlight>cofounder</Highlight>, to non-profit{' '}
          <Highlight>developer</Highlight>, creative agency{' '}
          <Highlight>hacker</Highlight>, and now a software{' '}
          <Highlight>engineer leading</Highlight> a team making data-analysis{' '}
          <Underline>awesome</Underline> for climate scientists.
        </Description>
      </DescriptionWrapper>
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
    </ProfileWrapper>
  </FadeTransition>
);
