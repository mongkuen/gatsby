import React from 'react';
import FadeTransition from 'src/utils/FadeTransition';
import { gray, licorBlue } from 'src/styles';
import { licor, tovi } from 'src/logos';
import fingerprint from 'src/images/work/licor/fingerprints.gif';
import qaqc from 'src/images/work/licor/qaqc.gif';
import scatter from 'src/images/work/licor/scatter.gif';
import Hero from 'src/templates/shared/Block/Hero';
import WorkBlock from 'src/templates/shared/Block/WorkBlock';
import { Anchor, BlurbTech } from 'src/templates/shared';
import WorkFooter from 'src/templates/shared/WorkFooter';

export default () => (
  <FadeTransition>
    <Anchor id="licor" />
    <Hero
      color={licorBlue}
      brand={licor}
      jobDescription={
        <div>
          <h4>July 2016 – Present</h4>
          <h4>Software Developer &middot; Tovi Team Lead</h4>
        </div>
      }
      title="Creating next-gen tools for Eddy Covariance climate science"
      blurb={
        <h4>
          Since July 2016, I{"'"}ve been working to make Tovi a reality – LI-COR{
            "'"
          }s vision of a modern, accessible, yet powerful data analysis
          application for Eddy Covariance science.
        </h4>
      }
    />
    <WorkBlock
      smallBrand={tovi}
      blockLead="Tovi: Software Development"
      blockBlurb={
        <div>
          <h4>
            From developing the inital Tovi prototype, to leading the team to
            release: I worked on every aspect from wireframes/design, technology
            selection, frontend JS coding, and scientific Python API
            development.
          </h4>
          <hr />
          <h4>A cross-platform desktop application, the stack consisted of:</h4>
          <BlurbTech>
            JS/Vue Stack &middot; Portable Python/Django &middot; Electron
            Wrapper &middot; SQLite/NetCDF
          </BlurbTech>
        </div>
      }
      caption="Zero-Code Climate Fingerprinting"
      src={fingerprint}
      alt="Tovi fingerprint plots"
    />
    <WorkBlock
      color={gray}
      blockLead="Scientific Challenges"
      blockBlurb={
        <div>
          <h4>
            Tovi saves scientists from programming pain – experienced from data
            management, to aggregation, processing, formatting, graphing, and
            exporting. Tovi replaces painful CSVs/Excel/custom scripting with
            beautiful visuals, and graphically performs operations that would{
              "'"
            }ve taken days or weeks.
          </h4>
          <hr />
          <h4>
            Multi-year/instrument datasets have hundreds of variables, so data
            mutation creates a scientific reproducibility nightmare. Immutable
            NetCDF data binaries log every processing step, letting scientists
            time-travel, revert, modify, or branch from any prior step.
          </h4>
        </div>
      }
      caption="Visual & Intuitive Data QA"
      src={qaqc}
      alt="Tovi data QA/QC"
    />
    <WorkBlock
      blockLead="Leading the Team"
      blockBlurb={
        <div>
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
        </div>
      }
      caption="Explore data and visualize relationships"
      src={scatter}
      alt="Tovi scatter plotting"
    />
    <WorkFooter />
  </FadeTransition>
);
