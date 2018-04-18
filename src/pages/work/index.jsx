import React from 'react';
import FadeTransition from 'src/utils/FadeTransition';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { transitionEase, gray, grayMedium, grayDark } from 'src/styles';
import { ContactMe } from 'src/pages/shared';
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
  padding: 2rem 2rem 0 2rem;
  max-width: 46rem;
`;

const Block = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h2`
  display: inline-block;
  text-decoration: underline;
  ${transitionEase};

  &:hover {
    text-shadow: 0px 0px 3px #999;
  }
`;

const Description = styled.h4`
  line-height: 1.25;
  margin-bottom: 0.5rem;
`;

const Brands = styled.div`
  background-color: ${grayDark};
  text-align: center;
`;

const ByLine = styled.h5`
  color: ${grayMedium};
  margin-bottom: 1.5rem;
`;

const Brand = styled.img`
  filter: saturate(0) brightness(10);
  max-height: 1.5rem;
  margin: 0.5rem;
`;

export default () => (
  <FadeTransition>
    <Block backgroundColor={gray}>
      <Link to="/work/licor">
        <Title>LI-COR</Title>
      </Link>
      <Description>
        Leading a small LI-COR team to create Tovi: an advanced data analysis
        application for climate scientists.
      </Description>
      <Description>
        Involved at every step, taking Tovi from inception, to prototyping,
        architecting, designing, frontend JS/backend Python developing, to
        finally releasing to scientists around the world.
      </Description>
    </Block>
    <Block>
      <Link to="/work/firespring">
        <Title>FIRESPRING</Title>
      </Link>
      <Description>
        Developed web experiences at Firespring{"'"}s Creative department,
        helping amazing companies make their marketing, branding, and sales a
        reality.
      </Description>
      <Description>
        Developed everything from Ruby apps, Rails CMSs, static marketing sites,
        to mobile tablet JS pitchdecks.
      </Description>
    </Block>
    <Block backgroundColor={gray}>
      <Link to="/work/starting">
        <Title>STARTING OUT</Title>
      </Link>
      <Description>
        Cofounded Radial Review, a startup simplifying employee review and
        feedback. Self-taught developer journey begins here!
      </Description>
      <Description>
        Joined fight against childhood cancer with developers of St. Baldrick{
          "'"
        }s Foundation at Firespring (after selling stake in Radial!). Developed
        on a PHP Zend API & Ruby Padrino frontend.
      </Description>
    </Block>
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
    <ContactMe />
  </FadeTransition>
);
