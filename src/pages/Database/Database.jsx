import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';

const Database = () => {
  const [section, setSection] = useState('');

  return (
    <>
      <Header/>

      <Main>
        Настройка БД
      </Main>
    </>
  )
}

export default Database;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
`;
