import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';
import PostNavBar from './components/PostNavBar';
import SettingsTable from './components/SettingsTable'

const Settings = () => {
  const [filter, setFilter] = useState(false);

  return (
    <Body>
      <Header/>

      <Main>
        <PostNavBar/>

        <SettingsTable/>
      </Main>

      {/* <Footer>
        Фууутер
      </Footer> */}
    </Body>
  )
}

export default Settings;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh);
  /* padding: 10px; */
  position: relative;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${mainBackground};
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
