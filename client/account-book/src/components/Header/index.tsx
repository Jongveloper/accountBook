import React from 'react';
import HeaderStyle from './style';
import { Container } from '../../elements';
//router
import { HeaderIncluded } from '../../route/Path';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const path: string = useLocation().pathname;
  return HeaderIncluded.includes(path) && !/signin/.test(path) ? (
    <HeaderStyle>
      <Container>
        <h1 style={{ textAlign: 'center', fontSize: '20px', marginTop: '5px', fontWeight: 'bold' }}>알뜰 살뜰 가계부</h1>
      </Container>
    </HeaderStyle>
  ) : null
}

export default Header;