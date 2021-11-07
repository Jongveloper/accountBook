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
  margin: auto 50px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  @media ${(props) => props.theme.device.mobileXs} {
    width: 220px;
    margin: 10px 40px;
  }
  @media ${(props) => props.theme.device.mobileS} {
    width: 260px;
    margin: 10px 40px;
    height: 80px;
  }
  @media ${(props) => props.theme.device.mobileM} {
    width: 80%;
    margin: 20px 12%;
  }
  @media ${(props) => props.theme.device.mobileL} {
    width: 80%;
    margin: 20px 12%;
  }

  @media ${(props) => props.theme.device.tablet} {
    width: 650px;
    margin: 20px 70px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 710px;
    margin: 20px 40px;
  }
`;

export default MonthStyle;
