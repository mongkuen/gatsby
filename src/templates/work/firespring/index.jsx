import React from 'react';
import FadeTransition from 'src/utils/FadeTransition';
import { Anchor, SmallBrand, BlurbTech } from 'src/templates/shared';
import WorkFooter from 'src/templates/shared/WorkFooter';
import { gray, fsOrange } from 'src/styles';
import {
  assurity,
  firespring,
  gordmans,
  kohler,
  slgreen,
  oxford,
  yoganonymous,
} from 'src/logos';
import gordmansGif from 'src/images/work/firespring/gordmans.gif';
import assurityGif from 'src/images/work/firespring/assurity.gif';
import kohlerGif from 'src/images/work/firespring/kohler.gif';
import slgreenPng from 'src/images/work/firespring/slgreen.png';
import yoganonymousGif from 'src/images/work/firespring/yoganonymous.gif';
import Hero from 'src/templates/shared/Block/Hero';
import WorkBlock from 'src/templates/shared/Block/WorkBlock';

export default () => (
  <FadeTransition>
    <Anchor id="firespring" />
    <Hero
      color={fsOrange}
      brand={firespring}
      jobDescription={
        <div>
          <h4>July 2015 – July 2016</h4>
          <h4>Software Engineer &middot; Creative</h4>
        </div>
      }
      title="Building awesome creative technology at a fast-paced agency"
      blurb={
        <h4>
          I worked with Firespring Creative{"'"}s diverse portfolio from
          real-estate, to insurance, retail, and digital marketing. Developer
          flexibility and clear communication was key to perfecting project
          requirements on a deadline.
        </h4>
      }
    />
    <Anchor id="gordmans" />
    <WorkBlock
      blockLead="Mapping America's Consumers"
      smallBrand={gordmans}
      blockBlurb={
        <div>
          <h4>
            Using Ruby to help Gordmans scale a high-conversion print ad. Each
            flyer is customized to direct receiver to the nearest store. With
            hundreds of thousands of consumers, scaling complications range from
            API rate-limits, to address sanitation, error handling, and
            optimizing concurrent request speeds.
          </h4>
          <hr />
          <h4>
            An automated Ruby script, it uses a mixture of mapping APIs for
            reverse address lookup, store locating, route line generation, and
            styling:
          </h4>
          <BlurbTech>Ruby &middot; Mapbox/Google Maps</BlurbTech>
        </div>
      }
      caption="High-conversion map flyers"
      src={gordmansGif}
      alt="Gordmans Map"
    />
    <Anchor id="assurity" />
    <WorkBlock
      color={gray}
      smallBrand={assurity}
      blockLead="Marketing Insurance"
      blockBlurb={
        <div>
          <h4>
            <span style={{ fontWeight: 700 }}>Assurity For You:</span> Helping
            explain and market insurance to younger millenials. Built responsive
            for mobile with bold and modern design elements.
          </h4>
          <hr />
          <h4>
            <span style={{ fontWeight: 700 }}>Assurity Annual Report:</span> A
            beautiful web alternative to typical annual reports, that helps
            Assurity communicate effectively to their 2015 stakeholders.
          </h4>
          <BlurbTech>Ruby/Middleman &middot; HAML/SCSS/JS</BlurbTech>
        </div>
      }
      caption="Assurity For You & Assurity Annual Report"
      src={assurityGif}
      alt="Assurity websites"
    />
    <Anchor id="kohler" />
    <WorkBlock
      smallBrand={kohler}
      blockLead="Quickbooks and Content"
      blockBlurb={
        <div>
          <h4>
            A simple Ruby on Rails app that powers a CMS and website – helping a
            small Nebraskan business list products and send client
            notifications.
          </h4>
          <hr />
          <h4>
            Kohler requested Quickbooks integration, requiring on-site push
            server setup. Quickbooks sync pushes inventory/sales information
            securely to update the Rails website automatically.
          </h4>
          <BlurbTech>Ruby/Rails &middot; Quickbooks</BlurbTech>
        </div>
      }
      caption="Kohler auction and product website"
      src={kohlerGif}
      alt="Kohler website"
    />
    <Anchor id="slgreen" />
    <Anchor id="oxford" />
    <WorkBlock
      color={gray}
      blockLead="Real Estate from NYC to Ontario"
      blockBlurb={
        <div>
          <SmallBrand src={slgreen} />
          <h4>
            Developed for NYC{"'"}s largest commercial real-estate owner, SL
            Green. Rails CMS backend, with property showcase, corporate
            highlights, and tenant login/management.
          </h4>
          <BlurbTech>Ruby/Rails &middot; HAML/SCSS/JS</BlurbTech>
          <hr />
          <SmallBrand src={oxford} />
          <h4>
            Helping Oxford Properties develop a beautiful mobile app pitchdeck.
            Ruby/Rails CMS hosts property information that is downloaded to an
            offline-capable Angular app wrapped by Cordova webview for
            iOS/Android/Windows.
          </h4>
          <BlurbTech>Cordova &middot; JS/Angular &middot; Ruby/Rails</BlurbTech>
        </div>
      }
      caption="SLGreen Homepage"
      src={slgreenPng}
      alt="SL Green website"
    />
    <Anchor id="yoganonymous" />
    <WorkBlock
      smallBrand={yoganonymous}
      blockLead="Spreading Love and Yoga"
      blockBlurb={
        <div>
          <h4>
            Yoganonymous was a lifestyle and content brand, reaching thousands
            of yoga practitioners. Site featured a platform for hundreds of yoga
            teachers/studios/events to connect with practitioners.
          </h4>
          <hr />
          <h4>
            Our Rails app made it easy for editors to process hundreds of blog
            submissions, drafts, edits, and publishes. The growth of the
            Yoganonymous and the community led to its successful acquisition by
            Wanderlust Media.
          </h4>
          <BlurbTech>
            Ruby/Rails &middot; JS/CoffeeScript &middot; HAML/SCSS
          </BlurbTech>
        </div>
      }
      caption="Yoganonymous website"
      src={yoganonymousGif}
      alt="Yoganonymous website"
    />
    <WorkFooter />
  </FadeTransition>
);
