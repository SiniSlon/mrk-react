import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import { mainBackground } from '../../../utils/stylesSettings';
import HandbooksNavBar from '../components/HandbooksNavBar';
import HandbooksButtonsBar from '../components/HandbooksButtonsBar';
import initData from './store/tempHandbook';

const HandbooksRegions = () => {
  const [data, setData] = useState([])

  const handleCitySearch = (e) => {
    let temp = [];
    initData.forEach((item) => {
      if (item.city === e.target.value) temp.push(item)
    })
    setData(temp)
  }

  const handleEngCitySearch = (e) => {
    let temp = [];
    initData.forEach((item) => {
      if (item.engCity === e.target.value) temp.push(item)
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
          <input placeholder='Страна' onChange={handleCountrySearch}/>
          <input placeholder='Область' />
          <input placeholder='Город' onChange={handleCitySearch}/>
          <input placeholder='Сокращение'/>
          <input placeholder='По анлг' onChange={handleEngCitySearch}/>
          <input placeholder='ISO 2'/>
          <input placeholder='ISO 3'/>
          <input placeholder='Коментарий'/>
        </div>  
        <div className='content'>
          <div className='content__header'>
            <div style={{width: '50px', textAlign: 'center'}}>№</div>
            <div>Название</div>
            <div>На английском</div>
            <div>Сокращения</div>
            <div style={{width: '100px', textAlign: 'center'}}>ISO 2</div>
            <div style={{width: '100px', textAlign: 'center'}}>ISO 3</div>
            <div>Коментарий</div>
          </div>

          {data?.map((item, index) => 
            <div className='content__body' key={item.id}>
              <div style={{width: '50px', textAlign: 'center'}}>{index+1}</div>

              <div style={{dipslay: 'flex', flexDerection: 'column'}}>
                {item?.country && <div>{item.country}</div>}
                {item?.region && <div>+-- {item?.region}</div>}
                {item?.city && <div>--+-- {item?.city}</div>}
              </div>

              <div style={{dipslay: 'flex', flexDerection: 'column'}}>
                {item?.engCountry && <div>{item?.engCountry}</div>}
                {item?.engRegion && <div>+-- {item?.engRegion}</div>}
                {item?.engCity && <div>--+-- {item?.engCity}</div>}
              </div>

              <div style={{dipslay: 'flex', flexDerection: 'column'}}>
                {item?.shortCountry && <div>{item?.shortCountry}</div>}
                {item?.shortRegion && <div>+-- {item?.shortRegion}</div>}
                {item?.shortCity && <div>--+-- {item?.shortCity}</div>}
              </div>

              <div style={{width: '100px', textAlign: 'center'}}>{item?.iso2}</div>
              <div style={{width: '100px', textAlign: 'center'}}>{item?.iso3}</div>
              <div>{item?.comment}</div>
            </div>
          )}
        </div>
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
      }
    }
  }
`;
