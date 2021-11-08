import styled from 'styled-components';

interface Prop {
  theme: {
    [propName: string]: any;
  };
}

const WriteFormStyle = styled.form<Prop>`
  width: 100%;
  margin: auto;
  z-index: 5;
  @media ${(props) => props.theme.device.mobileXs} {
    margin-left: 30px;
  }
`;

export default WriteFormStyle;
