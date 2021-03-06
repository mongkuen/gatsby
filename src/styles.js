import { keyframes, css } from 'styled-components';

// COLORS
export const red = '#c1666b';
export const redLite = 'rgba(193, 102, 107, 0.7)';
export const redDark = '#b0161f';
export const orange = '#ff9505';
export const yellow = '#d4b483';
export const green = '#48a9a6';
export const greenLite = 'rgba(72, 169, 166, 0.7)';
export const greenDark = '#06b0ab';
export const blue = '#4281a4';
export const blueLite = 'rgba(66, 129, 164, 0.7)';
export const blueDark = '#014266';
export const purple = '#938ae2';
export const tan = '#e4dfda';
export const nearWhite = '#fefefe';
export const lightGray = '#eee';
export const gray = '#d5d5d5';
export const grayMedium = '#999';
export const grayDark = '#222';
export const nearBlack = '#111';

export const radialBlue = '#7baed5';
export const licorBlue = '#0074c8';
export const fsOrange = '#f55930';
export const stbaldricksGreen = '#63883d';

// BREAKPOINTS
const sizes = {
  extra: 1824,
  large: 1224,
  desktop: 992,
  tablet: 768,
  phoneLandscape: 576,
  phone: 376,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

// CSS
export const transitionEase = css`
  transition: all 0.5s;
`;

export const rotate360 = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
