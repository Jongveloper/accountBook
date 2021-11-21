import styled from 'styled-components';

interface Prop {
  theme: {
    [PropName: string]: any;
  };
}

export const ImageWrapper = styled.div<Prop>`
  text-align: center;
  height: 140px;

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
    margin: 0 20px 40px 12%;
  }
  @media ${(props) => props.theme.device.mobileMM} {
    margin: 0;
  }
  @media ${(props) => props.theme.device.mobileL} {
    width: 80%;
    margin: 20px 12%;
  }

  @media ${(props) => props.theme.device.tablet} {
    width: 600px;
    margin: 20px 70px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 710px;
    margin: 20px 0px;
  }
`;

export const MonthWrapper = styled.div<Prop>`
  margin: 20px auto;

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
    width: 340px;
    margin: 0 0 0 -20px;
  }
  @media ${(props) => props.theme.device.mobileMM} {
    width: 415px;
    margin: 0px 0px 0px -42px;
  }
  @media ${(props) => props.theme.device.mobileL} {
    width: 80%;
    margin: 20px 12%;
  }

  @media ${(props) => props.theme.device.tablet} {
    width: 100%;
    margin: 20px -40px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 710px;
    margin: 20px -20px;
  }
`;
