import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";
import PaginationBlock from "../../../components/Pagination";
import Loader from "../../../components/Loader";
import { useState } from "react";
import Labels from './Labels'

const SettingsTable = (props) => {
  const [main,setMain]=useState('');
  

  // console.log(props.postList)
  return (
    <Body>
        <Aside>
          <OneColumn>
            <p onClick={()=>setMain('main')}>Общие настройки</p>
            <p onClick={()=>setMain('filter')}>Фильтр</p>
            <p onClick={()=>setMain('info')}>Info</p>
            <p onClick={()=>setMain('spr')}>spr</p>
            <p onClick={()=>setMain('geo')}>Geo</p>
            <p onClick={()=>setMain('view')}>view</p>
            <p onClick={()=>setMain('map')}>map</p>
            <p onClick={()=>setMain('news')}>news</p>
            <p onClick={()=>setMain('serv')}>serv</p>
            <p onClick={()=>setMain('labels')}>labels</p>
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
            {main === 'filter' && 
              <form>
                <fieldset>
                  <legend>Системы связи</legend>
                    
                    <div>
                      <label>Irridium</label>
                      <input type='checkbox'/>
                    </div>
                    
                    <div>
                      <label>Thuraya</label>
                      <input type='checkbox'/>
                    </div>
                   
                    <div>
                      <label>PTT</label>
                      <input type='checkbox'/>
                    </div>
                    
                    <div>
                      <label>GSM</label>
                      <input type='checkbox'/>
                    </div>
                    
                    <div>
                      <label>KB</label>
                      <input type='checkbox'/>
                    </div>
                   
                    <div>
                      <label>YKB</label>
                      <input type='checkbox'/>
                    </div>
                   
                    <div>
                      <label>WIFI</label>
                      <input type='checkbox'/>
                    </div>

                </fieldset>
                <fieldset>
                  <legend>Система связи поумолчанию</legend>
                    <div>
                      <label>Irridium</label>
                      <input type='checkbox'/>
                    </div>
                    <div>
                      <label>Thuraya</label>
                      <input type='checkbox'/>
                    </div>
                    <div>
                      <label>PTT</label>
                      <input type='checkbox'/>
                    </div>
                    <div>
                      <label>GSM</label>
                      <input type='checkbox'/>
                    </div>
                    <div>
                      <label>KB</label>
                      <input type='checkbox'/>
                    </div>
                    <div>
                      <label>YKB</label>
                      <input type='checkbox'/>
                    </div>
                    <div>
                      <label>WIFI</label>
                      <input type='checkbox'/>
                    </div>
                </fieldset>
                <div>
                  <label>форматы данных</label>
                  <button></button>
                </div>
                <div>
                  <label>форматы текстового поиска</label>
                  <button></button>
                </div>
                <div>
                  <label>речевые форматы</label>
                  <button></button>
                </div>
                <div>
                  <label>список языков речи</label>
                  <button></button>
                </div>
                <div>
                  <label>приоритет обнаружения</label>
                  <button></button>
                </div>
                <div>
                  <label>пост регистрации</label>
                  <button></button>
                </div>
                <div>
                  <label>Стандарты СС</label>
                  <button></button>
                </div>
                <div>
                  <label>Тип шифрования трафика</label>
                  <button></button>
                </div>
                <div>
                  <label>Типы ГРЗ</label>
                  <button></button>
                </div>
              </form>}
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
            {main === 'labels' && <Labels/>}
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
          <button></button>
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
  `;

const TwoColumns =  styled.div`
  grid-area:b;
`;

const ThreeColumns = styled.div`
  grid-area:c;
`;

