import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';
import PostNavBar from './components/PostNavBar';

const Sessions = () => {

  return (
    <>
      <Header/>

      <Main>
        <PostNavBar/>
        Sessions
        <kbd/>
        <ruby>
        Some text <rp>(</rp><rt>suptitle</rt><rp>)</rp>
        字 <rp>(</rp><rt>ji</rt><rp>)</rp>
      </ruby>

      </Main>
    </>
  )
}

export default Sessions;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
`;
