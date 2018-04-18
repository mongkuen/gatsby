import React from 'react';
import FadeTransition from 'src/utils/FadeTransition';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { grayMedium, grayDark } from 'src/styles';
import {
  assurity,
  firespring,
  kohler,
  licor,
  oxford,
  radial,
  slgreen,
  stbaldricks,
  tovi,
  yoganonymous,
} from './logos';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 46rem;
`;

const Brands = styled.div`
  color: ${grayMedium};
  background-color: ${grayDark};
  text-align: center;
  padding: 2rem;
`;

const ByLine = styled.div`
  margin-bottom: 1.5rem;
`;

const Brand = styled.img`
  filter: saturate(0) brightness(10);
  max-height: 1.5rem;
  margin: 0.5rem;
`;

export default () => (
  <FadeTransition>
    <Link to="/work/licor">Licor</Link>
    <Link to="/work/firespring">Firespring</Link>
    <Link to="/work/radial">Radial</Link>
    <Brands>
      <Container>
        <ByLine>The amazing brands and products I worked on:</ByLine>
        <Brand src={assurity} />
        <Brand src={firespring} />
        <Brand src={kohler} />
        <Brand src={licor} />
        <Brand src={oxford} />
        <Brand src={radial} />
        <Brand src={slgreen} />
        <Brand src={stbaldricks} />
        <Brand src={tovi} />
        <Brand src={yoganonymous} />
      </Container>
    </Brands>
  </FadeTransition>
);
