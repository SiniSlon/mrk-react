import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";
import ClearIcon from '@mui/icons-material/Clear';

const Filters = (props) => {
  const handleClearFormat = () => {
    props.setFormatData([]);
  }

  const handleFormTxt = () => {
    if (props.formatData.includes('txt')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('txt');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'txt'])
    }
  }

  const handleFormHtm = () => {
    if (props.formatData.includes('htm')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('htm');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'htm'])
    }
  }

  const handleFormHtmlx = () => {
    if (props.formatData.includes('htmlx')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('htmlx');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'htmlx'])
    }
  }

  const handleFormRft = () => {
    if (props.formatData.includes('rtf')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('rtf');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'rtf'])
    }
  }

  const handleFormOdt = () => {
    if (props.formatData.includes('odt')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('odt');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'odt'])
    }
  }


  return (
    <Body >

      <MiniFilter>
        <fieldset className='filter'>
          <legend className='filter__title'>По дате и времени</legend>
          <input type='date' value={props.filterTime} onChange={(e) => {
            props.setFilterTime(e.target.value)}}/>
        </fieldset>

        <fieldset className='filter'>
          <legend className='filter__title'>По идентификаторам абонентов</legend>
          <select className='select' value={props.identif} onChange={(e) => {
            props.setIdentif(e.target.value)}}>
            <option value='imei'>IMEI</option>
            <option value='imsi'>IMSI</option>
            <option value='tfop'>ТФОП</option>
            <option value='tmsi'>TMSI</option>
            <option value='ip'>IP-адрес</option>
            <option value='erbd'>№ЕРБД</option>
            <option value='pid'>PID</option>
          </select>
          <input placeholder='Значение' value={props.identifValue} onChange={(e) => {
            props.setIdentifValue(e.target.value)}}/>
        </fieldset>

        <fieldset className='filter'>
          <legend className='filter__title'>По системам связи</legend>
          <div className='input-wrapper'>
            <input id='irridium' type='checkbox' checked={props.iridium} 
            onChange={() => props.setIridium(s => !s)}/><label htmlFor='irridium'>Irridium</label>
          </div>

          <div className='input-wrapper'>
            <input id='thuraya' type='checkbox' checked={props.thuraya} 
            onChange={() => props.setThuraya(s => !s)}/><label htmlFor='thuraya'>Thuraya</label>
          </div>

          <div className='input-wrapper'>
            <input id='ptt' type='checkbox' checked={props.ptt} 
            onChange={() => props.setPtt(s => !s)}/><label htmlFor='ptt'>PTT</label>
          </div>

          <div className='input-wrapper'>
            <input id='gsm' type='checkbox' checked={props.gsm} 
            onChange={() => props.setGsm(s => !s)}/><label htmlFor='gsm'>GSM</label>
          </div>

          <div className='input-wrapper'>
            <input id='kv' type='checkbox' checked={props.kv} 
            onChange={() => props.setKv(s => !s)}/><label htmlFor='kv'>КВ</label>
          </div>

          <div className='input-wrapper'>
            <input id='ukv' type='checkbox' checked={props.ukv} 
            onChange={() => props.setUkv(s => !s)}/><label htmlFor='ukv'>УКВ</label>
          </div>

          <div className='input-wrapper'>
            <input id='wifi' type='checkbox' checked={props.wifi} 
            onChange={() => props.setWifi(s => !s)}/><label htmlFor='wifi'>Wi-Fi</label>
          </div>

          <div className='input-wrapper'>
            <input id='duration' type='checkbox' checked={props.duration} 
            onChange={() => props.setDuration(s => !s)}/><label htmlFor='duration'>Продолжительность</label>
          </div>

          <div className='input-wrapper'>
            <input id='looked' type='checkbox' checked={props.looked} 
            onChange={() => props.setLooked(s => !s)}/><label htmlFor='looked'>Просмотрен</label>
          </div>

          <div className='input-wrapper'>
            <input id='abonent' type='checkbox' checked={props.cardAbonent} 
            onChange={() => props.setCardAbonent(s => !s)}/><label htmlFor='abonent'>Карточка абонента</label>
          </div>

          <div className='input-wrapper'>
            <input id='kodzagruzki' type='checkbox' checked={props.codeDownload} 
            onChange={() => props.setCodeDownload(s => !s)}/><label htmlFor='kodzagruzki'>Код загрузки</label>
          </div>

          <div className='input-wrapper'>
            <input placeholder='Комментарии' value={props.comment} onChange={(e) => props.setComment(e.target.value)}/>
          </div>

          <div className='input-wrapper'>
            <input placeholder='Пост регистрации' value={props.postRegistation} onChange={(e) => props.setPostRegistration(e.target.value)}/>
          </div>

        </fieldset>

        <fieldset className='filter'>
          <legend className='filter__title'>По наличию трафика</legend>
          <div className='input-wrapper'>
            <input id='trafic' type='checkbox' checked={props.traffic} 
            onChange={() => props.setTraffic(s => !s)}/><label htmlFor='trafic'>Наличие трафика</label>
          </div>
        </fieldset>

        <fieldset className='filter'>
          <legend className='filter__title'>По геоданным</legend>
          <div className='input-wrapper'>
            <input id='prinadlezhnost' type='checkbox' checked={props.byGeodata} 
            onChange={() => props.setByGeodata(s => !s)}/><label htmlFor='prinadlezhnost'>Принадлежность</label>
          </div>
        </fieldset>

        <fieldset className='filter'>
          <legend className='filter__title'>По меткам</legend>
          <div className='input-wrapper'>
            <input placeholder='Метка' value={props.label} onChange={(e) => props.setLabel(e.target.value)}/>
          </div>
        </fieldset>

        <button className='submit-btn' onClick={() => {
          props.findByFilter();
          props.setFilter(s => !s)}}
        >Применить</button>
      </MiniFilter>
      
      {(props.iridium || props.thuraya || props.ptt || props.gsm || props.kv || props.ukv || props.wifi) &&
      <FullFilter>
        Расширенный фильтр   

        {(props.iridium || props.thuraya) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Формат данных</legend>
            <div className='input-wrapper'>
              <input id='txt' type='checkbox' checked={props.formatData.includes('txt')} onChange={handleFormTxt}/><label htmlFor='txt'>txt; ini; nfo</label>
            </div>

            <div className='input-wrapper'>
              <input id='htm' type='checkbox' checked={props.formatData.includes('htm')} onChange={handleFormHtm}/><label htmlFor='htm'>htm,html,mht</label>
            </div>

            <div className='input-wrapper'>
              <input id='htmlx' type='checkbox' checked={props.formatData.includes('htmlx')} onChange={handleFormHtmlx}/><label htmlFor='htmlx'>htmlx</label>
            </div>

            <div className='input-wrapper'>
              <input id='rtf' type='checkbox' checked={props.formatData.includes('rtf')} onChange={handleFormRft}/><label htmlFor='rtf'>rtf</label>
            </div>

            <div className='input-wrapper'>
              <input id='odt' type='checkbox' checked={props.formatData.includes('odt')} onChange={handleFormOdt}/><label htmlFor='odt'>odt</label>
            </div>

            <button className='clear-btn' onClick={handleClearFormat}>Очистить</button>
          </fieldset>
        }

        {(props.ptt|| props.thuraya) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Координаты</legend>
            Широта
            <div className='input-wrapper'>
              <input placeholder='От' value={props.coordShFrom} onChange={(e) =>  props.setCoordShFrom(e.target.value)}/>
              {props.coordShFrom && <ClearIcon onClick={() =>  props.setCoordShFrom('')} style={{cursor: 'pointer'}}/>}
            </div>

            <div className='input-wrapper'>
              <input placeholder='До' value={props.coordShTo} onChange={(e) =>  props.setCoordShTo(e.target.value)}/>
              {props.coordShTo && <ClearIcon onClick={() =>  props.setCoordShTo('')} style={{cursor: 'pointer'}}/>}
            </div>

            Долгота
            <div className='input-wrapper'>
              <input placeholder='От' value={props.coordDolFrom} onChange={(e) =>  props.setCoordDolFrom(e.target.value)}/>
              {props.coordDolFrom && <ClearIcon onClick={() =>  props.setCoordDolFrom('')} style={{cursor: 'pointer'}}/>}
            </div>

            <div className='input-wrapper'>
              <input placeholder='До' value={props.coordDolTo} onChange={(e) =>  props.setCoordDolTo(e.target.value)}/>
              {props.coordDolTo && <ClearIcon onClick={() =>  props.setCoordDolTo('')} style={{cursor: 'pointer'}}/>}
            </div>

            <button 
              className='clear-btn' 
              onClick={() => {
                props.setCoordShFrom('');
                props.setCoordShTo('');
                props.setCoordDolFrom('');
                props.setCoordDolTo('');
              }}
            >Очистить</button>
          </fieldset>
        }

        {(props.ptt|| props.thuraya) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Координаты комплекса</legend>
            Широта
            <div className='input-wrapper'>
              <input placeholder='От' value={props.complexShFrom} onChange={(e) =>  props.setComplexShFrom(e.target.value)}/>
              {props.complexShFrom && <ClearIcon onClick={() =>  props.setComplexShFrom('')} style={{cursor: 'pointer'}}/>}
            </div>

            <div className='input-wrapper'>
              <input placeholder='До' value={props.complexShTo} onChange={(e) =>  props.setComplexShTo(e.target.value)}/>
              {props.complexShTo && <ClearIcon onClick={() =>  props.setComplexShTo('')} style={{cursor: 'pointer'}}/>}
            </div>

            Долгота
            <div className='input-wrapper'>
              <input placeholder='От' value={props.complexDolFrom} onChange={(e) =>  props.setComplexDolFrom(e.target.value)}/>
              {props.complexDolFrom && <ClearIcon onClick={() =>  props.setComplexDolFrom('')} style={{cursor: 'pointer'}}/>}
            </div>

            <div className='input-wrapper'>
              <input placeholder='До' value={props.complexDolTo} onChange={(e) =>  props.setComplexDolTo(e.target.value)}/>
              {props.complexDolTo && <ClearIcon onClick={() =>  props.setComplexDolTo('')} style={{cursor: 'pointer'}}/>}
            </div>

            <button 
              className='clear-btn' 
              onClick={() => {
                props.setComplexShFrom('');
                props.setComplexShTo('');
                props.setComplexDolFrom('');
                props.setComplexDolTo('');
              }}
            >Очистить</button>
          </fieldset>
        }

        {props.gsm && 
          <fieldset className='filter'>
            <legend className='filter__title'>№ аппаратного канала</legend>
            <div className='input-wrapper'>
              <input placeholder='№ аппаратного канала' value={props.numberChanel} onChange={(e) =>  props.setNumberChanel(e.target.value)}/>
              {props.numberChanel && <ClearIcon onClick={() =>  props.setNumberChanel('')} style={{cursor: 'pointer'}}/>}
            </div>

            <button className='clear-btn' onClick={() =>  props.setNumberChanel('')}>Очистить</button>
          </fieldset>
        }

        {(props.kv || props.ukv || props.wifi) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Несущая полоса частоты</legend>
            <div className='input-wrapper'>
              <input placeholder='From' value={props.mainPolosaFrom} onChange={(e) =>  props.setMainPolosaFrom(e.target.value)}/>
              <select value={props.mainPolosaFromHz} onChange={(e) =>  props.setMainPolosaFromHz(e.target.value)} className='hz-label'>
                <option value='hz'>Hz</option>
                <option value='khz'>kHz</option>
                <option value='mhz'>MHz</option>
              </select>
            </div>
            <div className='input-wrapper'>
              <input placeholder='To' value={props.mainPolosaTo} onChange={(e) =>  props.setMainPolosaTo(e.target.value)}/>
              <select value={props.mainPolosaToHz} onChange={(e) =>  props.setMainPolosaToHz(e.target.value)} className='hz-label'>
                <option value='hz'>Hz</option>
                <option value='khz'>kHz</option>
                <option value='mhz'>MHz</option>
              </select>
            </div>

            <button 
              className='clear-btn' 
              onClick={() => {
                props.setMainPolosaFrom('');
                props.setMainPolosaFromHz('hz');
                props.setMainPolosaTo('');
                props.setMainPolosaToHz('hz');
              }}
            >Очистить</button>
          </fieldset>
        }

        {(props.kv || props.ukv) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Полоса частоты</legend>
            <div className='input-wrapper'>
              <input placeholder='From' value={props.polosaFrom} onChange={(e) =>  props.setPolosaFrom(e.target.value)}/>
              <select value={props.polosaFromHz} onChange={(e) =>  props.setPolosaFromHz(e.target.value)} className='hz-label'>
                <option value='hz'>Hz</option>
                <option value='khz'>kHz</option>
                <option value='mhz'>MHz</option>
              </select>          
            </div>
            <div className='input-wrapper'>
              <input placeholder='To' value={props.polosaTo} onChange={(e) =>  props.setPolosaTo(e.target.value)}/>
              <select value={props.polosaToHz} onChange={(e) =>  props.setPolosaToHz(e.target.value)} className='hz-label'>
                <option value='hz'>Hz</option>
                <option value='khz'>kHz</option>
                <option value='mhz'>MHz</option>
              </select>          
            </div>

            <button 
              className='clear-btn'
              onClick={() => {
                props.setPolosaFrom('');
                props.setPolosaFromHz('hz');
                props.setPolosaTo('');
                props.setPolosaToHz('hz');
              }}
             >Очистить</button>
          </fieldset>
        }

        {(props.kv || props.ukv) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Радиосеть</legend>
            <div className='input-wrapper'>
              <input placeholder='Радиосеть' value={props.radioset} onChange={(e) =>  props.setRadioset(e.target.value)}/>
              {/* {props.radioset && <ClearIcon onClick={() =>  props.setRadioset('')} style={{cursor: 'pointer'}}/>} */}
            </div>

            <button className='clear-btn' onClick={() => props.setRadioset('')}>Очистить</button>
          </fieldset>
        }

        {(props.kv || props.ukv) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Тип сигнала</legend>
            <div className='input-wrapper'>
              <input placeholder='Тип сигнала' value={props.typeSignal} onChange={(e) =>  props.setTypeSignal(e.target.value)}/>
              {props.typeSignal && <ClearIcon onClick={() =>  props.setTypeSignal('')} style={{cursor: 'pointer'}}/>}
            </div>

            {/* <button className='clear-btn' onClick={() => props.setTypeSignal('')}>Очистить</button> */}
          </fieldset>
        }

        {(props.kv || props.ukv) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Подтип сигнала</legend>
            <div className='input-wrapper'>
              <input placeholder='Подтип сигнала' value={props.subtypeSignal} onChange={(e) =>  props.setSubtypeSignal(e.target.value)}/>
              {props.subtypeSignal && <ClearIcon onClick={() =>  props.setSubtypeSignal('')} style={{cursor: 'pointer'}}/>}
            </div>

            <button className='clear-btn' onClick={() => props.setSubtypeSignal('')}>Очистить</button>
          </fieldset>
        }
      </FullFilter>
      }
    </Body>
  )
}          

export default Filters;

const Body = styled.div`
  position: absolute;
  display: flex;
  background-color: #e4e4e4;
  top: 77px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  max-height: 814px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    overflow-y: scroll;
    display: block;
  }

  input {
    margin: 5px 5px 5px 0;
  }

  label {
    display: flex;
    align-items: center;
  }

  .filter {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    .select {
      margin-bottom: 10px;
      outline: none;
    }

    .input-wrapper {
      display: flex;
      align-items: center;

      input {
        outline: none;
      }
    }
  }
`;

const MiniFilter = styled.div`
  display: flex;
  flex-direction: column;


  .submit-btn {
    display: flex;
    width: 140px;
    padding: 5px;
    justify-content: center;
    margin: 10px auto;
    font-size: 18px;
    font-family: ${mainFontFamily};
    border: none;
    border-radius: 5px;
    background-color: #1d1d87;
    color: white;
    cursor: pointer;
  }
`;

const FullFilter = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  overflow-y: scroll;
  width: 290px;

  @media screen and (max-width: 900px) {
    overflow-y: auto;
  }

  .clear-btn {
    width: 100px;
    margin: 0 auto;
    cursor: pointer;
    margin-top: 5px;
  }

  .hz-label {
    height: 21px; 
    outline: none;
  }
`;
