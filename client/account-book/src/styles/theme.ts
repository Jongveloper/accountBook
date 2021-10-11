const color = {
  black: '#2C2C2C',
  olive: '#B6C8A5',
  gray: '#C1C1C1',
  red: '#FF0000',
  white: '#FFFFFF',
  lightOlive: '#D3EBBC',
  bgColor: '#F8F8F8',
};

const deviceSize = {
  mobile: '(max-width: 395px)',
};

const calRem = (size: number): string => `${size / 16}rem`;

const fontSize = {
  xs: calRem(12),
  sm: calRem(14),
  md: calRem(16),
  xl: calRem(26),
};

const fontWeight = {
  bold: 700,
  regular: 400,
  light: 300,
  extraBold: 800,
};

const theme = {
  color,
  deviceSize,
  fontSize,
  fontWeight,
};
export default theme;
