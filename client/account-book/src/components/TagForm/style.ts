import styled from 'styled-components';

interface Prop {
  theme: {
    [PropName: string]: any;
  };
}

const TagFormStyle = styled.form<Prop>`
  width: 100%;
  position: fixed;
  max-width: 768px;
`;

export { TagFormStyle };
