import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'tachyons';
import FaviconHelmet from 'src/layouts/components/FaviconHelmet';
import sun from 'src/images/sun.svg';

require('prismjs/themes/prism-tomorrow.css');

const Header = styled.div.attrs({
  className: 'dib w-100 tc pa3',
})``;

const HeadingWrapper = styled.div.attrs({
  className: 'flex justify-between items-center',
})``;

const Sun = styled.img.attrs({
  src: sun,
  className: 'w1 h1',
})``;

const Heading = styled.div.attrs({
  className: '',
})``;

const FlexColumn = styled.div.attrs({
  className: 'flex flex-column',
})``;

const BaseLayout = ({ children }) => (
  <div>
    <FaviconHelmet />
    <FlexColumn>
      <Header>
        <Sun />
        <HeadingWrapper>
          <Heading>Work</Heading>
          <Heading>About Me</Heading>
          <Heading>Blog</Heading>
        </HeadingWrapper>
      </Header>
      {children()}
    </FlexColumn>
  </div>
);

BaseLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default BaseLayout;
