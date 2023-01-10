import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header';
import { mainBackground } from '../../utils/stylesSettings';
import HandbookNavBar from './components/HandbooksNavBar';
import HandbookButtonsBar from './components/HandbooksButtonsBar';

const Handbook = () => {

  return (
    <>
      <Header/>
      <Main>
        <HandbookNavBar/>
        {/* <HandbookButtonsBar/>      */}
      </Main>
    </>
  )
}

export default Handbook;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};

  .section__bar {
    display: flex;
    padding: 10px;

    .link {
      display: flex;
      padding:3px 10px;
      background-color: white;
      color: black;
      text-decoration: none;
      font-size: 16px;
      margin-right: 10px;
      border-radius: 5px;
      align-items: center;
      font-family: Roboto, sans-serif;
    }

    .active {
      background-color: wheat;
    }
  }
`;
