import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Header from '../../../components/Header';
import { mainBackground } from '../../../utils/stylesSettings';
import HandbooksNavBar from '../components/HandbooksNavBar';
import HandbooksButtonsBar from '../components/HandbooksButtonsBar';

const HandbooksImport = () => {

  return (
    <>
      <Header/>
      <Main>
        <HandbooksNavBar/>

        <div className='body'>
          <h2>Импорт файлов</h2>
          <input type='file'/>
        </div>
      </Main>
    </>
  )
}

export default HandbooksImport;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};

  .body {
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 10px;
    padding: 10px;
    width: min-content;
    border-radius: 10px;

    h2 { 
      margin: 0 0 20px 0;
      text-align: center;
    }
  }
`;
