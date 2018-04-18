import React from 'react';
import FadeTransition from 'src/utils/FadeTransition';

export default () => (
  <FadeTransition>
    <div id="creative" style={{ height: '100vh', backgroundColor: 'gray' }}>
      Firespring Creative
    </div>
  </FadeTransition>
);
