import styled from "styled-components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { putSettingsCatalog, defaultSettings } from "../../../../store/reducers/settings";
import {mainButtonsHoverColor, mainButtonDiv, mainFontFamily, mainButtonsColor} from '../../../../utils/stylesSettings'
    
const SettingsCatalog = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settingsSlice.catalog); 

  const [localInfo, setLocalInfo] = useState(settings.localInfo);
  const [codeAbonent, setCodeAbonent] = useState(settings.codeAbonent);
  const [codeCorresp, setCodeCorresp] = useState(settings.codeCorresp);
  const [imeiAbonent, setImeiAbonent] = useState(settings.imeiAbonent);
  const [imeiCorresp, setImeiCorresp] = useState(settings.imeiCorresp);
  const [imsiAbonent, setImsiAbonent] = useState(settings.imsiAbonent);
  const [imsiCorresp, setImsiCorresp] = useState(settings.imsiCorresp);
  const [ipAbonent, setIpAbonent] = useState(settings.ipAbonent);
  const [ipCorresp, setIpCorrespcr] = useState(settings.ipCorresp);
  const [geoAbonent, setGeoAbonent] = useState(settings.geoAbonent);
  const [geoCorresp, setGeoCorresp] = useState(settings.geoCorresp);
  const [player, setPlayer] = useState(settings.player);

  const handleSave = async(e) => {
    e.preventDefault();
    const data = {
      localInfo,
      codeAbonent,
      codeCorresp,
      imeiAbonent,
      imeiCorresp,
      imsiAbonent,
      imsiCorresp,
      ipAbonent,
      ipCorresp,
      geoAbonent,
      geoCorresp,
      player,
    }
    dispatch(putSettingsCatalog(data))
  }

  const handleDefault = (e) => {
    e.preventDefault();
    setLocalInfo(defaultSettings.catalog.localInfo);
    setCodeAbonent(defaultSettings.catalog.codeAbonent);
    setCodeCorresp(defaultSettings.catalog.codeCorresp);
    setImeiAbonent(defaultSettings.catalog.imeiAbonent);
    setImeiCorresp(defaultSettings.catalog.imeiCorresp);
    setImsiAbonent(defaultSettings.catalog.imsiAbonent);
    setImsiCorresp(defaultSettings.catalog.imsiCorresp);
    setIpAbonent(defaultSettings.catalog.ipAbonent);
    setIpCorrespcr(defaultSettings.catalog.ipCorresp);
    setGeoAbonent(defaultSettings.catalog.geoAbonent);
    setGeoCorresp(defaultSettings.catalog.geoCorresp);
    setPlayer(defaultSettings.catalog.player);
  }

  return (
    <Section>
      <WrapperInput>
        <label htmlFor="localInfo">Использовать информацию из локального справочника</label>
        <input type='checkbox' id='localInfo'checked={localInfo} onChange={() => setLocalInfo(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="codeAbonent">Информация по коду провайдера об абоненте</label>
        <input type='checkbox' id='codeAbonent' checked={codeAbonent} onChange={() => setCodeAbonent(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="codeCorresp">Информация по коду провайдера о корреспонденте</label>
        <input type='checkbox' id='codeCorresp' checked={codeCorresp} onChange={() => setCodeCorresp(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="imeiAbonent">Информация по IMEI об абоненте</label>
        <input type='checkbox' id='imeiAbonent' checked={imeiAbonent} onChange={() => setImeiAbonent(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="imeiCorresp">Информация по IMEI о корреспонденте</label>
        <input type='checkbox' id='imeiCorresp' checked={imeiCorresp} onChange={() => setImeiCorresp(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="imsiAbonent">Информация по IMSI об абоненте</label>
        <input type='checkbox' id="imsiAbonent" checked={imsiAbonent} onChange={() => setImsiAbonent(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="imsiCorresp">Информация по IMSI о корреспонденте</label>
        <input type='checkbox' id='imsiCorresp'  checked={imsiCorresp} onChange={() => setImsiCorresp(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor='ipAbonent'>Информация по IP об абоненте</label>
        <input type='checkbox' id='ipAbonent' checked={ipAbonent} onChange={() => setIpAbonent(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="ipCorresp">Информация по IP о корреспонденте</label>
        <input type='checkbox' id='ipCorresp' checked={ipCorresp} onChange={() => setIpCorrespcr(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="geoAbonent">Информация по местоположению об абоненте</label>
        <input type='checkbox' id='geoAbonent' checked={geoAbonent} onChange={() => setGeoAbonent(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="geoCorresp">Информация по местоположению о корреспонденте</label>
        <input type='checkbox' id='geoCorresp' checked={geoCorresp} onChange={() => setGeoCorresp(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="player">Инвертировать в прямой и обратный плеер</label>
        <input type='checkbox' id='player' checked={player} onChange={()=>setPlayer(s => !s)}/>
      </WrapperInput>
      <div>
        <ButtonSet onClick={handleSave}>Сохранить</ButtonSet>
        <ButtonSet onClick={handleDefault}>По умолчанию</ButtonSet>
      </div>
    </Section>
  )
}

export default SettingsCatalog;

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
