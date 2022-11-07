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
  height: calc(100vh - 50px);
  background: ${mainBackground};
  position: relative;

   input {
    margin:5px;
   }
`;
