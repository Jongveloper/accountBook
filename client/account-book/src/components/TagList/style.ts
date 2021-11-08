import styled from 'styled-components';

interface Prop {
  theme: {
    [PropName: string]: any;
  };
}

const TagListStyle = styled.ul<Prop>`
  width: 80%;
  margin: auto;
  height: 300px;
  border: 5px solid #b6c8a5;
  border-radius: 15px;
  list-style: disc;
  padding: 25px;
  overflow: auto;
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
    height: 300px;
    margin-left: 6%;
  }
  @media ${(props) => props.theme.device.mobileMM} {
    height: 300px;
  }
  @media ${(props) => props.theme.device.mobileL} {
    width: 80%;
    margin: 20px 12%;
  }

  @media ${(props) => props.theme.device.tablet} {
    width: 595px;
    margin: 0 85px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 660px;
    height: 700px;
    margin: 20px 20px;
  }
`;

export { TagListStyle };
