import React from 'react';
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
} from 'src/siteMetadata';

const HalfBlock = styled.div.attrs({
  className: 'flex justify-center items-center',
})`
  height: calc(50vh - 2.5rem);
  background-color: ${props => props.backgroundColor || white};
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
  className: 'flex flex-column tc ma1',
})``;

const Index = () => (
  <div>
    <HalfBlock backgroundColor={blue}>
      <Title>&#8202; Work &#8202;</Title>
    </HalfBlock>
    <HalfBlock backgroundColor={green}>
      <TitleWrapper>
        <IntroSub>Latest Work:</IntroSub>
        <IntroHead>Tovi (Alexandria Project)</IntroHead>
      </TitleWrapper>
    </HalfBlock>
    <HalfBlock backgroundColor={tan}>
      <Title>&#8202; Mong-Kuen &#8202;</Title>
    </HalfBlock>
    <HalfBlock backgroundColor={yellow}>
      <TitleWrapper>
        <IntroSub>About Me:</IntroSub>
        <IntroHead>
          Full-Stack Dev &middot; Part-Time Dog &middot; Code
        </IntroHead>
      </TitleWrapper>
    </HalfBlock>
    <HalfBlock backgroundColor={red}>
      <Title>&#8202; Blog &#8202;</Title>
    </HalfBlock>
    <HalfBlock backgroundColor={orange}>
      <TitleWrapper>
        <IntroSub>Latest Post:</IntroSub>
        <IntroHead>Some Blog Post Title</IntroHead>
      </TitleWrapper>
    </HalfBlock>
  </div>
);

export default Index;
