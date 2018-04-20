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
            After graduating with a degree in Biochemical Forensic Science, I
            cofounded Radial, entering the tech scene. I wore many hats, from
            incorporation, to accounting/taxes, grant-writing, and customer
            development.
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
      caption="Radial Website (my first site!)"
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
      title="Building technology to join the fight against childhood cancer"
      blurb={
        <h4>
          As a self-taught developer, St. Baldricks was the perfect project to
          make a visible impact on the world with technology. After 3 successful
          months of internship, I was later onboarded as a full-stack developer
          at Firespring Creative.
        </h4>
      }
    />
    <WorkBlock
      blockLead="Start of Tech journey"
      smallBrand={stbaldricks}
      blockBlurb={
        <div>
          <h4>
            Working full-time with the well-established SBF team was a great
            introduction to a complex codebase. With SBF processing millions of
            dollars of donations each year, the project demands attention to
            detail, and teamwork to review and extend the codebase.
          </h4>
          <hr />
          <h4>
            As a legacy app transitioning to a newer architecture, the
            application spans multiple languages/frameworks, with feature
            upgrades demanded necessary to compete in the evolving non-profit
            landscape.
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
