import styled from "styled-components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { putSettingsMain } from "../../../../store/reducers/settings";

const SettingsMain = () => {
  const dispatch = useAppDispatch();
  const set = useAppSelector((state) => state.settingsSlice.settings.main); 
  console.log(set)

  const [sortByTime, setSortByTime] = useState(set.sortByTime);
  const [sessionSearch, setSessionSearch] = useState(set.sessionSearch);
  const [handleSpeech, setHandleSpeech] = useState(set.handleSpeech);
  const [handleImage, setHandleImage] = useState(set.handleImage);
  const [statistic, setStatistic] = useState(set.statistic);
  const [coder, setCoder] = useState(set.coder);
  const [exportSession, setExportSession] = useState(set.exportSession);
  const [keyWord, setKeyWord] = useState(set.keyWord);

  const handleSave = (e) => {
    e.preventDefault();
    const data = {
      sortByTime,
      sessionSearch,
      handleSpeech,
      handleImage,
      statistic,
      coder,
      exportSession,
      keyWord
    }
    console.log('Save main settings >> ', data)
    dispatch(putSettingsMain(data))
  }

  const handleDefault = (e) => {
    e.preventDefault();

    setSortByTime(set.sortByTime);
    setSessionSearch(set.sessionSearch);
    setHandleSpeech(set.handleSpeech);
    setHandleImage(set.handleImage);
    setStatistic(set.statistic);
    setCoder(set.coder);
    setExportSession(set.exportSession);
    setKeyWord(set.keyWord);
  }

  return(
    <form>
      <Checkbox>
        <input type='checkbox' id='sorttime' checked={sortByTime} onChange={() => setSortByTime(s => !s)}/>
        <label htmlFor="sorttime">Сортировка по времени</label>
      </Checkbox>
      <Checkbox>
        <input type='checkbox' id='search' checked={sessionSearch} onChange={() => setSessionSearch(s => !s)}/>
        <label htmlFor="search">Поиск сессий</label>
        </Checkbox>
      <Checkbox>
        <input type='checkbox' id='obr' checked={handleSpeech} onChange={() => setHandleSpeech(s => !s)}/>
        <label htmlFor="obr">Обработка речи</label>
      </Checkbox>
      <Checkbox>
        <input type='checkbox' id='obrIm' checked={handleImage} onChange={() => setHandleImage(s => !s)}/>
        <label htmlFor="obrIm">Обработка изображений</label>
      </Checkbox>
      <Checkbox>
        <input type='checkbox' id='stat' checked={statistic} onChange={() => setStatistic(s => !s)}/>
        <label htmlFor="stat">Статистика абонента</label>
      </Checkbox>
      <Checkbox>
        <input type='checkbox' id='coder' checked={coder} onChange={() => setCoder(s => !s)}/>
        <label htmlFor="coder">Выбор кодировки сообщений</label>
      </Checkbox>
      <Checkbox>
        <input type='checkbox' id='exp' checked={exportSession} onChange={() => setExportSession(s => !s)}/>
        <label htmlFor="exp">Экспорт сеансов в формате EZ</label>
      </Checkbox>
      <Checkbox>
        <input type='checkbox' id='keyw' checked={keyWord} onChange={() => setKeyWord(s => !s)}/>
        <label htmlFor="keyw">Поиск по ключевым словам</label>
      </Checkbox>
      <div>
        <ButtonSet onClick={handleSave}>Сохранить</ButtonSet>
        <ButtonSet onClick={handleDefault}>По умолчанию</ButtonSet>
      </div>
    </form>
  )
}

export default SettingsMain;


const Checkbox = styled.div `
  padding-top :10px;

  label, input:hover{
    cursor:pointer;
    border-radius: 5px;
    padding-left: 5px;
  }
`;

const ButtonSet = styled.button`
  width:110px;
  height: 30px;
  margin-top: 20px;
  margin-right: 10px;
  background-color:#559ddb ;
  border-radius: 5px;
  border: none;
  color :white;
  text-align: center;

  :hover{
    cursor:pointer;
    background-color: #5b93c5 ;
    color:white;
  }
`;
