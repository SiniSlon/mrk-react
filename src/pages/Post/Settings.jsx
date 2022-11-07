import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';
import PostNavBar from './components/PostNavBar';
import SettingsTable from './components/Settings/SettingsTable'

const Settings = () => {

  return (
    <>
      <Header/>

      <Main>
        <PostNavBar/>
 
        <SettingsTable/>
      </Main>
    </>
  )
}

export default Settings;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 50px);
  background: ${mainBackground};
`;
