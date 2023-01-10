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
import AsideMenu from "../../../../components/UI/AsideMenu/AsideMenu.tsx";

const SettingsTable = () => {
  const [section, setSection] = useState('Общие настройки');

  return (
    <Body>
      <AsideMenu 
        names={['Общие настройки', 'Фильтр', 'Информация', 'Справочники', 'Картография', 'Сервисы', 'Метки', 'Управление заданиями']}
        section={section}
        setSection={setSection}
      />
 
      {section === 'Общие настройки' && <SettingsCommon/>}
      {section === 'Фильтр' && <SettingsFilter/>}
      {section === 'Информация' && <SettingsInformation/>}
      {section === 'Справочники' && <SettingsCatalog/>}
      {section === 'Картография' && <SettingMap/>}
      {section === 'Сервисы' && <SettingsServices/>}
      {section === 'Метки' && <Labels/>}
      {section === 'Управление заданиями' && <TaskManage/>}
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
