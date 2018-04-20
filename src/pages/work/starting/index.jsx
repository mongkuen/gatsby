import React from 'react';
import FadeTransition from 'src/utils/FadeTransition';
import { Anchor } from 'src/pages/shared/styles';

export default () => (
  <FadeTransition>
    <Anchor id="radial" />
    <div style={{ height: '100vh', backgroundColor: 'gray' }}>starting</div>
    <Anchor id="stbaldricks" />
    <div
      style={{ height: '100vh', backgroundColor: 'blue', position: 'relative' }}
    >
      St Baldricks
    </div>
  </FadeTransition>
);
