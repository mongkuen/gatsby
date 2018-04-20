import React from 'react';
import styled from 'styled-components';
import FadeTransition from 'src/utils/FadeTransition';
import { media, lightGray, gray, nearWhite, licorBlue } from 'src/styles';
import { licor, tovi } from 'src/logos';
import fingerprint from 'src/images/work/licor/fingerprints.gif';
import qaqc from 'src/images/work/licor/qaqc.gif';
import scatter from 'src/images/work/licor/scatter.gif';
import { ContactMe } from 'src/pages/shared';
import { Footer, Container } from 'src/pages/shared/styles';
import { Frame, FrameItem, FrameWrapper } from '../styles';

const BlockBrand = styled.img`
  filter: saturate(0) brightness(10);
  margin: 0 auto;
  display: block;
  width: 10rem;
  margin-bottom: 2.5rem;
`;

const SmallBrand = styled.img`
  filter: saturate(0) brightness(0.2);
  margin: 0 auto 1rem auto;
  height: 2rem;
  display: block;
`;

const Block = styled.div`
  padding: 3rem 1rem 2rem 1rem;
  background-color: ${props => props.backgroundColor};

  ${media.tablet`
    padding: 6rem 3rem 2rem 3rem;
    padding: ${props => (props.hero ? '9rem 4rem 9rem 4rem' : '')};
  `};
`;

const BlockDescription = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h4 {
    color: ${lightGray};
    margin-bottom: 0.25rem;
    opacity: 0.6;
  }
`;

const BlockTitle = styled.h2`
  font-weight: 400;
  color: ${nearWhite};
  text-align: center;
  margin-bottom: 2.5rem;
`;

const BlockBlurb = styled.div`
  text-align: center;

  h4 {
    color: ${props => props.color || nearWhite};
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
`;

const BlurbTech = styled.h4`
  font-weight: 700;
`;

const BlockLead = styled.h2`
  text-align: center;
`;

const Caption = styled.h5`
  text-align: center;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
`;

export default () => (
  <FadeTransition>
    <Block backgroundColor={licorBlue} hero>
      <Container>
        <BlockBrand src={licor} />
        <BlockDescription>
          <h4>July 2016 – Present</h4>
          <h4>Software Developer &middot; Tovi Team Lead</h4>
        </BlockDescription>
        <BlockTitle>
          Creating next-gen tools for Eddy Covariance climate science
        </BlockTitle>
        <BlockBlurb>
          <h4>
            Since July 2016, I{"'"}ve been working to make Tovi a reality –
            LI-COR{"'"}s vision of a modern, accessible, yet powerful data
            analysis application for Eddy Covariance science.
          </h4>
        </BlockBlurb>
      </Container>
    </Block>
    <Block>
      <Container>
        <SmallBrand src={tovi} />
        <BlockLead>Software Development</BlockLead>
        <BlockBlurb color="initial">
          <h4>
            From developing the inital Tovi prototype, to leading the team to
            releas: I worked on every aspect from wireframes/design, technology
            selection, frontend JS coding, and scientific Python API
            development.
          </h4>
          <hr />
          <h4>A cross-platform desktop application, the stack consisted of:</h4>
          <BlurbTech>
            JS/Vue Stack &middot; Portable Python/Django &middot; Electron
            Wrapper &middot; SQLite/NetCDF
          </BlurbTech>
        </BlockBlurb>
      </Container>
    </Block>
    <Caption>Zero-Code Climate Fingerprinting</Caption>
    <FrameWrapper>
      <Frame />
      <FrameItem src={fingerprint} alt="Tovi" />
    </FrameWrapper>
    <div style={{ backgroundColor: gray }}>
      <Block>
        <Container>
          <BlockLead>Scientific Challenges</BlockLead>
          <BlockBlurb color="initial">
            <h4>
              Tovi saves scientists from programming pain – experienced from
              data management, to aggregation, processing, formatting, graphing,
              and exporting. Tovi replaces painful CSVs/Excel/custom scripting
              with beautiful visuals, and graphically performs operations that
              would{"'"}ve taken days or weeks.
            </h4>
            <hr />
            <h4>
              Multi-year/instrument datasets have hundreds of variables, so data
              mutation creates a scientific reproducibility nightmare. Immutable
              NetCDF data binaries log every processing step, letting scientists
              time-travel, revert, modify, or branch from any prior step.
            </h4>
          </BlockBlurb>
        </Container>
      </Block>
      <Caption>Visual & Intuitive Data QA</Caption>
      <FrameWrapper>
        <Frame />
        <FrameItem src={qaqc} alt="Tovi" />
      </FrameWrapper>
    </div>
    <Block>
      <Container>
        <BlockLead>Leading the Team</BlockLead>
        <BlockBlurb color="initial">
          <h4>
            After prototype market validation, 3 additional devs joined Tovi to
            develop additional features. I accelerated project speed by
            providing workflow knowledge, code familiarity, and code reviews.
          </h4>
          <hr />
          <h4>
            Since January 2018, I{"'"}ve led the team through 2 MVP versions,
            with the team introducing features from NOAA climate data fetching,
            geographical carbon footprint mapping, and automated data
            gap-filling.
          </h4>
          <h4>
            We proudly introduced Tovi at the European Geoscience Union April
            {" '"}18 to hundreds of climate scientists worldwide.
          </h4>
        </BlockBlurb>
      </Container>
    </Block>
    <Caption>Explore data and visualize relationships</Caption>
    <FrameWrapper>
      <Frame />
      <FrameItem src={scatter} alt="Tovi" />
    </FrameWrapper>
    <Footer>
      <ContactMe />
    </Footer>
  </FadeTransition>
);
