import styled from "styled-components";
import { useState } from "react";
import SettingsMain from "./SettingsMain";
import Labels from './Labels'
import SettingsFilter from './SettingsFilter'
import SettingMap from "./SettingMap";
import SettingsInformation from "./SettingsInformation";
import SettingsServices from "./SettingsServices";
import SettingsSpr from "./SettingsSpr";
import TaskManage from "./TaskManage";
import {mainButtonsColor,mainButtonsHoverColor,mainButtonDiv} from '../../../utils/stylesSettings'

const SettingsTable = (props) => {
  

 // const set = useAppSelector((state)=>state.settingsSlice.settings);  

  const [main,setMain]=useState('main');

  return (
    <Body>
        <Aside>
          <OneColumn>
            <div onClick={()=>setMain('main')} className={main==='main' ? 'active':'passive'}>Общие настройки</div>
            <div onClick={()=>setMain('filter')} className={main==='filter' ? 'active':'passive'}>Фильтр</div>
            <div onClick={()=>setMain('info')} className={main==='info' ? 'active':'passive'}>Информация</div>
            <div onClick={()=>setMain('spr')} className={main==='spr' ? 'active':'passive'}>Справочники</div>
            {/*<p onClick={()=>setMain('geo')} className={main==='geo' ? 'test':'teste'}>Геолокация</p>*/}
            {/*<p onClick={()=>setMain('view')} className={main==='view' ? 'test':'teste'}>Отображение</p>*/}
            <div onClick={()=>setMain('map')} className={main==='map' ? 'active':'passive'}>Картография</div>
            {/*<p onClick={()=>setMain('news')} className={main==='news' ? 'test':'teste'}>Новостная лента</p>*/}
            <div onClick={()=>setMain('serv')} className={main==='serv' ? 'active':'passive'}>Сервисы</div>
            <div onClick={()=>setMain('labels')} className={main==='labels' ? 'active':'passive'}>Метки</div>
            <div onClick={()=>setMain('task')} className={main==='task' ? 'active':'passive'}>Управление заданиями</div>
           
          </OneColumn>
          <TwoColumns>
            {main === 'main' && <SettingsMain/>          }
            {main === 'filter' && <SettingsFilter/>}
            {main === 'info' && <SettingsInformation/>}
            {main === 'map' && <SettingMap/>}
            {main === 'serv' && <SettingsServices/>}
            {main === 'labels' && <Labels/ >}
            {main === 'spr' && <SettingsSpr/>   }
            {main === 'task' && <TaskManage/>   }
            
        </TwoColumns>
        
        </Aside>
    </Body>
    
  )
}

export default SettingsTable;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
  
`;

const Aside = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-areas:"a b b b b b b";
  
`;

const OneColumn = styled.div` 
  grid-area:a;
  border-radius: 5px;
  color:#ffffff;
  padding-left: 2px;
 
  div:hover{
    background-color:${mainButtonDiv};
    cursor:pointer;
    border-radius: 5px;;
  } 
    .active{
      background-color:${mainButtonsColor};
      border-radius: 5px;
      color:white;
      height:40px;
      width: 400px;
      padding-top: 30px;
      text-align : center;
      margin: 10px;
      
    };
    .passive{
      background-color:${mainButtonsHoverColor};
      border-radius:5px;
      height:40px;
      width: 400px;
      padding-top: 30px;
      text-align  : center;
      margin: 10px;  }
      label{
        padding-left: 5px;
        padding-bottom:10px;

      }
  `;

const TwoColumns =  styled.div`
  grid-area:b;
  margin-left: 20px;
    label:hover{
      background-color:rgba(150, 199, 241,0.2);
      cursor:pointer; 
    }
  
`;

