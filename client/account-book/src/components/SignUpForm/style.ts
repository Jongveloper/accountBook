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
`;

export default SignUpFormStyle;
