import React from 'react';
import FadeTransition from 'src/utils/FadeTransition';
import Link from 'gatsby-link';

export default () => (
  <FadeTransition>
    <div>Work Index</div>
    <Link to="/work/licor">Licor</Link>
    <Link to="/work/firespring">Firespring</Link>
    <Link to="/work/radial">Radial</Link>
  </FadeTransition>
);
