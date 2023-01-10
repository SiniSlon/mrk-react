import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import { mainBackground } from '../../../utils/stylesSettings';
import HandbooksNavBar from '../components/HandbooksNavBar';
import HandbooksButtonsBar from '../components/HandbooksButtonsBar';
import initData from './store/tempHandbook';

const HandbooksPhones = () => {
  const [data, setData] = useState([])

  const handleTfopSearch = (e) => {
    console.log('Ищу ТФОП >> ', e.target.value)
  }

  const handleCitySearch = (e) => {
    let temp = [];
    initData.forEach((item) => {
      if (item.city === e.target.value) temp.push(item)
    })
    setData(temp)
  }

  const handleRegionSearch = (e) => {
    let temp = [];
    initData.forEach((item) => {
      if (item.region === e.target.value) temp.push(item)
    })
    setData(temp)
  }

  const handleCountrySearch = (e) => {
    let temp = [];
    initData.forEach((item) => {
      if (item.country === e.target.value) temp.push(item)
    })
    setData(temp)
  }

  return (
    <>
      <Header/>
      <Main>
        <HandbooksNavBar/>
        <HandbooksButtonsBar/>     

        <div className='wrapper'>
          <input placeholder='ТФОП' onChange={handleTfopSearch}/>
          <input placeholder='Страна' onChange={handleCountrySearch}/>
          <input placeholder='Область' onChange={handleRegionSearch}/>
          <input placeholder='Город' onChange={handleCitySearch}/>
          <input placeholder='Оператор'/>
          <input placeholder='Коментарий'/>
        </div>  
        <div className='content'>
          <div className='content__header'>
            <div style={{width: '40px'}}>№</div>
            <div style={{width: '80px'}}>Номер</div>
            <div style={{width: '100px'}}>Начало диап.</div>
            <div style={{width: '100px'}}>Конец диап.</div>
            <div style={{width: '50px'}}>Мин. длина кода</div>
            <div style={{width: '50px'}}>Макс. длина кода</div>
            <div style={{width: '100px'}}>Дата ввода</div>
            <div style={{width: '100px'}}>Дата отмены</div>
            <div style={{width: '130px'}}>Страна</div>
            <div>Область</div>
            <div>Город</div>
            <div style={{width: '100px'}}>Оператор</div>
            <div>Комментарий</div>
            <div style={{width: '130px'}}>Страна ENG</div>
            <div>Область ENG</div>
            <div>Город ENG</div>
            <div style={{width: '100px'}}>Оператор ENG</div>
          </div>

          {data?.map((item, index) => 
            <div className='content__body' key={item.id}>
              <div style={{width: '40px'}}>{index+1}</div>
              <div style={{width: '80px'}}>{item?.phoneNumber}</div>
              <div style={{width: '100px'}}>{item?.startNumber}</div>
              <div style={{width: '100px'}}>{item?.endNumber}</div>
              <div style={{width: '50px'}}>{item?.minLenghtCode}</div>
              <div style={{width: '50px'}}>{item?.maxLenghtCode}</div>
              <div style={{width: '100px'}}>{item?.dateEnter}</div>
              <div style={{width: '100px'}}>{item?.dateCancle}</div>
              <div style={{width: '130px'}}>{item?.country}</div>
              <div>{item?.region}</div>
              <div>{item?.city}</div>
              <div style={{width: '100px'}}>{item?.operator}</div>
              <div>{item?.comment}</div>
              <div style={{width: '130px'}}>{item?.engCountry}</div>
              <div>{item?.engRegion}</div>
              <div>{item?.engCity}</div>
              <div style={{width: '100px'}}>{item?.engOperator}</div>
            </div>
          )}
        </div>      
      </Main>
    </>
  )
}

export default HandbooksPhones;

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
      justify-content: space-around;
      margin: 5px 10px;
      padding: 5px 0;
      border-bottom: 1px solid #b9b9b9;
      font-weight: 600;
      font-size: 12px;
      align-items: center;

      div {
        width: 140px;
        text-align: center;
      }
    }

    &__body {
      display: flex;
      justify-content: space-around;
      margin: 5px 10px;
      padding: 5px 0;
      border-bottom: 1px solid #b9b9b9;
      font-size: 12px;

      div {
        width: 140px;
        text-align: center;
      }
    }
  }
`;
