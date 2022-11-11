import styled from "styled-components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { putSettingsInfo, defaultSettings } from "../../../../store/reducers/settings";
import {mainButtonsHoverColor, mainButtonDiv, mainFontFamily, mainButtonsColor} from '../../../../utils/stylesSettings'

const SettingsInformation = () => {
  const dispatch = useAppDispatch();
  const currentSettings = useAppSelector((state) => state.settingsSlice.information);

  const [abonent, setAbonent] = useState(currentSettings.abonent);
  const [session, setSession] = useState(currentSettings.session);
  const [textSearch, setTextSearch] = useState(currentSettings.textSearch);
  const [reports, setReports] = useState(currentSettings.reports);
  const [database, setDatabase] = useState(currentSettings.database);

  const handleSave = async (e) => {
    e.preventDefault();
    const data ={
      abonent,
      session,
      textSearch,
      reports,
      database
    }
    dispatch(putSettingsInfo(data))
  }

  const handleDefault = (e) => {
    e.preventDefault();
    setAbonent(defaultSettings.information.abonent);
    setSession(defaultSettings.information.session);
    setTextSearch(defaultSettings.information.textSearch);
    setReports(defaultSettings.information.reports);
    setDatabase(defaultSettings.information.database);
  }

  return( 
    <Section>
      <WrapperInput>
        <label htmlFor="abonent">Информация об абоненте</label>
        <input type='checkbox' id='abonent' checked={abonent} onChange={() => setAbonent(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="session">Информация об сеансе</label>
        <input type='checkbox' id='session' checked={session} onChange={() => setSession(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="textSearch">Результаты текстового поиска</label>
        <input type='checkbox' id='textSearch' checked={textSearch} onChange={() => setTextSearch(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="reports">Информация об отчете</label>
        <input type='checkbox' id='reports' checked={reports} onChange={() => setReports(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="database">Информация из информационно-справочных БД</label>  
        <input type='checkbox' id='database' checked={database} onChange={() => setDatabase(s => !s)}/>
      </WrapperInput>

      <div>
        <ButtonSet onClick={handleSave}>Сохранить</ButtonSet>
        <ButtonSet onClick={handleDefault}>По умолчанию</ButtonSet>
      </div>
    </Section>
  )
}

export default SettingsInformation;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  font-family: ${mainFontFamily};
`;

const WrapperInput = styled.div`
  display: flex;
  width: 700px;  
  justify-content: space-between;
  margin: 10px 0 0 0;

  label {
    cursor: pointer;
  }
`;

const ButtonSet = styled.button`
  padding: 10px 20px;
  margin: 40px 40px 30px 0;
  background-color: ${mainButtonsColor};
  border-radius: 5px;
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;

  :hover {
    cursor:pointer;
    background-color: ${mainButtonsHoverColor};
    color:white;
  }
`;