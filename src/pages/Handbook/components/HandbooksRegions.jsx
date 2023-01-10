import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Header from '../../../components/Header';
import { mainBackground } from '../../../utils/stylesSettings';
import HandbooksNavBar from './HandbooksNavBar';
import HandbooksButtonsBar from './HandbooksButtonsBar';

const HandbooksRegions = () => {

  return (
    <>
      <Header/>
      <Main>
        <HandbooksNavBar/>
        <HandbooksButtonsBar/>     

        <h3>Regions</h3>  
      </Main>
    </>
  )
}

export default HandbooksRegions;

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
