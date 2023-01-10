import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import { mainBackground } from '../../../utils/stylesSettings';
import HandbooksNavBar from '../components/HandbooksNavBar';
import HandbooksButtonsBar from '../components/HandbooksButtonsBar';
import initData from './store/tempHandbook';

const HandbooksImsi = () => {
  const [data, setData] = useState([])


  return (
    <>
      <Header/>
      <Main>
        <HandbooksNavBar/>
        <HandbooksButtonsBar/>     

        <div className='wrapper'>
          <input placeholder='ISMI'/>
          <input placeholder='MOBILE_COUNTRY_CODE'/>
          <input placeholder='MOBILE_NETWORK_CODE'/>
          <input placeholder='ISO_3166_1_ALPHA_2'/>
          <input placeholder='ISO_3166_1_ALPHA_3'/>
          <input placeholder='UTC_MIN'/>
          <input placeholder='UTC_MAX'/>
          <input placeholder='DESTINATION'/>
          <input placeholder='Оператор'/>
          <input placeholder='NETWORK_NAME'/>
          <input placeholder='HANDSET_CODE'/>
          <input placeholder='NETWORK_ACTIVATION'/>
          <input placeholder='NETWORK_STATUS'/>
          <input placeholder='GSM400'/>
          <input placeholder='GSM850'/>
          <input placeholder='GSM900'/>
          <input placeholder='GSM1800'/>
          <input placeholder='GSM1900'/>
          <input placeholder='GSMR'/>
          <input placeholder='GSM3'/>
          <input placeholder='FOMA'/>
          <input placeholder='IDEN800'/>
          <input placeholder='CDMA800'/>
          <input placeholder='CDMA1800'/>
          <input placeholder='CDMA1900'/>
          <input placeholder='TDMA'/>
          <input placeholder='SATELLITE'/>
        </div>  
        <div className='content'>
          <div className='content__header'>
            <div>№</div>
            <div>ISMI</div>
            <div>MOBILE_COUNTRY_CODE</div>
            <div>MOBILE_NETWORK_CODE</div>
            <div>ISO_3166_1_ALPHA_2</div>
            <div>ISO_3166_1_ALPHA_3</div>
            <div>UTC_MIN</div>
            <div>UTC_MAX</div>
            <div>DESTINATION</div>
            <div>Оператор</div>
            <div>NETWORK_NAME</div>
            <div>HANDSET_CODE</div>
            <div>NETWORK_ACTIVATION</div>
            <div>NETWORK_STATUS</div>
            <div>GSM400</div>
            <div>GSM850</div>
            <div>GSM900</div>
            <div>GSM1800</div>
            <div>GSM1900</div>
            <div>GSMR</div>
            <div>GSM3</div>
            <div>FOMA</div>
            <div>IDEN800</div>
            <div>CDMA800</div>
            <div>CDMA1800</div>
            <div>CDMA1900</div>
            <div>TDMA</div>
            <div>SATELLITE</div>
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

export default HandbooksImsi;

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
