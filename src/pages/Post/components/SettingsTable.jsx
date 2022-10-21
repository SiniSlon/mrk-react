import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";
import PaginationBlock from "../../../components/Pagination";
import Loader from "../../../components/Loader";
import { useState } from "react";
import Labels from './Labels'
import SettingsFilter from './SettingsFilter'

const SettingsTable = (props) => {
  const [main,setMain]=useState('');
  

  // console.log(props.postList)
  return (
    <Body>
        <Aside>
          <OneColumn>
            <p onClick={()=>setMain('main')} className={main==='main' ? 'test':'teste'}>Общие настройки</p>
            <p onClick={()=>setMain('filter')} className={main==='filter' ? 'test':'teste'}>Фильтр</p>
            <p onClick={()=>setMain('info')} className={main==='info' ? 'test':'teste'}>Info</p>
            <p onClick={()=>setMain('spr')} className={main==='spr' ? 'test':'teste'}>spr</p>
            <p onClick={()=>setMain('geo')} className={main==='geo' ? 'test':'teste'}>Geo</p>
            <p onClick={()=>setMain('view')} className={main==='view' ? 'test':'teste'}>view</p>
            <p onClick={()=>setMain('map')} className={main==='map' ? 'test':'teste'}>map</p>
            <p onClick={()=>setMain('news')} className={main==='news' ? 'test':'teste'}>news</p>
            <p onClick={()=>setMain('serv')} className={main==='serv' ? 'test':'teste'}>serv</p>
            <p onClick={()=>setMain('labels')} className={main==='labels' ? 'test':'teste'}>labels</p>
          </OneColumn>
          <TwoColumns>
            {main === 'main' && 
              <form>
                <div>
                  <label>Сортировка по времени</label>
                  <input type='checkbox'/>
                </div>
                <div>
                  <label>Поиск сессий</label>
                  <input type='checkbox'/>
                  </div>
                <div>
                  <label>Обработка речи</label>
                  <input type='checkbox'/>
                </div>
                <div>
                  <label>Обработка изображений</label>
                  <input type='checkbox'/>
                </div>
                <div>
                  <label>Статистика абонента</label>
                  <input type='checkbox'/>
                </div>
                <div>
                  <label>Выбор кодировки сообщений</label>
                  <input type='checkbox'/>
                </div>
                <div>
                  <label>Экспорт сеансов в формате EZ</label>
                  <input type='checkbox'/>
                </div>
                <div>
                  <label>Поиск по ключевым словам</label>
                  <input type='checkbox'/>
                </div>
              </form>}
            {main === 'filter' && <SettingsFilter/>}
            {main === 'info' && <form>
                <div>
                  <label>Информация об абоненте</label>
                  <input type='checkbox'/>
                </div>
                <div>
                  <label>Информация об сеансе</label>
                  <input type='checkbox'/>
                </div>
                <div>
                  <label>Результаты текстового поиска</label>
                  <input type='checkbox'/>
                </div>
                <div>
                  <label>Информация об отчете</label>
                  <input type='checkbox'/>
                </div>
                <div>
                  <label>Информация из информационно-справочных БД</label>
                  <input type='checkbox'/>
                </div>
                  </form>}
            {main === 'geo' && <p>333</p>} 
            {main === 'view' && <p>444</p>}
            {main === 'map' && <p>555</p>}
            {main === 'news' && <p>666</p>}
            {main === 'serv' && <p>777</p>}
            {main === 'labels' && <Labels/ >}
            {main === 'spr' && 
            <form>
              <div>
                <label>Использовать информацию из локального справочника</label>
                <input type='checkbox'/>
              </div>
              <div>
                <label>Информация по коду провайдера об абоненте</label>
                <input type='checkbox'/>
              </div>
              <div>
                <label>Информация по коду провайдера о корреспонденте</label>
                <input type='checkbox'/>
              </div>
              <div>
                <label>Информация по IMEI об абоненте</label>
                <input type='checkbox'/>
              </div>
              <div>
                <label>Информация по IMEI о корреспонденте</label>
                <input type='checkbox'/>
              </div>
              <div>
                <label>Информация по IMSI об абоненте</label>
                <input type='checkbox'/>
              </div>
              <div>
                <label>Информация по IMSI о корреспонденте</label>
                <input type='checkbox'/>
              </div>
              <div>
                <label>Информация по IP об абоненте</label>
                <input type='checkbox'/>
              </div>
              <div>
                <label>Информация по IP о корреспонденте</label>
                <input type='checkbox'/>
              </div>
              <div>
                <label>Информация по местоположению об абоненте</label>
                <input type='checkbox'/>
              </div>
              <div>
                <label>Информация по местоположению о корреспонденте</label>
                <input type='checkbox'/>
              </div>
            </form>}
        </TwoColumns>
        <ThreeColumns>
          <button>Save</button>
          <button>Cancel</button>
          <button>Default</button>
        </ThreeColumns>
        </Aside>


        
      

    </Body>
    
  )
}

export default SettingsTable;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
`;

const Aside = styled.div`
  display: grid;
  grid-template-columns: repeat(2 1fr);
  grid-template-areas:
  "a b"
  "c c";
`;

const OneColumn = styled.div` 
  grid-area:a;
  height:70%;
  width:40%;
  p:hover{
    background-color:rgba(28, 138, 212, 0.1);
    cursor:pointer;
    border-radius: 5px;;
  } 
    .test{
      background-color:rgba(28, 138, 212, 0.1);
      border-radius: 5px;};
    .teste{
      background-color:white;
      border-radius: 5px;;}
      label{
        padding-left: 5px;
        padding-bottom:25px;  
      }
  `;

const TwoColumns =  styled.div`
  grid-area:b;
  height:70%;
`;

const ThreeColumns = styled.div`
  grid-area:c;
  height:25%;
`;

