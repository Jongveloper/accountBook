import styled from 'styled-components';

interface Prop {
  theme: {
    [propName: string]: any;
  };
}

const HeaderStyle = styled.header<Prop>`
  width: 100%;
  height: 40px;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: ${({ theme }) => theme.color.olive};
  color: ${({ theme }) => theme.color.white};
`;

export default HeaderStyle;
