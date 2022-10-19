import styled from 'styled-components';
import { useState } from 'react';
import Header from '../../components/Header';
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';
import TableUpload from './components/TableUpload';

const HistoryLoad = () => {
  const [section, setSection] = useState('');

  return (
    <Body>
      <Header/>

      <Main>
        <TableUpload/>
      </Main>

      <Footer>
        Фууутер
      </Footer>
    </Body>
  )
}

export default HistoryLoad;

const Main = styled.div`
  display: flex;
  flex-direction: column;
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
