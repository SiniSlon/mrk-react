import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { changeMap } from '../../../store/reducers/map';
import { mainFontFamily } from '../../../utils/stylesSettings';

const AsideMap = (props) => {
  const dispatch = useAppDispatch();
  const map = useAppSelector((state) => state.mapsSlice.map);

  // console.log('Aside polygones >>> ', props.polygones);
  // console.log('Aside rectangle >>> ', props.rectangles);
  // console.log('Aside circle >>> ', props.circles);
  // console.log('Aside markers >>> ', props.markers);

  const handleSubmite = () => {
    const request = {
      polygones: props.polygones,
      rectangles: props.rectangles,
      circles: props.circles,
      markers: props.markers,
    }
    console.log('Submit >>> ', request);
  }

  return (
		<Aside> 
			<div className='title'>Вид карты</div>
			<button className={map == 'osm' ? 'button__active' : 'button'} onClick={() => dispatch(changeMap('osm'))}>OSM</button>
			{/* <button className={map == 'yandexSt' ? 'button__active' : 'button'} onClick={() => dispatch(changeMap('yandexSt'))}>Yandex</button> */}
			{/* <button className={map == 'yandexSputnik' ? 'button__active' : 'button'} onClick={() => dispatch(changeMap('yandexSputnik'))}>Yandex Sputnik</button> */}
			<button className={map == 'googleSt' ? 'button__active' : 'button'} onClick={() => dispatch(changeMap('googleSt'))}>Google</button>
			<button className={map == 'googleGeo' ? 'button__active' : 'button'} onClick={() => dispatch(changeMap('googleGeo'))}>Google Geo</button>
			<button className={map == 'googleSputnik' ? 'button__active' : 'button'} onClick={() => dispatch(changeMap('googleSputnik'))}>Google Sputnik</button>

			{props.polygones.length !== 0 &&<div className='slash'/>}
      {props.polygones.length !== 0 && <div className='title'>Текущие полигоны</div>}

      {props.polygones.length !== 0 && props.polygones.map((item, index) => (
        <div key={item.id}>
          <p> {index + 1}. Полигон </p> 
          <div> 
            {item.coords.map((item, index) => (
              <div key={index}>
                <div>Lat: {item.lat}</div>
                <div>Lng: {item.lng}</div>
              </div>
            ))} 
          </div>
        </div>
      ))}

      {props.rectangles.length !== 0 &&<div className='slash'/>}
      {props.rectangles.length !== 0 && <div className='title'>Текущие rectangle</div>}

      {props.rectangles.length !== 0 && props.rectangles.map((item, index) => (
        <div key={item.id}>
          <p> {index + 1}. rectangle </p> 
          <div> 
            {item.coords.map((item, index) => (
              <div key={index}>
                <div>Lat: {item.lat}</div>
                <div>Lng: {item.lng}</div>
              </div>
            ))} 
          </div>
        </div>
      ))}

      {props.circles.length !== 0 &&<div className='slash'/>}
      {props.circles.length !== 0 && <div className='title'>Текущие circles</div>}

      {props.circles.length !== 0 && props.circles.map((item, index) => (
        <div key={item.id}>
          <p> {index + 1}. circles </p> 
          <div>Center</div>
          <div>Lat: {item.coords.center.lat}</div>
          <div>Lng: {item.coords.center.lng}</div>
          <div>Radius: {item.coords.radius} m.</div>
        </div>
      ))}

      {props.markers.length !== 0 &&<div className='slash'/>}
      {props.markers.length !== 0 && <div className='title'>Текущие markers</div>}

      {props.markers.length !== 0 && props.markers.map((item, index) => (
        <div key={item.id}>
          <p> {index + 1}. markers </p> 
          <div>Lat: {item.coords.lat}</div>
          <div>Lng: {item.coords.lng}</div>
        </div>
      ))}


      {(props.polygones.length !== 0 || 
        props.rectangles.length !== 0  || 
        props.circles.length !== 0 || 
        props.markers.length !== 0) &&
        <>
          <div className='slash'/>
          <button className='accept-btn' onClick={handleSubmite}>Применить</button>
        </>
      }
  </Aside>
	)
}

export default AsideMap;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;

  .title {
    font-family: ${mainFontFamily};
    margin: 0 auto;
  }

  .button {
    display: flex;
    justify-content: center;
    border: none;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px;
    background-color: #5478bb;
    color: white;
    font-family: ${mainFontFamily};
    font-size: 18px;
    cursor: pointer;

    :hover { 
      background-color: #0059ffc1;
    }

    &__active {
      display: flex;
      justify-content: center;
      border: none;
      border-radius: 10px;
      margin-top: 10px;
      padding: 5px;
      background-color: #0059ffc1;
      color: white;
      font-family: ${mainFontFamily};
      font-size: 18px;
      cursor: pointer;
    }
  }

  .slash {
    display: flex;
    width: 92%;
    height: 1px;
    background-color: #00000050;
    margin: 10px auto;
  }

  .accept-btn {
    display: flex;
    justify-content: center;
    background-color: #0059ffc1;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-family: ${mainFontFamily};
    font-size: 18px;
    margin: 0 auto;
    padding: 10px;
    width: 150px;
  }
`;
