// [51.505, -0.09],
// [51.51, -0.1],
// [51.51, -0.12],

    
// const multiPolyline = [
//   [
//     [51.5, -0.1],
//     [51.5, -0.12],
//     [51.52, -0.12],
//   ],
//   [
//     [51.5, -0.05],
//     [51.5, -0.06],
//     [51.52, -0.06],
//   ],
// ]

// const multiPolygon = [
//   [
//     [51.51, -0.12],
//     [51.51, -0.13],
//     [51.53, -0.13],
//   ],
//   [
//     [51.51, -0.05],
//     [51.51, -0.07],
//     [51.53, -0.07],
//   ],
// ]

// const rectangle = [
//   [51.49, -0.08],
//   [51.5, -0.06],
// ]

import { useState, useMemo, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { mainBackground } from '../../utils/stylesSettings';
import PostNavBar from './components/PostNavBar';
import { EditControl } from "react-leaflet-draw";

import { MapContainer, TileLayer, Marker, useMap, Popup, Polyline, Polygon, Rectangle, CircleMarker, Circle, FeatureGroup
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
// import { mainFontFamily } from '../../utils/stylesSettings'

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import AsideMap from './components/AsideMap';


// import 'leaflet/dist/leaflet.css';
// import 'leaflet-draw/dist/leaflet.draw.css';
// import 'leaflet-draw';

const Map = () => {
  const center = [47.23728695323144, 39.59884643554688];

  const initialPoligon = {
    polyline
  }
  const polyline = [
    [30.85, 30.64], 
    [30.79, 30.76], 
    [30.73, 30.88], 
    [30.68, 31.0]
  ]

  const polygon = [
    [45.54654, 39.4564612],
    [45.2454, 40.54654],
    [46.56456, 40.44545],
  ]
  
  const fillBlueOptions = { fillColor: 'blue' }
  const blackOptions = { color: 'black' }
  const limeOptions = { color: 'lime' }
  const purpleOptions = { color: 'purple' }
  const redOptions = { color: 'red' }

  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  console.log(position)
  const markerRef = useRef(null)

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
  [],)

  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])

  const map = useAppSelector((state) => state.mapsSlice.map);
  
  console.log('Init map >>> ', map)

  const mainMap = {
    osm:    '/Maps/OSM/{z}/{x}/{y}.png',
    // yandexSt: '/Maps/Yandex/{z}/{x}/{y}.png',
    // yandexSputnik: '/Maps/YandexSputnik/{z}/{x}/{y}.jpg',
    googleSt: '/Maps/GoogleStreet/{z}/{x}/{y}.png',
    googleGeo: '/Maps/GoogleGeo/{z}/{x}/{y}.jpg',
    googleSputnik: '/Maps/GoogleSputnik/{z}/{x}/{y}.jpg',
  }



  const _created = (e) => console.log(e);
  const _onEdited = (e) => console.log(e);
  const _onDeleted = (e) => console.log(e);

  return (
    <Body>
      <Header/>
      <PostNavBar/>

      <Main>
        <AsideMap position={position}/> 

        <MapContainer center={center} zoom={11} scrollWheelZoom={true} className="map">
        
          <TileLayer
            attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={mainMap[map]} 
            key={map}
          />

          <FeatureGroup>
            <EditControl
              position="topright"
              onCreated={_created}
              onEdited={_onEdited}
              onDeleted={_onDeleted}
            />
          </FeatureGroup>

          <CircleMarker center={center} pathOptions={redOptions} radius={20}>
            <Popup>Popup in CircleMarker</Popup>
          </CircleMarker>

          <Polyline pathOptions={limeOptions} positions={polyline} />
          <Polygon pathOptions={purpleOptions} positions={polygon} />

          <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
            <Popup minWidth={90}>
              <span onClick={toggleDraggable}>
                {draggable
                  ? <div style={{cursor:'pointer'}}>Нажмите чтобы заблокировать маркер</div>
                  : <div style={{cursor:'pointer'}}>Нажмите чтобы разблокировать маркер</div>}
              </span>
            </Popup>
          </Marker>

        </MapContainer>

      </Main>
    </Body>
  )
}

export default Map;

const Main = styled.div`
  display: flex;
  height: calc(100vh - 100px);
  padding: 10px;
  position: relative;

  .map {
    height: 100%;
    border-radius: 5px;
    width: 100vw;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${mainBackground};
`;

<LabelsA >
<button onClick={()=>setViews('creates')} className={views ==='creates'? 'test':'tests'}>Create labels</button>
</LabelsA>

<LabelsB >
<button onClick={()=>setViews('uses')} className={views ==='uses'? 'test':'tests'}>Manage labels</button>
</LabelsB>

{delet === 'label' && 
<Modals>
  <ContentDelete>
    <p>Удалить метку?</p>
    <Buttons>Да</Buttons>
    <Buttons onClick={()=>setDelet('')}>Нет</Buttons>
  </ContentDelete>
</Modals>
}

{delet === 'labelm' && 
  <Modals>
      <ContentDelete>
          <p>Удалить шаблон метки</p>
          <Buttons>Да</Buttons>
          <Buttons onClick={()=>setDelet('')}>Нет</Buttons>
      </ContentDelete>
  </Modals>
}

{create === 'label' && 
  <Modals>
      <ContentLabel>
          <ContentIn>
              <label>Название</label>
              <input type='text' value={nameLabel} onChange={(e)=>setNameLabel(e.target.value)}/>
          </ContentIn>
          <ContentIn>
              <label>Комментарий</label>
              <input type='text' value={commentLabel} onChange={(e)=>setCommentLabel(e.target.value)}/>
          </ContentIn>
          <ContentIn>
              <label>Цвет</label>
              <input type='color' value={colorLabel} onChange={(e)=>setColorLabel(e.target.value)}/>
          </ContentIn>
          <Buttons onClick={CreateLabel}>Save</Buttons>
          <Buttons onClick={()=>setCreate('')}>Cancel</Buttons>
      </ContentLabel>
  </Modals>}
{create === 'labelm' && 
  <Modals>
      <Content>
          <ContentIn>
              <label>Название</label>
              <input type='text'/>
          </ContentIn>
          <ContentIn>
              <label>Тип</label>
              <select>
                  <option></option>
              </select>
          </ContentIn>
          <ContentIn>
              <label>Номер приоритета</label>
              <input type='text'/>
          </ContentIn>
          <ContentIn>
              <label>Отмеченно</label>
              <input type='checkbox'/>
              <input type='checkbox'/>
              <input type='checkbox'/>
          </ContentIn>
          <ContentIn>
              <label>Метка</label>
              <select>
                  <option></option>
              </select>
          </ContentIn>
          <ContentIn>
              <label>Имя</label>
              <input type='text'/>
          </ContentIn>
          <ContentIn>
              <label>Комментарий</label>
              <input type='text'/>
          </ContentIn>
          <Buttons>Создать</Buttons>
          <Buttons onClick={()=>setCreate('')}>Удалить</Buttons>
      </Content>
  </Modals>}

{views === 'creates' &&
<Menu >
  <div>
      <div>
          <Buttons onClick={()=>setCreate('label')}>Создать</Buttons>
          <Buttons onClick={()=>setDelet('label')}>Удалить</Buttons>
      </div>
      <Table>
          <HeadT>
              <tr>
                  <th>Автор</th>
                  <th>Название</th>
                  <th>Комментарий</th>
                  <th>Отображение</th>
                  <th>Цвет</th>
              </tr>
          </HeadT>
          <BodyT>
              <tr>
                  <td>test</td>
                  <td>Label1</td>
                  <td>Commentss</td>
                  <td>Local</td>
                  <td>green</td>
              </tr>
          </BodyT>
      </Table>
  </div>
</Menu>}    

{views ==='uses' &&
<Menu>
  <div>
      <div>
          <Buttons onClick={()=>setCreate('labelm')}>Create</Buttons>
          <Buttons onClick={()=>setDelet('labelm')}>Delete</Buttons>
      </div>
      <Table>
          <HeadT>
              <tr>
                  <th>Автор</th>
                  <th>Метка</th>
                  <th>Тип</th>
                  <th>Шаблон метки</th>
                  <th>Название шаблона метки</th>
                  <th>Имя абонента</th>
                  <th>Комментарий</th>
                  <th>Обозначение</th>
              </tr>
          </HeadT>
          <BodyT>
              <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
              </tr>
              <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
              </tr>
          </BodyT>
      </Table>
  </div>
</Menu>}    