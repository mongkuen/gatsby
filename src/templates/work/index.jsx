import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';
import Framed from 'src/templates/shared/Framed';
import WorkFooter from 'src/templates/shared/WorkFooter';
import { Container } from 'src/templates/shared';
import { siteName } from 'src/siteMetadata';
import { firespring, licor, radial } from 'src/logos';
import { qaqc, assurityGif, radialGif } from 'src/templates/work/images';
import { gray } from 'src/styles';
import {
  Block,
  Description,
  DescriptionWrapper,
  Brand,
  InvertBrand,
  Button,
  InvertButton,
} from 'src/templates/work/styles';

export default () => (
  <PageTransition>
    <Helmet>
      <title>Work | {siteName}</title>
    </Helmet>
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
  </PageTransition>
);
