import styled from "styled-components";
import { useState } from "react";
import ModalWindow from '../ModalWindow'
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { putSettingsFilter, putSettingsFilterDefault } from "../../../../store/reducers/settings";
import { mainButtonsHoverColor, mainButtonDiv, mainButtonsColor } from '../../../../utils/stylesSettings'
import CheckboxInput from "../UI/CheckboxInput";

const SettingsFilter = () => {
  const [settings, setSettings] = useState('')

  const dispatch = useAppDispatch()
  const currentSettings = useAppSelector((state) => state.settingsSlice.filter)
  const defaultSettings = useAppSelector((state) => state.settingsSlice.filterDefault)
  
  const [irridium, setIrridium]= useState(currentSettings.irridium)
  const [thuraya, setThuraya] = useState(currentSettings.thuraya)
  const [gsm, setGsm] = useState(currentSettings.gsm)
  const [kv, setKv] = useState(currentSettings.kv)
  const [ukv, setUkv] = useState(currentSettings.ukv)
  const [ptt, setPtt] = useState(currentSettings.ptt)
  const [wifi, setWifi] = useState(currentSettings.wifi)

  const [irridiumDef, setIrridiumDef]= useState(defaultSettings.irridiumDefault)
  const [thurayaDef, setThurayaDef] = useState(defaultSettings.thurayaDefault)
  const [gsmDef, setGsmDef] = useState(defaultSettings.gsmDefault)
  const [kvDef, setKvDef] = useState(defaultSettings.kvDefault)
  const [ukvDef, setUkvDef] = useState(defaultSettings.ukvDefault)
  const [pttDef, setPttDef] = useState(defaultSettings.pttDefault)
  const [wifiDef, setWifiDef] = useState(defaultSettings.wifiDefault)

  const handleSave = async (e) => {
    e.preventDefault();
    const data = {
      irridium,
      thuraya,
      gsm,
      kv,
      ukv,
      ptt,
      wifi 
    }
    console.log(data)
    dispatch(putSettingsFilter(data))
  }

  const handleSaveDefault = async (e) => {
    e.preventDefault();
    const data = {
      irridiumDefault: irridiumDef,
      thurayaDefault: thurayaDef,
      gsmDefault: gsmDef,
      kvDefault: kvDef,
      ukvDefault: ukvDef,
      pttDefault: pttDef,
      wifiDefault: wifiDef, 
    }
    console.log(data)
    dispatch(putSettingsFilterDefault(data))
  }

  // const handleSaveDefault = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     irridiumDefault,
  //     thurayaDefault,
  //     gsmDefault,
  //     kvDefault,
  //     ukvDefault,
  //     pttDefault,
  //     wifiDefault 
  //   }
  //   console.log(data)
  //   dispatch(putSettingsFilter(data))
  // }

  const handleDefault = async (e) => {
    e.preventDefault();
    setIrridium(defaultSettings.filter.irridium)
    setThuraya(defaultSettings.filter.thuraya)
    setGsm(defaultSettings.filter.gsm)
    setKv(defaultSettings.filter.kv)
    setUkv(defaultSettings.filter.ukv)
    setPtt(defaultSettings.filter.ptt)
    setWifi(defaultSettings.filter.wifi)
  }

  return (
    <div>
    <CustomField>
      <legend>Отображаемые системы связи</legend>

      <CheckboxInput label='Irridium' id='irridium' checked={irridium} onChange={setIrridium}/>
      <CheckboxInput label='Thuraya' id='thuraya' checked={thuraya} onChange={setThuraya}/>
      <CheckboxInput label='PTT' id='ptt' checked={ptt} onChange={setPtt}/>
      <CheckboxInput label='GSM' id='gsm' checked={gsm} onChange={setGsm}/>
      <CheckboxInput label='KB' id='kv' checked={kv} onChange={setKv}/>
      <CheckboxInput label='YKB' id='ukv' checked={ukv} onChange={setUkv}/>
      <CheckboxInput label='WIFI' id='wifi' checked={wifi} onChange={setWifi}/>

      <ButtonSet onClick={handleSave}>Сохранить</ButtonSet>
    </CustomField>

      <CustomField>
        <legend>Системы связи выбранные по-умолчанию</legend>
        
        <CheckboxInput label='Irridium' id='irridiumDef' checked={irridiumDef} onChange={setIrridiumDef}/>
        <CheckboxInput label='Thuraya' id='thurayaDef' checked={thurayaDef} onChange={setThurayaDef}/>
        <CheckboxInput label='PTT' id='pttDef' checked={pttDef} onChange={setPttDef}/>
        <CheckboxInput label='GSM' id='gsmDef' checked={gsmDef} onChange={setGsmDef}/>
        <CheckboxInput label='KB' id='kvDef' checked={kvDef} onChange={setKvDef}/>
        <CheckboxInput label='YKB' id='ukvDef' checked={ukvDef} onChange={setUkvDef}/>
        <CheckboxInput label='WIFI' id='wifiDef' checked={wifiDef} onChange={setWifiDef}/>

        <ButtonSet onClick={handleSaveDefault}>Сохранить</ButtonSet>
      </CustomField>


      <div>
        <ButtonSet onClick={handleDefault}>Default</ButtonSet>
      </div>
    </div>
  )
};

export default SettingsFilter;


const CustomField = styled.fieldset`
  display:inline-block;
  margin-top:5px;
`;

const ButtonSet = styled.button`
  padding: 10px 20px;
  margin: 30px auto 0;
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
