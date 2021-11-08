import styled from 'styled-components';
interface Prop {
  theme: {
    [propName: string]: any;
  };
}

export const AccountInfo = styled.div<Prop>`
  @media ${(props) => props.theme.device.mobileXs} {
    display: none;
  }
  @media ${(props) => props.theme.device.mobileS} {
    display: none;
  }
  @media ${(props) => props.theme.device.mobileM} {
    margin: 0 10px 0 0;
  }
  @media ${(props) => props.theme.device.mobileMM} {
    margin: 0;
  }
  @media ${(props) => props.theme.device.mobileL} {
    margin: 0;
  }

  @media ${(props) => props.theme.device.tablet} {
    margin: 0px 70px;
  }

  @media ${(props) => props.theme.device.desktop} {
    margin: 0px 70px;
  }
`;

export const SelectWrapper = styled.div`
  @media ${(props) => props.theme.device.mobileXs} {
    margin: 10px 0px;
  }
  @media ${(props) => props.theme.device.mobileS} {
    margin: 10px 0;
    height: 80px;
  }
  @media ${(props) => props.theme.device.mobileM} {
    margin: 0;
  }
  @media ${(props) => props.theme.device.mobileMM} {
    margin: 0 20px 0 0;
  }
  @media ${(props) => props.theme.device.mobileL} {
    margin: 0 0 0 145px;
  }

  @media ${(props) => props.theme.device.tablet} {
    margin: 0 70px 0 370px;
  }

  @media ${(props) => props.theme.device.desktop} {
    margin: 0 70px 0 370px;
  }
`;
