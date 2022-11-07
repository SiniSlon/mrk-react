import styled from "styled-components";
import { useState } from "react";
import SettingsMain from "./SettingsMain";
import Labels from './SettingsLabels'
import SettingsFilter from './SettingsFilter'
import SettingMap from "./SettingMap";
import SettingsInformation from "./SettingsInformation";
import SettingsServices from "./SettingsServices";
import SettingsSpr from "./SettingsSpr";
import TaskManage from "./TaskManage";
import { mainFontFamily } from "../../../../utils/stylesSettings";


const SettingsTable = (props) => {
  const [section, setSection] = useState('main');

  return (
    <Body>
      <Aside>
        <div onClick={() => setSection('main')} className={section === 'main' ? 'button active' : 'button'}>Общие настройки</div>
        <div onClick={() => setSection('filter')} className={section === 'filter' ? 'button active' : 'button'}>Фильтр</div>
        <div onClick={() => setSection('info')} className={section === 'info' ? 'button active' : 'button'}>Информация</div>
        <div onClick={() => setSection('spr')} className={section === 'spr' ? 'button active' : 'button'}>Справочники</div>
        {/*<p onClick={() => setSection('geo')} className={section === 'geo' ? 'button active' : 'button'}>Геолокация</p>*/}
        {/*<p onClick={() => setSection('view')} className={section === 'view' ? 'button active' : 'button'}>Отображение</p>*/}
        <div onClick={() => setSection('map')} className={section === 'map' ? 'button active' : 'button'}>Картография</div>
        {/*<p onClick={() => setSection('news')} className={section === 'news' ? 'button active' : 'button'}>Новостная лента</p>*/}
        <div onClick={() => setSection('serv')} className={section === 'serv' ? 'button active' : 'button'}>Сервисы</div>
        <div onClick={() => setSection('labels')} className={section === 'labels' ? 'button active' : 'button'}>Метки</div>
        <div onClick={() => setSection('task')} className={section === 'task' ? 'button active' : 'button'}>Управление заданиями</div>
      </Aside>
 
      {section === 'main' && <SettingsMain/>}
      {section === 'filter' && <SettingsFilter/>}
      {section === 'info' && <SettingsInformation/>}
      {section === 'map' && <SettingMap/>}
      {section === 'serv' && <SettingsServices/>}
      {section === 'labels' && <Labels/>}
      {section === 'spr' && <SettingsSpr/>}
      {section === 'task' && <TaskManage/>}
    </Body>
  )
}

export default SettingsTable;

const Body = styled.div`
  display: flex;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 10px;  
  padding: 10px;
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #186ddd;
    cursor:pointer;
    height: 50px;
    width: 300px;
    color: white;
    font-family: ${mainFontFamily};
    font-size: 18px;
    border-bottom: 1px solid #00000034;

    :last-child {
      border-bottom: none;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    :first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    :hover{
      background-color:#4785d6;
    } 
  }

    .active {
      background-color:#4785d6;
    }
`;
