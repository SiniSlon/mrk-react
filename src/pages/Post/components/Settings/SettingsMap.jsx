import styled from "styled-components";
import { useState } from "react";
import ModalWindow from '../ModalWindow'
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { putSettingsMap } from "../../../../store/reducers/settings";
import {mainButtonsHoverColor,mainButtonsColor, mainFontFamily} from '../../../../utils/stylesSettings'
import LayersIcon from '@mui/icons-material/Layers';
import ButtonWhitIcon from "../../../../components/UI/BarButton/BarButton.tsx";

const SettingMap = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settingsSlice.map);

  const [layers, setLayers] = useState('');

  const [mapModule, setMapModule] = useState(settings.mapModule);
  const [mapType, setMapType] = useState(settings.mapType);
  const [addressGeocode, setAddressGeocode] = useState(settings.addressGeocode);
  const [addressRoute, setAddressRoute] = useState(settings.addressRoute);
  const [searchByTitle, setSearchByTitle] = useState(settings.searchByTitle);
  const [timingAdvance , setTimingAdvance ] = useState(settings.timingAdvance);
  const [maxRadiusGSM, setMaxRadiusGSM] = useState(settings.maxRadiusGSM);
  const [insideRadiusGSM, setInsideRadiusGSM] = useState(settings.insideRadiusGSM);  
  const [outsideRadiusGSM, setOutsideRadiusGSM] = useState(settings.outsideRadiusGSM);
  const [lenPeling, setLenPeling] = useState(settings.lenPeling);
  const [zoom, setZoom] = useState(settings.zoom);
  const [sessions, setSessions] = useState(settings.sessions);
  const [sourceIrridium, setSourceIrridium] = useState(settings.sourceIrridium);
  const [preventLocation, setPreventLocation] = useState(settings.preventLocation);

  const SaveSettings = async (e) => {
    e.preventDefault();
    const data ={
      mapModule,
      mapType,
      addressGeocode,
      addressRoute,
      searchByTitle,
      timingAdvance,
      maxRadiusGSM,
      insideRadiusGSM,
      outsideRadiusGSM,
      lenPeling,
      zoom,
      sessions,
      sourceIrridium,
      preventLocation
    }
    dispatch(putSettingsMap(data))
  }

  return (
    <Section>
      <div className="top__bar">
        <ButtonWhitIcon icon={<LayersIcon/>} title='Управление слоями' color='blue' size='small' func={() => setLayers('layer')} hover={true}/>
        <ButtonWhitIcon icon={<LayersIcon/>} title='Управление пользовательскими слоями' color='blue' size='small' func={() => setLayers('usesLayer')}/>
      </div>

      <WrapperInput>
        <label htmlFor="mapModule">Включить картографический модуль</label>
        <input type='checkbox' id='mapModule' checked={mapModule} onChange={() => setMapModule(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label>Тип карты </label>
        <select value={mapType} onChange={(e) => setMapType(e.target.value)}>
          <option value='osm'>OSM</option>
          <option value='googleCity'>Google</option>
          <option value='googleGeo'>Google Geo</option>
          <option value='googleSputnik'>Google Sputnuk</option>
        </select>
      </WrapperInput>
      <WrapperInput>
        <label>Адрес сервиса геокодирования</label>
        <input type='text' value={addressGeocode} onChange={(e) => setAddressGeocode(e.target.value)}/>
      </WrapperInput>
      <WrapperInput>
        <label>Адрес сервиса построения маршрутов</label>
        <input type='text' value={addressRoute} onChange={(e) => setAddressRoute(e.target.value)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="searchByTitle">Включить поиск местоположения по названию</label>
        <input type='checkbox' id='searchByTitle' checked={searchByTitle} onChange={() => setSearchByTitle(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="timingAdvance">Использовать TimingAdvance для секторов БМ GSM</label>
        <input type='checkbox' id='timingAdvance' checked={timingAdvance} onChange={() => setTimingAdvance(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label>Максимальный радиус зоны покрытия БС GSM, м.</label>
        <input type='text'onChange={(e) => setMaxRadiusGSM(e.target.value)} value={maxRadiusGSM}/>
      </WrapperInput>
      <WrapperInput>
        <label>Уменьшение внутреннего радиуса зоны покрытия БС GSM, м.</label>
        <input type='text' onChange={(e) => setInsideRadiusGSM(e.target.value)} value={insideRadiusGSM}/>
      </WrapperInput>
      <WrapperInput>
        <label>Увеличение внешнего радиуса зоны покрытия БС GSM, м.</label>
        <input type='text' onChange={(e) => setOutsideRadiusGSM(e.target.value)} value={outsideRadiusGSM}/>
      </WrapperInput>
      <WrapperInput>
        <label>Длина пеленга УКВ, м.</label>
        <input type='text'onChange={(e) => setLenPeling(e.target.value)} value={lenPeling}/>
      </WrapperInput>
      <WrapperInput>
        <label>Масштаб по умолчанию</label>
        <input type='text' onChange={(e) => setZoom(e.target.value)} value={zoom}/>
      </WrapperInput>
      <WrapperInput>
        <label>Количество сеансов, отображаемые за раз</label>
        <input type='text' onChange={(e) => setSessions(e.target.value)} value={sessions}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="sourceIrridium">Отображать исходные координаты терминала Irridium</label>
        <input type='checkbox' checked={sourceIrridium} id='sourceIrridium' onChange={() => setSourceIrridium(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="preventLocation">Отображать связь с предыдущим местоположением</label>
        <input type='checkbox' checked={preventLocation} id="preventLocation" onChange={() => setPreventLocation(s => !s)}/>
      </WrapperInput> 

      {layers ==='layer' && 
      <ModalMap>
        <div className="content">
          <div className="table">
          </div>
          <Buttons onClick={()=>setLayers('')}>Сохранить</Buttons>
          <Buttons onClick={()=>setLayers('')}>Закрыть</Buttons>
        </div>
      </ModalMap>}

      {layers ==='usesLayer' && 
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
          <Buttons onClick={()=>setLayers('')}>111</Buttons>
          <Buttons onClick={()=>setLayers('')}>ttt</Buttons>
        </div>
      </ModalWindow>}
      <div>
        <ButtonSet onClick={SaveSettings}>Сохранить</ButtonSet>
        {/* <ButtonSet>По умолчанию</ButtonSet> */}
      </div>
    </Section>
  )
}

export default SettingMap;

const ModalMap = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top:0;
  left:0;
  display: flex;
  align-items:center;
  justify-content: center;

  .content {
    width: 400px;
    height: 200px;
    background-color: white;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  font-family: ${mainFontFamily};

  .top__bar {
    display: flex;
  }

  .bar__button {
    font-size: 16px;
    margin: 0 10px 0 0;  
    border: 2px solid #005aff;
    border-radius: 5px;
    color: #005aff;
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
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

const Buttons = styled.button`
  background-color: ${mainButtonsColor};
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 16px;  
  padding: 7px 10px;
  margin: 20px; 

  :hover{
    background-color: ${mainButtonsHoverColor};
  }
`;

const Tables =styled.table`
  border-collapse: collapse;
  border-bottom: 0.5px solid black;

  th {
    font-weight:300;
  }

  tbody:hover {
    background-color:rgba(12,114,234,0.2);
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
  font-size: 18px;

  :hover {
    cursor:pointer;
    background-color: ${mainButtonsHoverColor};
  }
`;