import styled from "styled-components";
import { useState } from "react";
import SettingsCommon from "./SettingsCommon";
import Labels from './SettingsLabels'
import SettingsFilter from './SettingsFilter'
import SettingMap from "./SettingsMap";
import SettingsInformation from "./SettingsInformation";
import SettingsServices from "./SettingsServices";
import SettingsCatalog from "./SettingsCatalog";
import TaskManage from "./TaskManage";
import { mainFontFamily } from "../../../../utils/stylesSettings";

const SettingsTable = () => {
  const [section, setSection] = useState('common');

  return (
    <Body>
      <Aside>
        <div onClick={() => setSection('common')} className={section === 'common' ? 'button active' : 'button'}>Общие настройки</div>
        <div onClick={() => setSection('filter')} className={section === 'filter' ? 'button active' : 'button'}>Фильтр</div>
        <div onClick={() => setSection('info')} className={section === 'info' ? 'button active' : 'button'}>Информация</div>
        <div onClick={() => setSection('catalog')} className={section === 'catalog' ? 'button active' : 'button'}>Справочники</div>
        <div onClick={() => setSection('map')} className={section === 'map' ? 'button active' : 'button'}>Картография</div>
        <div onClick={() => setSection('services')} className={section === 'services' ? 'button active' : 'button'}>Сервисы</div>
        <div onClick={() => setSection('labels')} className={section === 'labels' ? 'button active' : 'button'}>Метки</div>
        <div onClick={() => setSection('task')} className={section === 'task' ? 'button active' : 'button'}>Управление заданиями</div>
      </Aside>
 
      {section === 'common' && <SettingsCommon/>}
      {section === 'filter' && <SettingsFilter/>}
      {section === 'info' && <SettingsInformation/>}
      {section === 'catalog' && <SettingsCatalog/>}
      {section === 'map' && <SettingMap/>}
      {section === 'services' && <SettingsServices/>}
      {section === 'labels' && <Labels/>}
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
  margin-right: 30px;

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
