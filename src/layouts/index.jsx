import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'tachyons';

const Title = styled.h1.attrs({
  className: 'red',
})``;

const BaseLayout = ({ children }) => (
  <div>
    <Title>Layout Title</Title>
    {children()}
  </div>
);

BaseLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default BaseLayout;
