import styled, { css } from 'styled-components';

import { flexBox, borderBox, textProps } from '../../styles/Mixin';

export interface Prop {
  isFlex?: boolean;
  hoz?: string;
  ver?: string;
  column?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  bgColor?: string;
  radius?: string;
  overflow?: string;
  padding?: string;
  border?: string;
  fs?: string;
  fw?: string;
  color?: string;
  lh?: string;
  textAlign?: string;
  position?: string;
  z?: string;
  cursor?: string;
  addstyle?: any;
  theme: {
    [propName: string]: any;
  };
}

const makeItFlexBox = css<Prop>`
  ${({ hoz, ver, column }) => css`
    ${flexBox((hoz = 'center'), (ver = 'center'))};
    ${column && 'flex-direction: column'};
  `}
`;

const GridStyle = styled.div<Prop>`
  ${({ isFlex }) => isFlex && makeItFlexBox}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  border-radius: ${({ radius }) => radius};
  overflow: ${({ overflow }) => overflow};
  cursor: ${({ cursor }) => cursor};
  ${({ padding }) => borderBox((padding = '0'))};
  ${({ fs, fw, color, lh, textAlign }) =>
    textProps(
      (fs = 'md'),
      (fw = 'regular'),
      (color = 'black'),
      (lh = '0'),
      (textAlign = 'center')
    )};
  ${({ addstyle }) => addstyle};
`;

export default GridStyle;
