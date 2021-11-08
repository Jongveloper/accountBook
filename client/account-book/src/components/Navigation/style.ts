import styled from 'styled-components';

interface Prop {
  theme: {
    [PropName: string]: any;
  };
}

const NavigationStyle = styled.div<Prop>`
  display: flex;
  position: fixed;
  width: 100%;
  left: 50%;
  bottom: 0;
  height: 80px;
  justify-content: space-around;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  cursor: pointer;
  transform: translate(-50%);
  background: #f8f8f8;
  z-index: 9;
  border-top: 1px solid #c1c1c1;
`;

const NavigationIcons = styled.div<Prop>`
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
