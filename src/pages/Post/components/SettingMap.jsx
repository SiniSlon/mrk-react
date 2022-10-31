import styled from "styled-components";
import { useState } from "react";
import ModalWindow from './ModalWindow'
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { putSettingsMap } from "../../../store/reducers/settings";

const SettingMap =()=>{

  const dispatch =useAppDispatch();
  const set = useAppSelector((state)=>state.settingsSlice.settings);


    const [onMap,setOnMap]=useState(set.settingsMap.onMap);
    const [searchMap,setSearchMap]=useState(set.settingsMap.searchMap);
    const [def,setDef]=useState(set.settingsMap.def);
    const [dir,setDir]=useState(set.settingsMap.dir);
    const [geo,setGeo]=useState(set.settingsMap.geo);
    const [mar,setMar]=useState(set.settingsMap.mar);
    const [maxV,setMaxV]=useState(set.settingsMap.maxV);  
    const [decV,setDecV]=useState(set.settingsMap.decV)
    const [inV,setInV]=useState(set.settingsMap.inV)
    const [len,setLen]=useState(set.settingsMap.len)
    const [zoom,setZoom]=useState(set.settingsMap.zoom)
    const [quan,setQuan]=useState(set.settingsMap.quan)
    const [uses,setUses]=useState('')

    const SaveSettings = async (e) =>{
      e.preventDefault();
      const data ={
            onMap,
            searchMap,
            def,
            dir,
            geo,
            mar,
            maxV,
            decV,
            inV,
            len,
            zoom,
            quan
      }
      dispatch(putSettingsMap(data))
      console.log(set)
    }

    return(
        <div>
             <Checkbox>
                <input type='checkbox' id='map' checked={onMap} onChange={()=>setOnMap(s=>!s)}/>
                <label htmlFor="map">Включить картографический модуль</label>
              </Checkbox>
              <Checkbox>
                <select></select>
                <label>тип карты</label>
              </Checkbox>
              <Checkbox>
                <div onClick={()=>setUses('uses')}>Управление слоями</div>
              </Checkbox>
              <Checkbox>
              <div onClick={()=>setUses('usess')}>Управление пользовательскими слоями</div>
              </Checkbox>
              {/*<Checkbox>
              <label>Перезагрузить карту</label>
              </Checkbox>*/}
              {/*<Checkbox>
              <label>Очистить кэш карты</label>
              </Checkbox>*/}
              <Checkbox>
                <input type='text' value={geo} onChange={(e)=>setGeo(e.target.value)}/>
                <label>Адрес сервиса геокодирования</label>
              </Checkbox>
              <Checkbox>
              <input type='text' value={mar} onChange={(e)=>setMar(e.target.value)}/>
                <label>Адрес сервиса построения маршрута</label>
              </Checkbox>
              <Checkbox>
              <input type='checkbox' id='search' checked={searchMap} onChange={()=>setSearchMap(s=>!s)}/>
                <label htmlFor="search">поиск местоположения по карте</label>
              </Checkbox>
              <Checkbox>
              <input type='text'onChange={(e)=>setMaxV(e.target.value)} value={maxV}/>
                <label>Максимальный радиус зоны покрытия секторов БС GSM</label>
              </Checkbox>
              <Checkbox>
              <input type='text' onChange={(e)=>setDecV(e.target.value)} value={decV}/>
                <label>уменьшение внутреннего радиуса зоны покрытия секторов БС GSM</label>
              </Checkbox>
              <Checkbox>
              <input type='text' onChange={(e)=>setInV(e.target.value)} value={inV}/>
                <label>увеличение внешнего радиуса зоны покрытия секторов БС GSM</label>
              </Checkbox>
              <Checkbox>
              <input type='text'onChange={(e)=>setLen(e.target.value)} value={len}/>
                <label>Длина пеленга УКВ,М</label>
              </Checkbox>
              <Checkbox>
              <input type='text' onChange={(e)=>setZoom(e.target.value)} value={zoom}/>
                <label>масштаб по умолчанию</label>
              </Checkbox>
              <Checkbox>
              <input type='text' onChange={(e)=>setQuan(e.target.value)} value={quan}/>
                <label>количество сеансов, отображаемые за раз</label>
              </Checkbox>
              <Checkbox>
              <input type='checkbox' checked={def} id='def' onChange={()=>setDef(s=>!s)}/>
                <label htmlFor="def">Исходные координаты терминала Irridium</label>
              </Checkbox>
              <Checkbox>
              <input type='checkbox' checked={dir} id="dir" onChange={()=>setDir(s=>!s)}/>
                <label htmlFor="dir">Связь с предыдущим местоположением</label>
              </Checkbox> 
              {uses ==='uses' && 
              <ModalWindow>
                <div>
                  <Tables>
                    <thead>
                      <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>URL</th>
                        <th>Проекция</th>
                        <th>Тип</th>
                        <th>Макс.масштаб</th>
                        <th>Базовый</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><input type='checkbox'/></td>
                      </tr>
                    </tbody>
                  </Tables>
                </div>
                <div>
                <Buttons onClick={()=>setUses('')}>111</Buttons>
                  <Buttons onClick={()=>setUses('')}>ttt</Buttons>
                </div>
              </ModalWindow>  }
              {uses ==='usess' && 
              <ModalWindow>
                <div>
                  <Tables>
                    <thead>
                      <tr>
                        <th>№</th>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Show</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>222</td>
                        <td>222</td>
                        <td>222</td>
                        <td>222</td>
                      </tr>
                    </tbody>
                  </Tables>
                </div>
                <div>
                  <Buttons onClick={()=>setUses('')}>111</Buttons>
                  <Buttons onClick={()=>setUses('')}>ttt</Buttons>
                  </div>
              </ModalWindow>  }
              <div>
								<ButtonSet onClick={SaveSettings}>Сохранить</ButtonSet>
								<ButtonSet>По умолчанию</ButtonSet>
								</div>
        </div>
    )
}
export default SettingMap


const Checkbox = styled.div `
   padding-top:10px;
   margin-left: 5px;
  label,div:hover{
    cursor:pointer;
    border-radius: 5px;
    
  }
  label,input,div{
    padding-left: 5px;
  }
 
`;
const Buttons = styled.button`
    width: 80px;
    background-color: rgb(12,114,234);
    color:white;
    cursor:pointer;
    margin-top: 20px;
    border:none;
    border-radius: 5px;
  :hover{
    background-color: rgba(12,114,234,0.8);
  }
`;

const Tables =styled.table`
    border-collapse: collapse;
    border-bottom: 0.5px solid black;
  th{
    font-weight:300;}
  tbody:hover{
    background-color:rgba(12,114,234,0.2)}

  `;

const ButtonSet = styled.button`
  width:110px;
  height: 30px;
  margin-top: 10px;
  margin-right: 10px;
  background-color:#559ddb ;
  border-radius: 5px;
  border: none;
  color :white;
  text-align: center;
:hover{
  cursor:pointer;
  background-color: #5b93c5 ;
  color:white;}
`;