import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import 'tachyons';
import FaviconHelmet from 'src/layouts/components/FaviconHelmet';
import sun from 'src/images/sun.svg';
import { themeBrandColor, black } from 'src/siteMetadata';

require('prismjs/themes/prism-tomorrow.css');
require('./styles.css');

const Header = styled.div.attrs({
  className: 'dib w-100 tc pa3 near-black f7',
})`
  background-color: ${themeBrandColor};
`;

const HeadingWrapper = styled.div.attrs({
  className: 'flex justify-around items-center',
})``;

const Sun = styled.img.attrs({
  src: sun,
  className: 'w1 h1 transition-ease',
})`
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  &:hover {
    filter: invert(1) drop-shadow(0px 0px 1px #fff);
    animation: spin 7s linear infinite;
  }
`;

const Heading = styled.div.attrs({
  className: 'transition-ease',
})`
  &:hover {
    text-shadow: 0px 0px 0.1px ${black};
  }
`;

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

const BaseLayout = ({ children }) => (
  <div>
    <FaviconHelmet />
    <Header>
      <Link to="/">
        <Sun />
      </Link>
      <HeadingWrapper>
        <HeadingLink>Work</HeadingLink>
        <HeadingLink>Mong-Kuen</HeadingLink>
        <HeadingLink to="posts">Blog</HeadingLink>
      </HeadingWrapper>
    </Header>
    {children()}
  </div>
);

BaseLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default BaseLayout;
