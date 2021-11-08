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
  mobileXs: '281px',
  mobileS: '320px',
  mobileM: '376px',
  mobileMM: '450px',
  mobileL: '568px',
  tablet: '768px',
  desktop: '1024px',
};

const device = {
  mobileXs: `only screen and (max-width: ${deviceSize.mobileXs})`,
  mobileS: `only screen and (max-width: ${deviceSize.mobileS}) and (min-width: ${deviceSize.mobileXs})`,
  mobileM: `only screen and (max-width: ${deviceSize.mobileM}) and (min-width: ${deviceSize.mobileS})`,
  mobileMM: `only screen and (max-width: ${deviceSize.mobileMM}) and (min-width: ${deviceSize.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSize.mobileL}) and (min-width: ${deviceSize.mobileMM})`,
  tablet: `only screen and (max-width: ${deviceSize.tablet}) and (min-width: ${deviceSize.mobileL})`,
  desktop: `only screen and (min-width: ${deviceSize.desktop})`,
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
  device,
};
export default theme;
