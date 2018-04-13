import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import FaviconHelmet from 'src/layouts/components/FaviconHelmet';
import sun from 'src/images/sun.svg';
import { transitionEase, rotate360, nearBlack } from 'src/styles';
import { themeBrandColor } from 'src/siteMetadata';

require('prismjs/themes/prism-tomorrow.css');

const Main = styled.main`
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Header = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: ${nearBlack};
  font-size: 0.75rem;
  padding: 1rem;
  background-color: ${themeBrandColor};
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Sun = styled.img`
  width: 1rem;
  height: 1rem;
  ${transitionEase};

  &:hover {
    filter: invert(1) drop-shadow(0px 0px 1px #fff);
    animation: ${rotate360} 7s linear infinite;
  }
`;

const Heading = styled.div`
  ${transitionEase};

  &:hover {
    text-shadow: 0px 0px 0.1px ${nearBlack};
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
  <Main>
    <FaviconHelmet />
    <Header>
      <Link to="/">
        <Sun src={sun} />
      </Link>
      <HeadingWrapper>
        <HeadingLink to="work">Work</HeadingLink>
        <HeadingLink to="me">Mong-Kuen</HeadingLink>
        <HeadingLink to="posts">Blog</HeadingLink>
      </HeadingWrapper>
    </Header>
    {children()}
  </Main>
);

BaseLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default BaseLayout;
