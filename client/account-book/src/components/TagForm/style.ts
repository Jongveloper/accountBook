import styled from 'styled-components';

interface Prop {
  theme: {
    [PropName: string]: any;
  };
}

const TagFormStyle = styled.form<Prop>`
  width: 100%;
  max-width: 768px;
  display: inline-block;
  z-index: 4;
`;

export { TagFormStyle };
