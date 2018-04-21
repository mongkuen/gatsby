import React from 'react';
import FadeTransition from 'src/utils/FadeTransition';
import { radialBlue, stbaldricksGreen } from 'src/styles';
import { radial, firespring, stbaldricks } from 'src/logos';
import radialGif from 'src/images/work/starting/radial.gif';
import stbaldricksPng from 'src/images/work/starting/stbaldricks.png';
import { Hero, WorkBlock, BlurbTech, WorkFooter } from 'src/pages/work/shared';
import { Anchor } from 'src/pages/shared/styles';

export default () => (
  <FadeTransition>
    <Anchor id="radial" />
    <Hero
      color={radialBlue}
      brand={radial}
      jobDescription={
        <div>
          <h4>November 2013 – November 2014</h4>
          <h4>Co-Founder</h4>
        </div>
      }
      title="Startup promising better feedback and performance reviews"
      blurb={
        <h4>
          Sick of awful performance reviews, Radial Review was founded after
          pitching and receiving angel investment. Radial continues today
          successfully rebranded as Traction Tools after my exit in 2014.
        </h4>
      }
    />
    <WorkBlock
      blockLead="Entry Into Technology"
      blockBlurb={
        <div>
          <h4>
            Graduating UNL with Biochemical Forensic Science in 2013, I entered
            technology after cofounding Radial. My roles ranged from
            incorporation/legal, to product management, accounting/taxes,
            wireframing, grant writing, and customer development.
          </h4>
          <hr />
          <h4>
            Here I first started to learn the basics of web development,
            beginning my journey as a developer.
          </h4>
          <BlurbTech>
            HTML &middot; CSS/Bootstrap &middot; JS/jQuery &middot; Ruby/Rails
          </BlurbTech>
        </div>
      }
      caption="Radial's initial website"
      src={radialGif}
      alt="Radial website"
    />
    <Anchor id="stbaldricks" />
    <Hero
      color={stbaldricksGreen}
      brand={firespring}
      jobDescription={
        <div>
          <h4>May 2015 – August 2015</h4>
          <h4>Web Application Engineer &middot; St. Baldricks Foundation</h4>
        </div>
      }
      title="Building technology in the fight against childhood cancer"
      blurb={
        <h4>
          As a self-taught developer, St. Baldricks was a perfect start to make
          a visible impact with technology. After 3 successful months at SBF, I
          accepted the offer to join Firespring Creative.
        </h4>
      }
    />
    <WorkBlock
      blockLead="Start of Tech journey"
      smallBrand={stbaldricks}
      blockBlurb={
        <div>
          <h4>
            SBF presents a well-established team, with refined processed, and a
            complex codebase. Millions of dollars of donations are processed
            each year, from thousands of people and transactions.
          </h4>
          <hr />
          <h4>
            I helped the team during their transition from a legacy PHP app to a
            newer PHP API and Ruby frontend architecture. This meant traversing
            multiple languages and frameworks to port/maintain old features,
            while building new ones.
          </h4>
          <BlurbTech>
            PHP/Zend &middot; Ruby/Padrino &middot; SBF custom API/API libs
            &middot; Git/Gitflow &middot; Testing/QA
          </BlurbTech>
        </div>
      }
      caption="St Baldrick's website"
      src={stbaldricksPng}
      alt="St. Baldrick's website"
    />
    <WorkFooter />
  </FadeTransition>
);
