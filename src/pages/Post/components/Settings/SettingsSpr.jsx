import styled from "styled-components";
import { useState } from "react";
<<<<<<< HEAD:src/pages/Post/components/SettingsSpr.jsx
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { putSettingsSpr } from "../../../store/reducers/settings";
import {mainButtonsHoverColor,mainButtonDiv} from '../../../utils/stylesSettings'
    
=======
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { putSettingsSpr } from "../../../../store/reducers/settings";

>>>>>>> 62aeead21b5ba916e81c1bf6d99db9638c7d9fe0:src/pages/Post/components/Settings/SettingsSpr.jsx
const SettingsSpr =()=>{

    const dispatch = useAppDispatch();
    const settings = useAppSelector((state)=>state.settingsSlice.settings); 

    const [lspr,setLspr]=useState(settings.settingsSpr.lspr);
    const [prab,setPrab]=useState(settings.settingsSpr.prab);
    const [prcr,setPrcr]=useState(settings.settingsSpr.prcr);
    const [imeiab,setImeiab]=useState(settings.settingsSpr.imeiab);
    const [imeicr,setImeicr]=useState(settings.settingsSpr.imeicr);
    const [imsiab,setImsiab]=useState(settings.settingsSpr.imsiab);
    const [imsicr,setImsicr]=useState(settings.settingsSpr.imsicr);
    const [ipab,setIpab]=useState(settings.settingsSpr.ipab);
    const [ipcr,setIpcr]=useState(settings.settingsSpr.ipcr);
    const [geoab,setGeoab]=useState(settings.settingsSpr.geoab);
    const [geocr,setGeocr]=useState(settings.settingsSpr.geocr);
    const [pl,setPl]=useState(settings.settingsSpr.pl);

    const SaveSettings = async(e)=>{
        e.preventDefault();
        const data={
            lspr,
            prab,
            prcr,
            imeiab,
            imeicr,
            imsiab,
            imsicr,
            ipab,
            ipcr,
            geoab,
            geocr,
            pl
        }
        dispatch(putSettingsSpr (data))
        console.log(data)
        console.log(settings)

    }

    return(<form>
        <Checkbox>
          <input type='checkbox' id='lspr'checked={lspr} onChange={()=>setLspr(s=>!s)}/>
          <label htmlFor="lspr">Использовать информацию из локального справочника</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='prab' checked={prab} onChange={()=>setPrab(s=>!s)}/>
          <label htmlFor="prab">Информация по коду провайдера об абоненте</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='prcr' checked={prcr} onChange={()=>setPrcr(s=>!s)}/>
          <label htmlFor="prcr">Информация по коду провайдера о корреспонденте</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='imeiab' checked={imeiab} onChange={()=>setImeiab(s=>!s)}/>
          <label htmlFor="imeiab">Информация по IMEI об абоненте</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='imeicr' checked={imeicr} onChange={()=>setImeicr(s=>!s)}/>
          <label htmlFor="imeicr">Информация по IMEI о корреспонденте</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id="imsiab" checked={imsiab} onChange={()=>setImsiab(s=>!s)}/>
          <label htmlFor="imsiab">Информация по IMSI об абоненте</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='imsicr'  checked={imsicr} onChange={()=>setImsicr(s=>!s)}/>
          <label htmlFor="imsicr">Информация по IMSI о корреспонденте</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='ipab' checked={ipab} onChange={()=>setIpab(s=>!s)}/>
          <label htmlFor='ipab'>Информация по IP об абоненте</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='ipcr' checked={ipcr} onChange={()=>setIpcr(s=>!s)}/>
          <label htmlFor="ipcr">Информация по IP о корреспонденте</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='geoab' checked={geoab} onChange={()=>setGeoab(s=>!s)}/>
          <label htmlFor="geoab">Информация по местоположению об абоненте</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='geocr' checked={geocr} onChange={()=>setGeocr(s=>!s)}/>
          <label htmlFor="geocr">Информация по местоположению о корреспонденте</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='pl' checked={pl} onChange={()=>setPl(s=>!s)}/>
          <label htmlFor="pl">Инвертировать в прямой и обратный плеер</label>
        </Checkbox>
        <div>
								<ButtonSet onClick={SaveSettings}>Сохранить</ButtonSet>
								<ButtonSet>По умолчанию</ButtonSet>
								</div>
      </form>)
}
export default SettingsSpr


const Checkbox = styled.div `
  padding-top:10px;
  
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
    margin-right: 10px;
    background-color:${mainButtonDiv};
    border-radius: 5px;
    border: none;
    color :white;
    text-align: center;
  :hover{
    cursor:pointer;
    background-color: ${mainButtonsHoverColor} ;
    color:white;}
  `;
