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
        ConnectDB
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
`;
