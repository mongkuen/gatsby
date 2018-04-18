import React from 'react';
import FadeTransition from 'src/utils/FadeTransition';
import { Anchor } from 'src/pages/shared/styles';

export default () => (
  <FadeTransition>
    <div style={{ height: '100vh', backgroundColor: 'gray' }}>starting</div>
    <div
      style={{ height: '100vh', backgroundColor: 'blue', position: 'relative' }}
    >
      <Anchor id="stbaldricks" />
      St Baldricks
    </div>
  </FadeTransition>
);
