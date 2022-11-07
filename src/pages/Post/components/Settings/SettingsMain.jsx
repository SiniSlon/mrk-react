import styled from "styled-components";
import { useState } from "react";
<<<<<<< HEAD:src/pages/Post/components/SettingsMain.jsx
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { putSettingsMain } from "../../../store/reducers/settings";
import {mainButtonsHoverColor,mainButtonsColor} from '../../../utils/stylesSettings'
=======
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { putSettingsMain } from "../../../../store/reducers/settings";
>>>>>>> 62aeead21b5ba916e81c1bf6d99db9638c7d9fe0:src/pages/Post/components/Settings/SettingsMain.jsx

const SettingsMain =()=>{
  const dispatch = useAppDispatch();
  const set = useAppSelector((state)=> state.settingsSlice.settings); 


    const [sorttime, setSorttime] = useState(set.settingsMain.sorttime);
    const [search,setSearch]=useState(set.settingsMain.search);
    const [obr,setObr]=useState(set.settingsMain.obr);
    const [obrIm,setObrIm]=useState(set.settingsMain.obrIm);
    const [stat,setStat]=useState(set.settingsMain.stat);
    const [coder,setCoder]=useState(set.settingsMain.coder);
    const [exp,setExp]=useState(set.settingsMain.exp);
    const [keyw,setKeyw]=useState(set.settingsMain.keyw);
    const [lan,setLan] =useState(set.settingsMain.lan)

  
		const SaveSettings = async (e) => {
      e.preventDefault();
			const data = {
        sorttime,
        search,
        obr,
        obrIm,
        stat,
        coder,
        exp,
        keyw,
        lan
			}
      console.log(data)
			dispatch(putSettingsMain(data))
    }
    	return(
				<form>
                <Checkbox>
                  <input type='checkbox' id='sorttime' checked={sorttime} onChange={()=>setSorttime(s=>!s)}/>
                  <label htmlFor="sorttime">Сортировка по времени</label>
                </Checkbox>
                <Checkbox>
                  <input type='checkbox' id='search' checked={search} onChange={()=>setSearch(s=>!s)}/>
                  <label htmlFor="search">Поиск сессий</label>
                  </Checkbox>
                <Checkbox>
                  <input type='checkbox' id='obr' checked={obr} onChange={()=>setObr(s=>!s)}/>
                  <label htmlFor="obr">Обработка речи</label>
                </Checkbox>
                <Checkbox>
                  <input type='checkbox' id='obrIm' checked={obrIm} onChange={()=>setObrIm(s=>!s)}/>
                  <label htmlFor="obrIm">Обработка изображений</label>
                </Checkbox>
                <Checkbox>
                  <input type='checkbox' id='stat' checked={stat} onChange={()=>setStat(s=>!s)}/>
                  <label htmlFor="stat">Статистика абонента</label>
                </Checkbox>
                <Checkbox>
                  <input type='checkbox' id='coder' checked={coder} onChange={()=>setCoder(s=>!s)}/>
                  <label htmlFor="coder">Выбор кодировки сообщений</label>
                </Checkbox>
                <Checkbox>
                  <input type='checkbox' id='exp' checked={exp} onChange={()=>setExp(s=>!s)}/>
                  <label htmlFor="exp">Экспорт сеансов в формате EZ</label>
                </Checkbox>
                <Checkbox>
                  <input type='checkbox' id='keyw' checked={keyw} onChange={()=>setKeyw(s=>!s)}/>
                  <label htmlFor="keyw">Поиск по ключевым словам</label>
                </Checkbox> 
                <Checkbox>
                  <select onChange={(e)=>setLan(e.target.value)}>
                    <option value='-1' disabled selected></option>
                    <option value='rus'>Russia</option>
                    <option value='eng'>English</option>
                  </select>
                  <label>lang</label>
                  {console.log(lan)}
                </Checkbox>
								<div>
								<ButtonSet onClick={SaveSettings}>Сохранить</ButtonSet>
								<ButtonSet>По умолчанию</ButtonSet>
								</div>
              </form>
		)
}
export default SettingsMain


const Checkbox = styled.div `
  padding-top :10px;
  label,input:hover{
    cursor:pointer;
    border-radius: 5px;
    padding-left: 5px;
  };
  input:checked{
    background-color: ${mainButtonsColor} ;
  }
`;
  
const ButtonSet = styled.button`
    width:110px;
    height: 30px;
    margin-top: 20px;
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
