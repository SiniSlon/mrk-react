import L from "leaflet";
import { useState, useMemo, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { mainBackground } from '../../utils/stylesSettings';
import PostNavBar from './components/PostNavBar';
import { EditControl } from "react-leaflet-draw";
import { MapContainer, TileLayer, FeatureGroup, Marker, Popup, Polygon } from "react-leaflet";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import AsideMap from './components/AsideMap';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw';
import Basemap from "./components/Map/Basemap";

const mainMap = {

  osm:            '/Maps/OSM/{z}/{x}/{y}.png',
  // yandexSt:       '/Maps/Yandex/{z}/{x}/{y}.png',
  // yandexSputnik:  '/Maps/YandexSputnik/{z}/{x}/{y}.jpg',
  googleSt:       '/Maps/GoogleStreet/{z}/{x}/{y}.png',
  googleGeo:      '/Maps/GoogleGeo/{z}/{x}/{y}.jpg',
  googleSputnik:  '/Maps/GoogleSputnik/{z}/{x}/{y}.jpg',
}

const initialPoligon = {
  polyline: [
    [30.85, 30.64], 
    [30.79, 30.76], 
    [30.73, 30.88], 
    [30.68, 31.0]
  ],
  polygon: [
    [45.54654, 39.4564612],
    [45.2454, 40.54654],
    [46.56456, 40.44545],
  ]
}

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const Map = () => {
  const mapStore = useAppSelector((state) => state.settingsSlice.map);
  console.log('mapStore >>> ', mapStore)
  // const ssn = useAppSelector((state) => state.ssnSlice?.ssn[0]);
  // console.log('Map SSN >>> ', ssn)
  
  // const coordsPoint = ssn.coordinates[0].point;
  // const ssnPoint = coordsPoint.slice(1 , coordsPoint.length - 1).split(':');
  
  // const coordsPologones = ssn.polygonList;

  const polygonesCoords = [];

  // coordsPologones.forEach((item) => {
  //   const ponigonString = item.polygon;
  //   const pologonPoint = ponigonString.slice(1 , ponigonString.length - 1).split(',');
  
  //   const coordArray = [];
  
  //   pologonPoint.forEach((item) => {
  //     const item2 = item.trim()
  //     const poligonPoint = item2.slice(1 , item2.length - 1).split(':');
  //     coordArray.push(poligonPoint)
  //   })

  //   polygonesCoords.push(coordArray);
  // })


  const [mapType, setMapType] = useState(mapStore.mapType)

  const center = [47.23728695323144, 39.59884643554688];
  const [position, setPosition] = useState(center);

  const [polygones, setPolygones] = useState([]);
  const [rectangles, setRectangles] = useState([]);
  const [circles, setCircles] = useState([]);
  const [markers, setMarkers] = useState([]);
 
  const _created = (e) => {
    const { layerType, layer } = e;
    console.log('Created event >>> ', e);
    console.log('Created type >>> ', layerType);

    if (layerType == 'polygon') {
      const { _leaflet_id } = layer;

      const figure = {
        id: _leaflet_id,
        type: layerType,
        coords: layer.getLatLngs()[0],
      }

      setPolygones((state) => [...state, figure])
      console.log('Created figure >>> ', figure)
    }

    if (layerType == 'rectangle') {
      const { _leaflet_id } = layer;

      const figure = {
        id: _leaflet_id,
        type: layerType,
        coords: layer.getLatLngs()[0],
      }

      setRectangles((state) => [...state, figure])
      console.log('Created figure >>> ', figure)
    }

    if (layerType == 'circle') {
      const { _leaflet_id } = layer;

      const figure = {
        id: _leaflet_id,
        type: layerType,
        coords: {
          center: layer.getLatLng(),
          radius: layer.getRadius(),
        }
      }

      setCircles((state) => [...state, figure])
      console.log('Created figure >>> ', figure)
    } 

    if (layerType == 'marker') {
      const { _leaflet_id } = layer;

      const figure = {
        id: _leaflet_id,
        type: layerType,
        coords: layer.getLatLng()
      }

      setMarkers((state) => [...state, figure])
      console.log('Created figure >>> ', figure)
    } 
  }

  const _onEdited = (e) => console.log(e);

  const _onDeleted = (e) => {
    // console.log('Delete event >>> ', e)
    const deletedId = Object.keys(e.layers._layers);
    console.log('Delete deletedId >>> ', deletedId)

    // const idArray = Object.keys(deletedFigure);
    // console.log('Deleted idArray >>> ', idArray);
    // console.log('Deleted mapLayers >>> ', polygones);
    // setPolygones([]);
    // setRectangles([]);
    // setCircles([]);
    // setMarkers([]);

    // for (let i = 0; i < mapLayers.length; i++) {
    //   console.log(mapLayers[i].id)
    //   if (idArray.includes(mapLayers[i].id)) {
    //     const index = mapLayers.indexOf(idArray[i]);
    //     const tempArray = [...mapLayers]
    //     tempArray.splice(index, 1)
    //     console.log(tempArray)
    //     setMapLayers(tempArray)
    //   }
    // }

    // for (let i = 0; i < idArray.length; i++) {
    //   if (mapLayers.includes(idArray[i])) {
    //     const index = mapLayers.indexOf(idArray[i]);
    //     const tempArray = [...mapLayers]
    //     tempArray.splice(index, 1)
    //     console.log(tempArray)
    //     setMapLayers(tempArray)
    //   }
    // }

  };

  const [draggable, setDraggable] = useState(false)

  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])

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

  const redOptions = { color: 'red' }


  return (
    <>
      <Header/>

      <Main>
      <PostNavBar/>

        <MapWrapper>
        {/* <AsideMap 
          polygones={polygones}
          rectangles={rectangles}
          circles={circles}
          markers={markers}
          mapType={mapType}
          setMapType={setMapType}
        />  */}

          <MapContainer center={center} zoom={mapStore.zoom} scrollWheelZoom={true} className="map">
            {/* attributionControl={false}  */}
            <TileLayer
              // attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              

              url={mainMap[mapType]} 
              key={mapType}
            />

            <Basemap mapType={mapType} setMapType={setMapType}/>

            <FeatureGroup>
              <EditControl
                position="topright"
                onCreated={_created}
                onEdited={_onEdited}
                onDeleted={_onDeleted}
              />
            </FeatureGroup>

            {/* <Polygon pathOptions={redOptions} positions={coordArray}/> */}


            {polygonesCoords?.map((item, index) => (
              <Polygon pathOptions={redOptions} positions={item} key={index}/>
            ))}

            <Marker
              draggable={draggable}
              eventHandlers={eventHandlers}
              position={center}
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
        </MapWrapper>
      </Main>
    </>
  )
}

export default Map;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
`;

const MapWrapper = styled.div`
  display: flex;
  padding: 10px;
  height: 100%;

  .map {
    height: 100%;
    border-radius: 5px;
    width: 100vw;
  }
`;