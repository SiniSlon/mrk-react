import styled from "styled-components";
import { useState } from "react";
<<<<<<< HEAD:src/pages/Post/components/SettingsServices.jsx
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { putSettingsServices } from "../../../store/reducers/settings";
import {mainButtonsHoverColor,mainButtonsColor} from '../../../utils/stylesSettings'
=======
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { putSettingsServices } from "../../../../store/reducers/settings";
>>>>>>> 62aeead21b5ba916e81c1bf6d99db9638c7d9fe0:src/pages/Post/components/Settings/SettingsServices.jsx

const SettingsServices =()=>{

  const dispatch =useAppDispatch();
  const set =useAppSelector((state)=>state.settingsSlice.settings);

    const [exprt,setExprt]=useState(set.settingsServices.exprt);
    const [adr,setAdr]=useState(set.settingsServices.adr);
    const [rad,setRad]=useState(set.settingsServices.rad);
    const [ip,setIp]=useState(set.settingsServices.ip);
    const [ipg,setIpg]=useState(set.settingsServices.ipg);
    const [radIr,setRadIr]=useState(set.settingsServices.radIr)

    const SaveSettings = async(e)=>{
      e.preventDefault();
      const data ={
        exprt,
        adr,
        ip,
        ipg,
        radIr
      }
      dispatch(putSettingsServices(data))
    }

    return(<form>
        <Checkbox>
            <input id='exprt' type='checkbox' checked={exprt} onChange={()=>setExprt(s=>!s)}/>
            <label htmlFor='exprt'>Экспорт в ibs</label>
        </Checkbox>
        <Checkbox>
            <input type='text' onChange={(e)=>setAdr(e.target.value)} value={adr}/>
            <label >Адрес сервиса экспорта в ibs</label>
        </Checkbox>
        <Checkbox>
            <input type='text' onChange={(e)=>setRad(e.target.value)} value={rad}/>
            <label >Адрес сервиса лучей спутника</label>
        </Checkbox>
        <Checkbox>
            <input type='text' onChange={(e)=>setIp(e.target.value)} value={ip}/>
            <label >Ip-адрес сервиса Nominatim</label>
        </Checkbox>
        <Checkbox>
          <input type='text' onChange={(e)=>setIpg(e.target.value)} value={ipg}/>
            <label >Ip-адрес генерации полигонов</label>
        </Checkbox>
        <Checkbox>
            <input id='radIr' type='checkbox' checked={radIr} onChange={()=>setRadIr(s=>!s)}/>
            <label htmlFor='radIr'>Разрешить отображать лучи Irridium</label>
        </Checkbox>
        <div>
								<ButtonSet onClick={SaveSettings} >Сохранить</ButtonSet>
								<ButtonSet>По умолчанию</ButtonSet>
								</div>
      </form>)
}
export default SettingsServices

const Checkbox = styled.div `
  padding-top:10px;
  margin-left: 5px;
  label,input:hover{
    cursor:pointer;
    border-radius: 5px;
    padding-left: 5px;
  }
  textarea{
    width:100px;
    height: 10px; 
    resize: none;
    margin-left:3px;
    padding-left: 5px;;
  }
`;

const ButtonSet = styled.button`
    width:110px;
    height: 30px;
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 10px;
    background-color:${mainButtonsColor} ;
    border-radius: 5px;
    border: none;
    color :white;
    text-align: center;
  :hover{
    cursor:pointer;
    background-color: ${mainButtonsHoverColor} ;
    color:white;}
  `;