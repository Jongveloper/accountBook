import styled from 'styled-components';

interface Prop {
  theme: {
    [propName: string]: any;
  };
}

const AccountDateStyle = styled.div<Prop>`
  display: flex;
  justify-content: space-between;
  height: 10px;
  border-bottom: 1px solid #c1c1c1;
  font-size: 12px;
  font-weight: bold;
`;
const AccountContentStyle = styled.div<Prop>`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 20px;
  font-weight: bold;
  font-size: 14px;
`;

const AccountTagStyle = styled.div<Prop>`
  display: flex;
  justify-content: flex-start;
  color: #c1c1c1;
  height: 10px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export { AccountDateStyle, AccountContentStyle, AccountTagStyle };
