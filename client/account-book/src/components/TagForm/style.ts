import styled from 'styled-components';

interface Prop {
  theme: {
    [PropName: string]: any;
  };
}

const TagFormStyle = styled.form<Prop>`
  width: 100%;
  display: inline-block;
  z-index: 4;
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
    margin-top: -20px;
  }
  @media ${(props) => props.theme.device.mobileMM} {
    margin: 20px 0 -5px 0;
  }
  @media ${(props) => props.theme.device.mobileL} {
    width: 80%;
    margin: 20px 12%;
  }

  @media ${(props) => props.theme.device.tablet} {
    width: 600px;
    margin: 0 auto 0 100px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 800px;
    margin: 20px 50px;
  }
`;

export { TagFormStyle };
