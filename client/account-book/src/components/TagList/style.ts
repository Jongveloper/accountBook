import styled from 'styled-components';

interface Prop {
  theme: {
    [PropName: string]: any;
  };
}

const TagListStyle = styled.ul<Prop>`
  width: 80%;
  max-width: 768px;
  margin: auto;
  height: 150px;
  border: 5px solid #b6c8a5;
  border-radius: 15px;
  list-style: disc;
  padding: 25px;
  overflow: auto;
`;

export { TagListStyle };
