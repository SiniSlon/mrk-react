import styled from 'styled-components';
import { useState } from 'react';
import { useAppSelector } from '../../store/hooks'
import Header from '../../components/Header';
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';
import TableUpload from './components/TableUpload';
import LoadNavBar from './components/LoadNavBar';


const HistoryLoad = () => {
  const [section, setSection] = useState('');

  const map = useAppSelector((state) => state.mapsSlice.map);
  console.log('Init map >>> ', map)

  return (
    <Body>
      <Header/>

      <Main>
        {/*<TableUpload/>*/}
        <LoadNavBar/>
        <TableUpload/>
      </Main>

      {/* <Footer> */}
        {/* Фууутер */}
      {/* </Footer> */}
    </Body>
  )
}

export default HistoryLoad;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);  
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
