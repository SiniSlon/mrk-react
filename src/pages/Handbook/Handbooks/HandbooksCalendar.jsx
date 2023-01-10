import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import { mainBackground } from '../../../utils/stylesSettings';
import HandbooksNavBar from '../components/HandbooksNavBar';
import HandbooksButtonsBar from '../components/HandbooksButtonsBar';
import initData from './store/tempHandbook';

const HandbooksCalendar = () => {
  const [data, setData] = useState([])


  return (
    <>
      <Header/>
      <Main>
        <HandbooksNavBar/>
        <HandbooksButtonsBar/>     

        <div className='wrapper'>
          <input placeholder='Календарь'/>
        </div>  
        
        <div className='content'>
          <div className='content__header'>
            <div>№</div>
            <div>Календарь</div>
            <div>Файл</div>
            <div>Категория</div>
            <div>Событие</div>
            <div>Приоритет</div>
            <div>Окончание</div>
            <div>Повтор</div>
          </div>

          {data?.map((item, index) => 
            <div className='content__body' key={item.id}>
              <div>{item?.index}</div>

            </div>
          )}
        </div>      
      </Main>
    </>
  )
}

export default HandbooksCalendar;

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

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    padding-bottom: 0;
    
    input {
      width: min-content;
      padding: 5px 10px;
      outline: none;
      border-radius: 5px;
      margin-right: 10px;
    }
  }
  
  .content {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    margin: 10px;
    border-radius: 10px;
    /* overflow-x: scroll; */

    &__header {
      display: flex;
      /* justify-content: space-around; */
      margin: 5px 10px;
      padding: 5px 0;
      border-bottom: 1px solid #b9b9b9;
      font-weight: 600;
      align-items: center;

      div {
        width: 140px;
        text-align: center;
      }
    }

    &__body {
      display: flex;
      /* justify-content: space-around; */
      margin: 5px 10px;
      padding: 5px 0;
      border-bottom: 1px solid #b9b9b9;

      div {
        width: 140px;
        text-align: center;
      }
    }
  }
`;
