import React from 'react';
import styled from 'styled-components';
import { media, blueLite } from 'src/styles';

const NotFound = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  background-color: ${blueLite};
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.tablet`
    height: 100vh;
  `};
`;

const Title = styled.h1`
  color: white;
`;

export default () => (
  <NotFound>
    <Title>~404~</Title>
    <Title>Not Found</Title>
  </NotFound>
);
