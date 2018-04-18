import React from 'react';
import FadeTransition from 'src/utils/FadeTransition';
import Link from 'gatsby-link';
import styled from 'styled-components';
import {
  media,
  transitionEase,
  gray,
  grayMedium,
  grayDark,
  nearWhite,
  nearBlack,
} from 'src/styles';
import { ContactMe } from 'src/pages/shared';
import frame from 'src/images/frame.png';
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

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 46rem;
`;

const Block = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 2rem 1rem 8rem 1rem;
  text-align: center;

  ${media.desktop`
    padding-top: 8rem;
    padding-bottom: 8rem;
  `};
`;

const Description = styled.h4`
  line-height: 1.25;
  margin-bottom: 0.5rem;
`;

const DescriptionWrapper = styled.div`
  margin: 1.25rem 0;
`;

const Brands = styled.div`
  background-color: ${grayDark};
  text-align: center;
`;

const BrandWrapper = styled.div`
  padding: 0 2rem 0 2rem;
`;

const ByLine = styled.h5`
  color: ${grayMedium};
  padding-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Brand = styled.img`
  filter: saturate(0) brightness(10);
  height: 2rem;
  margin: 0.5rem;
`;

const BrandSmall = Brand.extend`
  height: 1.5rem;
`;

const InvertBrand = Brand.extend`
  filter: saturate(0) brightness(0);
`;

const Button = styled.div`
  display: inline-block;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  font-size: 0.75rem;
  margin: 0.5rem 0 2rem 0;
  background-color: ${nearWhite};
  ${transitionEase};

  &:hover {
    color: ${nearWhite};
    background-color: ${nearBlack};
  }
`;

const InvertButton = Button.extend`
  background-color: ${nearBlack};
  color: ${nearWhite};

  &:hover {
    color: ${nearBlack};
    background-color: ${nearWhite};
  }
`;

const Frame = styled.img.attrs({
  src: frame,
})`
  width: 16rem;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  clip: rect(0px, 1000rem, 8rem, 0px);
`;

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
    </Block>
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
  </FadeTransition>
);
