import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import frame from 'src/images/frame.png';
import { media, transitionEase } from 'src/styles';

const baseFrameSize = 8.5;
const tabletFrameSize = 14;

const baseFrameWidth = 16;
const tabletFrameWidth = 25;

const bezelWidth = 0.5;

const Frame = styled.img.attrs({
  src: frame,
})`
  width: ${baseFrameWidth}rem;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 2;
  clip: rect(0px, 1000rem, ${baseFrameSize}rem, 0px);
  ${transitionEase};

  ${media.tablet`
    width: ${tabletFrameWidth}rem;
    clip: rect(0px, 1000rem, ${tabletFrameSize}rem, 0px);
  `};
`;

const FrameItem = styled.img`
  margin-top: ${bezelWidth}rem;
  width: ${baseFrameWidth - bezelWidth}rem;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 1;
  clip: rect(0px, 1000rem, ${baseFrameSize - bezelWidth}rem, 0px);
  ${transitionEase};

  ${media.tablet`
    width: ${tabletFrameWidth - bezelWidth}rem;
    clip: rect(0px, 1000rem, ${tabletFrameSize - bezelWidth}rem, 0px);
  `};
`;

const FrameWrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  height: ${baseFrameSize}rem;

  ${media.tablet`
    height: ${tabletFrameSize}rem;
  `};
`;

const Framed = ({ backgroundColor, src, alt }) => (
  <FrameWrapper backgroundColor={backgroundColor}>
    <Frame />
    <FrameItem src={src} alt={alt} />
  </FrameWrapper>
);

Framed.propTypes = {
  backgroundColor: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Framed.defaultProps = {
  backgroundColor: '',
};

export default Framed;
