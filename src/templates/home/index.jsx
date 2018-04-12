import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  blue,
  green,
  tan,
  yellow,
  red,
  white,
  orange,
  black,
  largeScreen,
} from 'src/siteMetadata';

const HalfBlock = styled.div.attrs({
  className: 'flex justify-center items-center',
})`
  height: calc(50vh - 2.5rem);
  background-color: ${props => props.backgroundColor || white};
  border-left: 12px solid ${props => props.borderColor || black};
  padding-right: 12px;

  @media (min-width: ${largeScreen}) {
    border-left: none;
    padding-right: 0;
  }
`;

const Title = styled.h1.attrs({
  className: 'underline',
})`
  color: ${props => props.color || black};
`;

const IntroSub = styled.h3.attrs({
  className: 'near-white',
})``;

const IntroHead = styled.h2.attrs({
  className: 'near-black ma0',
})``;

const TitleWrapper = styled.div.attrs({
  className: 'flex flex-column tc ma3',
})``;

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
    <HalfBlock backgroundColor={tan} borderColor={red}>
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
