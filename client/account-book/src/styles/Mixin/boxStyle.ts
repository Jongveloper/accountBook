import { css } from 'styled-components';

const flexBox = (hoz: string | null, ver: string | null, display = 'flex') => {
  return css`
    display: ${display};
    ${hoz && `justify-content: ${hoz}`}
    ${ver && `align-items: ${ver}`};
  `;
};

const borderBox = (padding: string) => {
  return css`
    padding: ${padding};
    box-sizing: border-box;
  `;
};

export { flexBox, borderBox };
