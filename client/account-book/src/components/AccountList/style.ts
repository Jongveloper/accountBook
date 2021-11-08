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
const AccountIncomeStyle = styled.div<Prop>`
  color: #b6c8a5;
  @media ${(props) => props.theme.device.mobileXs} {
    margin-left: 30px;
  }
  @media ${(props) => props.theme.device.mobileS} {
    margin-left: 50px;
  }
  @media ${(props) => props.theme.device.mobileM} {
    margin-left: 100px;
  }
  @media ${(props) => props.theme.device.mobileMM} {
    margin-left: 150px;
  }
  @media ${(props) => props.theme.device.mobileL} {
    margin-left: 200px;
  }

  @media ${(props) => props.theme.device.tablet} {
    margin-left: 450px;
  }

  @media ${(props) => props.theme.device.desktop} {
    margin-left: 450px;
  }
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

export {
  AccountDateStyle,
  AccountContentStyle,
  AccountTagStyle,
  AccountIncomeStyle,
};
