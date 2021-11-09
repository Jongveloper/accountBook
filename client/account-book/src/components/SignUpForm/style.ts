import styled from 'styled-components';

interface Prop {
  theme: {
    [propName: string]: any;
  };
}

const SignUpFormStyle = styled.form<Prop>`
  width: 100%;
  height: 'auto';
  margin: auto;

  @media ${(props) => props.theme.device.tablet} {
    margin: 300px auto;
    width: 100%;
  }

  @media ${(props) => props.theme.device.desktop} {
    margin: 400px auto;
    width: 35%;
  }
`;

export default SignUpFormStyle;
