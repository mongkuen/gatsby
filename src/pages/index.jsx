import React from 'react';
import styled from 'styled-components';

const HalfBlock = styled.div.attrs({
  className: 'flex justify-center items-center',
})`
  height: 12rem;
`;

const Index = () => (
  <div>
    <HalfBlock>
      <h2>WORK</h2>
    </HalfBlock>
    <HalfBlock>
      <h4>What I&apos;m working on</h4>
    </HalfBlock>
    <HalfBlock>
      <h2>About Me</h2>
    </HalfBlock>
    <HalfBlock>
      <h4>All about Mong</h4>
    </HalfBlock>
    <HalfBlock>
      <h2>Blog</h2>
    </HalfBlock>
    <HalfBlock>
      <h4>Latest Post: Stuff and Stuff</h4>
    </HalfBlock>
  </div>
);

export default Index;
