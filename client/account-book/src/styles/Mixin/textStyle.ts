import { css } from 'styled-components';
import theme from '../theme';

export const textProps = (
  fontSize: string,
  fontWeight: string,
  color: string,
  lineHeight: string,
  textAlign: string
) => {
  return css`
    font-size: ${theme.fontSize[(fontSize = 'md')]};
    font-weight: ${theme.fontWeight[(fontWeight = 'regular')]};
    color: ${theme.color[(color = 'black')]};
    ${lineHeight && `line-height: ${lineHeight}`};
    ${textAlign && `text-align: ${textAlign}`};
  `;
};
