import React from 'react';
import FadeTransition from 'src/utils/FadeTransition';
import Link from 'gatsby-link';
import { gray } from 'src/styles';
import { WorkFooter } from 'src/pages/work/shared';
import { Container } from 'src/pages/shared';
import Framed from 'src/pages/shared/Framed';
import { firespring, licor, radial } from 'src/logos';
import qaqc from 'src/images/work/licor/qaqc.gif';
import assurityGif from 'src/images/work/firespring/assurity.gif';
import radialGif from 'src/images/work/starting/radial.gif';
import {
  Block,
  Description,
  DescriptionWrapper,
  Brand,
  InvertBrand,
  Button,
  InvertButton,
} from 'src/pages/work/styles';

export default () => (
  <FadeTransition>
    <Block backgroundColor={gray}>
      <Container>
        <Brand src={licor} />
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
      <Framed backgroundColor={gray} src={qaqc} alt="Tovi" />
    </Block>
    <Block>
      <Container>
        <InvertBrand src={firespring} />
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
      <Framed src={assurityGif} alt="Assurity" />
    </Block>
    <Block backgroundColor={gray}>
      <Container>
        <Brand src={radial} />
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
      <Framed backgroundColor={gray} src={radialGif} alt="Radial" />
    </Block>
    <WorkFooter />
  </FadeTransition>
);
