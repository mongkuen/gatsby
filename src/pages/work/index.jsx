import React from 'react';
import FadeTransition from 'src/utils/FadeTransition';
import Link from 'gatsby-link';
import { gray } from 'src/styles';
import { ContactMe } from 'src/pages/shared';
import { Footer } from 'src/pages/shared/styles';
import toviGif from 'src/images/work/tovi.gif';
import assurityGif from 'src/images/work/assurity.gif';
import radialGif from 'src/images/work/radial.gif';
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
} from 'src/logos';
import {
  Container,
  Block,
  Description,
  DescriptionWrapper,
  Brands,
  BrandWrapper,
  ByLine,
  Brand,
  BrandSmall,
  InvertBrand,
  Button,
  InvertButton,
  Frame,
  FrameItem,
} from './styles';

export default () => (
  <FadeTransition>
    <Block backgroundColor={gray}>
      <Container>
        <Link to="/work/licor">
          <Brand src={licor} />
        </Link>
        <DescriptionWrapper>
          <Description>
            Leading a small LI-COR team to create Tovi: an advanced data
            analysis application for climate scientists.
          </Description>
          <hr />
          <Description>
            Involved at every step, taking Tovi from inception, to prototyping,
            architecting, designing, frontend JS/backend Python developing, to
            finally releasing to scientists around the world.
          </Description>
        </DescriptionWrapper>
        <Link to="/work/licor">
          <Button>See LI-COR</Button>
        </Link>
      </Container>
      <Frame />
      <FrameItem src={toviGif} alt="Tovi" />
    </Block>
    <Block>
      <Container>
        <Link to="/work/firespring">
          <InvertBrand src={firespring} />
        </Link>
        <DescriptionWrapper>
          <Description>
            Developed web experiences at Firespring{"'"}s Creative department,
            helping amazing companies make their marketing, branding, and sales
            a reality.
          </Description>
          <hr />
          <Description>
            Developed everything from Ruby apps, Rails CMSs, static marketing
            sites, to mobile tablet JS pitchdecks.
          </Description>
        </DescriptionWrapper>
        <Link to="/work/firespring">
          <InvertButton>See Firespring</InvertButton>
        </Link>
      </Container>
      <Frame />
      <FrameItem src={assurityGif} alt="Tovi" />
    </Block>
    <Block backgroundColor={gray}>
      <Container>
        <Link to="/work/starting">
          <Brand src={radial} />
        </Link>
        <DescriptionWrapper>
          <Description>
            Cofounded Radial Review, a startup simplifying employee review and
            feedback. Self-taught developer journey begins here!
          </Description>
          <hr />
          <Description>
            Joined fight against childhood cancer with developers of St.
            Baldrick{"'"}s Foundation at Firespring (after selling stake in
            Radial!). Developed on a PHP Zend API & Ruby Padrino frontend.
          </Description>
        </DescriptionWrapper>
        <Link to="/work/starting">
          <Button>See how I started</Button>
        </Link>
      </Container>
      <Frame />
      <FrameItem src={radialGif} alt="Tovi" />
    </Block>
    <Footer>
      <Brands>
        <Container>
          <BrandWrapper>
            <ByLine>The amazing brands and products I worked on:</ByLine>
            <BrandSmall src={assurity} />
            <BrandSmall src={firespring} />
            <BrandSmall src={kohler} />
            <BrandSmall src={licor} />
            <BrandSmall src={oxford} />
            <BrandSmall src={radial} />
            <BrandSmall src={slgreen} />
            <BrandSmall src={stbaldricks} />
            <BrandSmall src={tovi} />
            <BrandSmall src={yoganonymous} />
          </BrandWrapper>
        </Container>
      </Brands>
      <ContactMe />
    </Footer>
  </FadeTransition>
);
