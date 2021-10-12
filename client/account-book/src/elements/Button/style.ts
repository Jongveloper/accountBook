import styled, { css } from 'styled-components';
import { flexBox } from '../../styles/Mixin';

export interface Prop {
  isFlex?: boolean;
  hoz?: string;
  ver?: string;
  form?: string;
  width?: string;
  height?: string;
  margin?: string;
  bgColor?: string;
  radius?: string;
  border?: string;
  fs?: string;
  fw?: string;
  color?: string;
  disColor?: string;
  shadow?: string;
  addstyle?: any;
  theme: {
    [propName: string]: any;
  };
}

const makeItFlexBox = css<Prop>`
  ${({ hoz, ver }) =>
    flexBox((hoz = 'center'), (ver = 'center'), 'inline-flex')}
`;

const ButtonStyle = styled.button<Prop>`
  ${({ isFlex }) => isFlex && makeItFlexBox};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  border-radius: ${({ radius }) => radius};
  background-color: ${({ bgColor, theme }) => theme.color[bgColor!]};
  color: ${({ color, theme }) => theme.color[color!]};
  cursor: pointer;
  border: ${({ border }) => border};
  font-size: ${({ fs, theme }) => fs && theme.fontSize[fs]};
  ${({ addstyle }) => addstyle};
`;

export default ButtonStyle;
