import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ContactMe from 'src/templates/shared/ContactMe';
import { Footer, Container } from 'src/templates/shared';
import {
  assurity,
  firespring,
  gordmans,
  kohler,
  licor,
  oxford,
  radial,
  slgreen,
  stbaldricks,
  tovi,
  yoganonymous,
} from 'src/logos';
import { grayMedium } from 'src/styles';

const Brands = styled.div`
  text-align: center;
`;

const BrandWrapper = styled.div`
  padding: 0 2rem 0 2rem;
`;

const ByLine = styled.h5`
  color: ${grayMedium};
  padding-top: 3rem;
  margin-bottom: 1rem;
`;

const BrandSmall = styled.img`
  filter: saturate(0) brightness(10);
  height: 1.5rem;
  margin: 0.5rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export default () => (
  <Footer>
    <Brands>
      <Container>
        <BrandWrapper>
          <ByLine>The amazing brands and products I{"'"}ve worked with:</ByLine>
          <Link to="/work/firespring#assurity">
            <BrandSmall src={assurity} />
          </Link>
          <Link to="/work/firespring#firespring">
            <BrandSmall src={firespring} />
          </Link>
          <Link to="/work/firespring#gordmans">
            <BrandSmall src={gordmans} />
          </Link>
          <Link to="/work/firespring#kohler">
            <BrandSmall src={kohler} />
          </Link>
          <Link to="/work/licor#licor">
            <BrandSmall src={licor} />
          </Link>
          <Link to="/work/firespring#oxford">
            <BrandSmall src={oxford} />
          </Link>
          <Link to="/work/starting#radial">
            <BrandSmall src={radial} />
          </Link>
          <Link to="/work/firespring#slgreen">
            <BrandSmall src={slgreen} />
          </Link>
          <Link to="/work/starting#stbaldricks">
            <BrandSmall src={stbaldricks} />
          </Link>
          <Link to="/work/licor#licor">
            <BrandSmall src={tovi} />
          </Link>
          <Link to="/work/firespring#yoganonymous">
            <BrandSmall src={yoganonymous} />
          </Link>
        </BrandWrapper>
      </Container>
    </Brands>
    <ContactMe />
  </Footer>
);
