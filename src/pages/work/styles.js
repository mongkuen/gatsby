import styled from 'styled-components';
import {
  media,
  transitionEase,
  grayMedium,
  nearWhite,
  nearBlack,
} from 'src/styles';
import frame from 'src/images/frame.png';

const baseFrameSize = 8.5;
const tabletFrameSize = 14;

const baseFrameWidth = 16;
const tabletFrameWidth = 25;

const bezelWidth = 0.5;

export const Block = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 2.5rem 1rem ${baseFrameSize}rem 1rem;
  text-align: center;
  ${transitionEase};

  ${media.tablet`
    padding-top: ${tabletFrameSize - 4}rem;
    padding-bottom: ${tabletFrameSize}rem;
  `};
`;

export const Description = styled.h4`
  line-height: 1.25;
  margin-bottom: 0.5rem;
`;

export const DescriptionWrapper = styled.div`
  margin: 1.25rem 0;
`;

export const Brands = styled.div`
  text-align: center;
`;

export const BrandWrapper = styled.div`
  padding: 0 2rem 0 2rem;
`;

export const ByLine = styled.h5`
  color: ${grayMedium};
  padding-top: 3rem;
  margin-bottom: 1rem;
`;

export const Brand = styled.img`
  filter: saturate(0) brightness(10);
  height: 2rem;
  margin: 0.5rem;
`;

export const BrandSmall = Brand.extend`
  height: 1.5rem;
`;

export const InvertBrand = Brand.extend`
  filter: saturate(0) brightness(0);
`;

export const Button = styled.div`
  display: inline-block;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  font-size: 0.75rem;
  margin: 0.5rem 0 2rem 0;
  background-color: ${nearWhite};
  ${transitionEase};

  &:hover {
    color: ${nearWhite};
    background-color: ${nearBlack};
  }
`;

export const InvertButton = Button.extend`
  background-color: ${nearBlack};
  color: ${nearWhite};

  &:hover {
    color: ${nearBlack};
    background-color: ${nearWhite};
  }
`;

export const Frame = styled.img.attrs({
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

export const FrameItem = styled.img`
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

export const FrameWrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  height: ${baseFrameSize}rem;

  ${media.tablet`
    height: ${tabletFrameSize}rem;
  `};
`;
