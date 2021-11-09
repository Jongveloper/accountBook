import styled from 'styled-components';

interface Prop {
  theme: {
    [propName: string]: any;
  };
}

export const FormWrap = styled.div<Prop>`
  @media ${(props) => props.theme.device.tablet} {
    margin: 150px auto;
    width: 50%;
  }

  @media ${(props) => props.theme.device.desktop} {
    margin: 150px auto;
    width: 35%;
  }
`;
