import React from 'react';
// element
import { Container } from '../../elements';
// style
import HeaderStyle from './style';
//router
import { HeaderIncluded } from '../../route/Path';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const path: string = useLocation().pathname;
  return HeaderIncluded.includes(path) && !/signin/.test(path) ? (
    <HeaderStyle>
      <Container height='20px'>
        <h1 style={{ textAlign: 'center', fontSize: '20px', marginTop: '0px', fontWeight: 'bold' }}>알뜰 살뜰 가계부</h1>
      </Container>
    </HeaderStyle>
  ) : null
}

export default Header;