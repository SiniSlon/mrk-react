import styled from "styled-components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { putSettingsCommon, defaultSettings } from "../../../../store/reducers/settings";
import {mainButtonsHoverColor,mainButtonsColor, mainFontFamily} from '../../../../utils/stylesSettings'

const SettingsCommon = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settingsSlice.common); 

  const [sortByTime, setSortByTime] = useState(settings.sortByTime);
  const [sessionSearch, setSessionSearch] = useState(settings.sessionSearch);
  const [handleSpeech, setHandleSpeech] = useState(settings.handleSpeech);
  const [handleImage, setHandleImage] = useState(settings.handleImage);
  const [statistic, setStatistic] = useState(settings.statistic);
  const [coder, setCoder] = useState(settings.coder);
  const [exportSession, setExportSession] = useState(settings.exportSession);
  const [keyWord, setKeyWord] = useState(settings.keyWord);
  const [language, setLanguage] = useState(settings.language)

  const SaveSettings = async (e) => {
    e.preventDefault();
    const data = {
      sortByTime,
      sessionSearch,
      handleSpeech,
      handleImage,
      statistic,
      coder,
      exportSession,
      keyWord,
      language
    }
    console.log(data)
    dispatch(putSettingsCommon(data))
  }

  const handleDefault = (e) => {
    e.preventDefault();
    setSortByTime(defaultSettings.common.sortByTime);
    setSessionSearch(defaultSettings.common.sessionSearch);
    setHandleSpeech(defaultSettings.common.handleSpeech);
    setHandleImage(defaultSettings.common.handleImage);
    setStatistic(defaultSettings.common.statistic);
    setCoder(defaultSettings.common.coder);
    setExportSession(defaultSettings.common.exportSession);
    setKeyWord(defaultSettings.common.keyWord);
    setLanguage(defaultSettings.common.language)
  }

  return(
    <Section>
      <WrapperInput>
        <label htmlFor="sortByTime">Сортировка по времени</label>
        <input type='checkbox' id='sortByTime' checked={sortByTime} onChange={() => setSortByTime(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="sessionSearch">Поиск сессий</label>
        <input type='checkbox' id='sessionSearch' checked={sessionSearch} onChange={() => setSessionSearch(s => !s)}/>
        </WrapperInput>
      <WrapperInput>
        <label htmlFor="handleSpeech">Обработка речи</label>
        <input type='checkbox' id='handleSpeech' checked={handleSpeech} onChange={() => setHandleSpeech(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="handleImage">Обработка изображений</label>
        <input type='checkbox' id='handleImage' checked={handleImage} onChange={() => setHandleImage(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="statistic">Статистика абонента</label>
        <input type='checkbox' id='statistic' checked={statistic} onChange={() => setStatistic(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="coder">Выбор кодировки сообщений</label>
        <input type='checkbox' id='coder' checked={coder} onChange={() => setCoder(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="exportSession">Экспорт сеансов в формате EZ</label>
        <input type='checkbox' id='exportSession' checked={exportSession} onChange={() => setExportSession(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="keyWord">Поиск по ключевым словам</label>
        <input type='checkbox' id='keyWord' checked={keyWord} onChange={() => setKeyWord(s => !s)}/>
      </WrapperInput>

      <WrapperInput>
        <label>Язык </label>
        <select value={language} onChange={(e)=>setLanguage(e.target.value)}>
          <option value='rus'>Русский</option>
          <option value='eng'>English</option>
        </select>
      </WrapperInput>

      <div>
        <ButtonSet onClick={SaveSettings}>Сохранить</ButtonSet>
        <ButtonSet onClick={handleDefault}>По умолчанию</ButtonSet>
      </div>
    </Section>
  )
}

export default SettingsCommon;

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
