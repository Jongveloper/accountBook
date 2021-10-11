import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface Prop {
  theme: {
    [propName: string]: any;
  };
}

const GlobalStyle = createGlobalStyle<Prop>`
  ${reset};

  body{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.color.bgColor};
    color: ${({ theme }) => theme.color.black};
    line-height: 1.5;
  }

  *{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  ol, ul {
    list-style: none;
  }
`;

export default GlobalStyle;
