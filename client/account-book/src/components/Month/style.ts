import styled from 'styled-components';

interface Prop {
  theme: {
    [propName: string]: any;
  };
}

const MonthStyle = styled.div<Prop>`
  width: 300px;
  height: 80px;
  border: 5px solid #b6c8a5;
  border-radius: 20px;
  color: #b6c8a5;
  margin: auto;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

export default MonthStyle;
