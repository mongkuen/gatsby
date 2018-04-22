import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import FaviconHelmet from 'src/layouts/components/FaviconHelmet';
import {
  Main,
  Sun,
  SunWrapper,
  Header,
  HeadingWrapper,
  Heading,
  Pusher,
} from 'src/layouts/styles';

require('prismjs/themes/prism-tomorrow.css');
require('src/base.css');

const HeadingLink = ({ children, to }) => (
  <Link to={to}>
    <Heading>{children}</Heading>
  </Link>
);

HeadingLink.defaultProps = { to: '/' };
HeadingLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
};

const BaseLayout = ({ children, location }) => (
  <Main>
    <FaviconHelmet />
    <Pusher />
    <Header wide={location.pathname !== '/' && location.pathname !== '/me'}>
      <Link to="/">
        <SunWrapper>
          <Sun />
        </SunWrapper>
      </Link>
      <HeadingWrapper>
        <HeadingLink to="/work">Work</HeadingLink>
        <HeadingLink to="/me">Mong-Kuen</HeadingLink>
        <HeadingLink to="/posts">Blog</HeadingLink>
      </HeadingWrapper>
    </Header>
    {children()}
  </Main>
);

BaseLayout.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default BaseLayout;
