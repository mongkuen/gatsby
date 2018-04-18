import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';

kirkhamTheme.googleFonts = [
  {
    name: 'Playfair Display',
    styles: ['400', '700'],
  },
  {
    name: 'Fira Sans',
    styles: ['400', '400i', '700', '700i'],
  },
];

kirkhamTheme.overrideThemeStyles = () => ({
  'h3,h4,h5': {
    fontWeight: 400,
  },
});

const typography = new Typography(kirkhamTheme);

export default typography;
