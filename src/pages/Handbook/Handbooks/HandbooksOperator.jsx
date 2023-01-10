import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import { mainBackground } from '../../../utils/stylesSettings';
import HandbooksNavBar from '../components/HandbooksNavBar';
import HandbooksButtonsBar from '../components/HandbooksButtonsBar';
import initData from './store/tempOperator';

const HandbooksOperator = () => {
  const [data, setData] = useState([])

  const handleCCMNCSearch = (e) => {
    let temp = [];
    initData.forEach((item) => {
      if (item.ccmnc === e.target.value) temp.push(item)
    })
    setData(temp)
  }

  const handleTitleSearch = (e) => {
    let temp = [];
    initData.forEach((item) => {
      if (item.title === e.target.value) temp.push(item)
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

  const handleRegionSearch = (e) => {
    console.log('Ищу по региону >> ', e.target.value)
  }

  const handleCitySearch = (e) => {
    console.log('Ищу по городу >> ', e.target.value)
  }

  const handleCommentSearch = (e) => {
    console.log('Ищу по коменту >> ', e.target.value)
  }

  return (
    <>
      <Header/>
      <Main>
        <HandbooksNavBar/>
        <HandbooksButtonsBar/>     

        <div className='wrapper'>
          <input placeholder='CCMNC' onChange={handleCCMNCSearch}/>
          <input placeholder='Название' onChange={handleTitleSearch}/>
          <input placeholder='Страна' onChange={handleCountrySearch}/>
          <input placeholder='Область' onChange={handleRegionSearch}/>
          <input placeholder='Город' onChange={handleCitySearch}/>
          <input placeholder='Коментарий' onChange={handleCommentSearch}/>
        </div>  
        <div className='content'>
          <div className='content__header'>
            <div style={{width: '70px'}}>№</div>
            <div>CCMNC</div>
            <div>Название</div>
            <div>Страна</div>
            <div>Область</div>
            <div>Город</div>
            <div>Коментарий</div>
          </div>

          {data?.map((item, index) => 
            <div className='content__body' key={item.id}>
              <div style={{width: '70px'}}>{index+1}</div>
              <div>{item?.ccmnc}</div>
              <div>{item?.title}</div>
              <div>{item?.country}</div>
              <div>{item?.region}</div>
              <div>{item?.city}</div>
              <div>{item?.comment}</div>
            </div>
          )}
        </div>    

      </Main>
    </>
  )
}

export default HandbooksOperator;

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

    &__header {
      display: flex;
      /* justify-content: space-around; */
      margin: 5px 10px;
      padding: 5px 0;
      border-bottom: 1px solid #b9b9b9;
      font-weight: 600;

      div {
        width: 200px;
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
        width: 200px;
        text-align: center;
      }
    }
  }
`;
