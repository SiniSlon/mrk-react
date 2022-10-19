import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';

const Database = () => {
  const [section, setSection] = useState('');

  return (
    <Body>
      <Header/>

      <Main>
        Настройка БД
      </Main>

      <Footer>
        Фууутер
      </Footer>
    </Body>
  )
}

export default Database;

const Main = styled.div`
  display: flex;
  height: calc(100vh - 100px);
  padding: 10px;
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${mainBackground};
`;
