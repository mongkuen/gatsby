import React from 'react';
import styled from 'styled-components';
import FadeTransition from 'src/utils/FadeTransition';
import { media } from 'src/styles';

const Anchor = styled.span`
  position: absolute;
  margin-top: -4rem;

  ${media.desktop`
    margin-top: initial;
  `};
`;

export default () => (
  <FadeTransition>
    <div id="creative" style={{ height: '100vh', backgroundColor: 'gray' }}>
      Creative
    </div>
    <div
      style={{
        height: '100vh',
        backgroundColor: 'green',
        position: 'relative',
      }}
    >
      <Anchor id="nonprofit" />
      <h1>Non Profit</h1>
    </div>
  </FadeTransition>
);
