import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';
import PostNavBar from './components/PostNavBar';

const ConnectDB = () => {
  const [filter, setFilter] = useState(false);

  return (
    <>
      <Header/>

      <Main>
        <PostNavBar/>
        <input type='file' accept='.sql, .dump'  id="files"/>
       <label htmlFor='files'></label>
      </Main>
    </>
  )
}

export default ConnectDB;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  /* padding: 10px; */
  position: relative;
   input{
    margin:5px;
   }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${mainBackground};
`;
