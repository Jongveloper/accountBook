import styled from 'styled-components';

interface Prop {
  theme: {
    [PropName: string]: any;
  };
}

const NavigationStyle = styled.ul<Prop>`
  display: flex;
  position: fixed;
  width: 100%;
  max-width: 768px;
  left: 50%;
  bottom: 0;
  height: 80px;
  justify-content: space-around;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  cursor: pointer;
  transform: translate(-50%);
  z-index: 3;
  border-top: 1px solid #c1c1c1;
`;

const NavigationIcons = styled.li<Prop>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: position;
  z-index: 9;
  &.Click,
  &.Click p {
    color: ${({ theme }) => theme.color.olive};
  }
`;

export { NavigationIcons, NavigationStyle };
