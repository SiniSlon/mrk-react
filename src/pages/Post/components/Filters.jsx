import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";
import ClearIcon from '@mui/icons-material/Clear';
import * as func from '../../../utils/formFunctions';

const Filters = (props) => {
 
  return (
    <Body >

      <MiniFilter>
        <fieldset className='filter'>
          <legend className='filter__title'>По дате и времени</legend>
          <input type='date' value={props.filterTime} onChange={(e) => {
            props.setFilterTime(e.target.value)}}/>
        </fieldset>

        <fieldset className='filter'>
          <legend className='filter__title'>По параметрам</legend>
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

      <SecondFilter>
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
        </fieldset>

        <fieldset className='filter' style={{overflowY: 'scroll'}}>
          <legend className='filter__title'>По идентификаторам абонентов</legend>

          {(props.iridium || props.thuraya || props.gsm || props.ptt) && 
          <div vlaue={props.imeiValue} onChange={(e) => props.setImeiValue(e.target.value)} className="filter__string">IMEI<input type='text' placeholder="Значение"/></div>}

          {(props.iridium || props.thuraya || props.gsm) && 
          <div className="filter__string">IMSI <input type='text' placeholder="Значение"/></div>}

          {(props.iridium || props.thuraya || props.gsm) && 
          <div className="filter__string">ТФОП <input type='text' placeholder="Значение"/></div>}

          {(props.iridium || props.thuraya || props.gsm) && 
          <div className="filter__string">TMSI <input type='text' placeholder="Значение"/></div>}

          {(props.wifi) && 
          <div className="filter__string">SSID <input type='text' placeholder="Значение"/></div>}

          {(props.thuraya || props.gsm || props.wifi) && 
          <div className="filter__string">Ключ шифр. <input type='text' placeholder="Значение"/></div>}

          {(props.wifi) && 
          <div className="filter__string">BSSID <input type='text' placeholder="Значение"/></div>}

          {(props.gsm) && 
          <div className="filter__string">Оператор <input type='text' placeholder="Значение"/></div>}

          {(props.wifi) && 
          <div className="filter__string">Название аб. уст. <input type='text' placeholder="Значение"/></div>}

          {(props.gsm) && 
          <div className="filter__string">Модель уст. <input type='text' placeholder="Значение"/></div>}

          {(props.wifi) && 
          <div className="filter__string">DNS-имя аб. <input type='text' placeholder="Значение"/></div>}

          {(props.gsm || props.ukv || props.kv) && 
          <div className="filter__string">Номер аппар. част. <input type='text' placeholder="Значение"/></div>}

          {(props.wifi) && 
          <div className="filter__string">Email <input type='text' placeholder="Значение"/></div>}

          {/* {(props.thuraya) && 
          <div className="filter__string">GPS-dis<input type='text' placeholder="Значение"/></div>} */}

          {(props.wifi) && 
          <div className="filter__string">MAC-адрес <input type='text' placeholder="Значение"/></div>}

          {/* {(props.thuraya) && 
          <div className="filter__string">RAND <input type='text' placeholder="Значение"/></div>} */}

          {(props.wifi) && 
          <div className="filter__string">Порт <input type='text' placeholder="Значение"/></div>}

          {(props.thuraya || props.wifi) && 
          <div className="filter__string">IP-адрес<input type='text' placeholder="Значение"/></div>}

          {(props.ukv || props.kv) && 
          <div className="filter__string">Номер частот. канала <input type='text' placeholder="Значение"/></div>}

          {(props.ukv || props.kv) && 
          <div className="filter__string">Позывной <input type='text' placeholder="Значение"/></div>}

          {(props.ukv || props.kv) && 
          <div className="filter__string">Позывной от <input type='text' placeholder="Значение"/></div>}

          {(props.ukv || props.kv) && 
          <div className="filter__string">Позывной кому <input type='text' placeholder="Значение"/></div>}

          {(props.ukv || props.kv) && 
          <div className="filter__string">Приоритет  <input type='text' placeholder="Значение"/></div>}

          {(props.ukv || props.kv) && 
          <div className="filter__string">№ ЕРБД <input type='text' placeholder="Значение"/></div>}

          {(props.ptt) && 
          <div className="filter__string">Имя группы <input type='text' placeholder="Значение"/></div>}

          {(props.ptt) && 
          <div className="filter__string">ID группы <input type='text' placeholder="Значение"/></div>}

          {(props.ptt) && 
          <div className="filter__string">Имя АТ <input type='text' placeholder="Значение"/></div>}
        </fieldset>
      </SecondFilter>

      <FullFilter>
        Расширенный фильтр   

        {(props.iridium || props.thuraya) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Формат данных</legend>
            <FormatDatas>
              <div className='input-wrapper'>
                <input id='txt' type='checkbox' checked={props.formatData.includes('txt')} onChange={() => func.handleFormTxt(props)}/><label htmlFor='txt'>txt; ini; nfo</label>
              </div>
              <div className='input-wrapper'>
                <input id='htm' type='checkbox' checked={props.formatData.includes('htm')} onChange={() => func.handleFormHtm(props)}/><label htmlFor='htm'>htm,html,mht</label>
              </div>
              <div className='input-wrapper'>
                <input id='htmlx' type='checkbox' checked={props.formatData.includes('htmlx')} onChange={() => func.handleFormHtmlx(props)}/><label htmlFor='htmlx'>htmlx</label>
              </div>
              <div className='input-wrapper'>
                <input id='rtf' type='checkbox' checked={props.formatData.includes('rtf')} onChange={() => func.handleFormRft(props)}/><label htmlFor='rtf'>rtf</label>
              </div>
              <div className='input-wrapper'>
                <input id='odt' type='checkbox' checked={props.formatData.includes('odt')} onChange={() => func.handleFormOdt(props)}/><label htmlFor='odt'>odt</label>
              </div>
              <div className='input-wrapper'>
                <input id='xml' type='checkbox' checked={props.formatData.includes('xml')} onChange={() => func.handleFormXml(props)}/><label htmlFor='xml'>xml</label>
              </div>
              <div className='input-wrapper'>
                <input id='eml' type='checkbox' checked={props.formatData.includes('eml')} onChange={() => func.handleFormEml(props)}/><label htmlFor='eml'>eml</label>
              </div>
              <div className='input-wrapper'>
                <input id='gsmF' type='checkbox' checked={props.formatData.includes('gsm')} onChange={() => func.handleFormGsm(props)}/><label htmlFor='gsmF'>gsm</label>
              </div>
              <div className='input-wrapper'>
                <input id='ibs' type='checkbox' checked={props.formatData.includes('ibs')} onChange={() => func.handleFormIbs(props)}/><label htmlFor='ibs'>ibs</label>
              </div>
              <div className='input-wrapper'>
                <input id='alaw' type='checkbox' checked={props.formatData.includes('alaw')} onChange={() => func.handleFormAlaw(props)}/><label htmlFor='alaw'>alaw</label>
              </div>
              <div className='input-wrapper'>
                <input id='ulaw' type='checkbox' checked={props.formatData.includes('ulaw')} onChange={() => func.handleFormUlaw(props)}/><label htmlFor='ulaw'>ulaw</label>
              </div>
              <div className='input-wrapper'>
                <input id='sgn' type='checkbox' checked={props.formatData.includes('sgn')} onChange={() => func.handleFormSgn(props)}/><label htmlFor='sgn'>sgn</label>
              </div>
              <div className='input-wrapper'>
                <input id='cdma' type='checkbox' checked={props.formatData.includes('cdma')} onChange={() => func.handleFormCdma(props)}/><label htmlFor='cdma'>cdma</label>
              </div>
              <div className='input-wrapper'>
                <input id='edem' type='checkbox' checked={props.formatData.includes('edem')} onChange={() => func.handleFormEdem(props)}/><label htmlFor='edem'>edem</label>
              </div>
              <div className='input-wrapper'>
                <input id='dect' type='checkbox' checked={props.formatData.includes('dect')} onChange={() => func.handleFormDect(props)}/><label htmlFor='dect'>dect</label>
              </div>
              <div className='input-wrapper'>
                <input id='wav' type='checkbox' checked={props.formatData.includes('wav')} onChange={() => func.handleFormWav(props)}/><label htmlFor='wav'>wav</label>
              </div>
              <div className='input-wrapper'>
                <input id='qcelp8' type='checkbox' checked={props.formatData.includes('qcelp8')} onChange={() => func.handleFormQcelp8(props)}/><label htmlFor='qcelp8'>qcelp8</label>
              </div>
              <div className='input-wrapper'>
                <input id='pcm' type='checkbox' checked={props.formatData.includes('pcm')} onChange={() => func.handleFormPcm(props)}/><label htmlFor='pcm'>pcm</label>
              </div>
              <div className='input-wrapper'>
                <input id='mp3' type='checkbox' checked={props.formatData.includes('mp3')} onChange={() => func.handleFormMp3(props)}/><label htmlFor='mp3'>mp3</label>
              </div>
              <div className='input-wrapper'>
                <input id='ambe4k8' type='checkbox' checked={props.formatData.includes('ambe4k8')} onChange={() => func.handleFormAmbe4k8(props)}/><label htmlFor='ambe4k8'>ambe4k8</label>
              </div>
              <div className='input-wrapper'>
                <input id='ambe4kplus' type='checkbox' checked={props.formatData.includes('ambe4kplus')} onChange={() => func.handleFormAmbe4kplus(props)}/><label htmlFor='ambe4kplus'>ambe4kplus</label>
              </div>
              <div className='input-wrapper'>
                <input id='thurayaF' type='checkbox' checked={props.formatData.includes('thuraya')} onChange={() => func.handleFormThuraya(props)}/><label htmlFor='thurayaF'>thuraya</label>
              </div>
              <div className='input-wrapper'>
                <input id='g722' type='checkbox' checked={props.formatData.includes('g722')} onChange={() => func.handleFormG722(props)}/><label htmlFor='g722'>g722</label>
              </div>
              <div className='input-wrapper'>
                <input id='g723' type='checkbox' checked={props.formatData.includes('g723')} onChange={() => func.handleFormG723(props)}/><label htmlFor='g723'>g723</label>
              </div>
              <div className='input-wrapper'>
                <input id='g729' type='checkbox' checked={props.formatData.includes('g729')} onChange={() => func.handleFormG729(props)}/><label htmlFor='g729'>g729</label>
              </div>
              <div className='input-wrapper'>
                <input id='ogg' type='checkbox' checked={props.formatData.includes('ogg')} onChange={() => func.handleFormOgg(props)}/><label htmlFor='ogg'>ogg</label>
              </div>
              <div className='input-wrapper'>
                <input id='jpeg' type='checkbox' checked={props.formatData.includes('jpeg')} onChange={() => func.handleFormJpeg(props)}/><label htmlFor='jpeg'>jpeg;jpg</label>
              </div>
              <div className='input-wrapper'>
                <input id='png' type='checkbox' checked={props.formatData.includes('png')} onChange={() => func.handleFormPng(props)}/><label htmlFor='png'>png</label>
              </div>
              <div className='input-wrapper'>
                <input id='gif' type='checkbox' checked={props.formatData.includes('gif')} onChange={() => func.handleFormGif(props)}/><label htmlFor='gif'>gif</label>
              </div>
              <div className='input-wrapper'>
                <input id='bmp' type='checkbox' checked={props.formatData.includes('bmp')} onChange={() => func.handleFormBmp(props)}/><label htmlFor='bmp'>bmp</label>
              </div>
              <div className='input-wrapper'>
                <input id='tiff' type='checkbox' checked={props.formatData.includes('tiff')} onChange={() => func.handleFormTiff(props)}/><label htmlFor='tiff'>tiff</label>
              </div>
              <div className='input-wrapper'>
                <input id='fax' type='checkbox' checked={props.formatData.includes('fax')} onChange={() => func.handleFormFax(props)}/><label htmlFor='fax'>fax</label>
              </div>
              <div className='input-wrapper'>
                <input id='doc' type='checkbox' checked={props.formatData.includes('doc')} onChange={() => func.handleFormDoc(props)}/><label htmlFor='doc'>doc</label>
              </div>
              <div className='input-wrapper'>
                <input id='docx' type='checkbox' checked={props.formatData.includes('docx')} onChange={() => func.handleFormDocx(props)}/><label htmlFor='docx'>docx</label>
              </div>
              <div className='input-wrapper'>
                <input id='xls' type='checkbox' checked={props.formatData.includes('xls')} onChange={() => func.handleFormXls(props)}/><label htmlFor='xls'>xls</label>
              </div>
              <div className='input-wrapper'>
                <input id='xlsx' type='checkbox' checked={props.formatData.includes('xlsx')} onChange={() => func.handleFormXlsx(props)}/><label htmlFor='xlsx'>xlsx</label>
              </div>
              <div className='input-wrapper'>
                <input id='ps' type='checkbox' checked={props.formatData.includes('ps')} onChange={() => func.handleFormPs(props)}/><label htmlFor='ps'>ps</label>
              </div>
              <div className='input-wrapper'>
                <input id='ppt' type='checkbox' checked={props.formatData.includes('ppt')} onChange={() => func.handleFormPpt(props)}/><label htmlFor='ppt'>ppt</label>
              </div>
              <div className='input-wrapper'>
                <input id='pptx' type='checkbox' checked={props.formatData.includes('pptx')} onChange={() => func.handleFormPptx(props)}/><label htmlFor='pptx'>pptx</label>
              </div>
              <div className='input-wrapper'>
                <input id='pdf' type='checkbox' checked={props.formatData.includes('pdf')} onChange={() => func.handleFormPdf(props)}/><label htmlFor='pdf'>pdf</label>
              </div>
              <div className='input-wrapper'>
                <input id='7z' type='checkbox' checked={props.formatData.includes('7z')} onChange={() => func.handleForm7z(props)}/><label htmlFor='7z'>7z</label>
              </div>
              <div className='input-wrapper'>
                <input id='gzip' type='checkbox' checked={props.formatData.includes('gzip')} onChange={() => func.handleFormGzip(props)}/><label htmlFor='gzip'>gzip</label>
              </div>
              <div className='input-wrapper'>
                <input id='tar' type='checkbox' checked={props.formatData.includes('tar')} onChange={() => func.handleFormTar(props)}/><label htmlFor='tar'>tar</label>
              </div>
              <div className='input-wrapper'>
                <input id='rar' type='checkbox' checked={props.formatData.includes('rar')} onChange={() => func.handleFormRar(props)}/><label htmlFor='rar'>rar</label>
              </div>
              <div className='input-wrapper'>
                <input id='zip' type='checkbox' checked={props.formatData.includes('zip')} onChange={() => func.handleFormZip(props)}/><label htmlFor='zip'>zip</label>
              </div>
              <div className='input-wrapper'>
                <input id='bin' type='checkbox' checked={props.formatData.includes('bin')} onChange={() => func.handleFormBin(props)}/><label htmlFor='bin'>bin</label>
              </div>
              <div className='input-wrapper'>
                <input id='swf' type='checkbox' checked={props.formatData.includes('swf')} onChange={() => func.handleFormSwf(props)}/><label htmlFor='swf'>swf</label>
              </div>
              <div className='input-wrapper'>
                <input id='exe' type='checkbox' checked={props.formatData.includes('exe')} onChange={() => func.handleFormExe(props)}/><label htmlFor='exe'>exe</label>
              </div>
              <div className='input-wrapper'>
                <input id='java' type='checkbox' checked={props.formatData.includes('java')} onChange={() => func.handleFormJava(props)}/><label htmlFor='java'>java</label>
              </div>
              <div className='input-wrapper'>
                <input id='bz2' type='checkbox' checked={props.formatData.includes('bz2')} onChange={() => func.handleFormBz2(props)}/><label htmlFor='bz2'>bz2</label>
              </div>
              <div className='input-wrapper'>
                <input id='flv' type='checkbox' checked={props.formatData.includes('flv')} onChange={() => func.handleFormFlv(props)}/><label htmlFor='flv'>flv</label>
              </div>
              <div className='input-wrapper'>
                <input id='mpeg' type='checkbox' checked={props.formatData.includes('mpeg')} onChange={() => func.handleFormMpeg(props)}/><label htmlFor='mpeg'>mpeg</label>
              </div>
              <div className='input-wrapper'>
                <input id='mpg' type='checkbox' checked={props.formatData.includes('mpg')} onChange={() => func.handleFormMpg(props)}/><label htmlFor='mpg'>mpg</label>
              </div>
            </FormatDatas>

            <button className='clear-btn' onClick={() => func.handleClearFormat(props)}>Очистить</button>
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
  max-height: 754px;

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
    margin: 20px auto;
    font-size: 18px;
    font-family: ${mainFontFamily};
    border: none;
    border-radius: 5px;
    background-color: #1d1d87;
    color: white;
    cursor: pointer;
  }
`;

const SecondFilter = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  /* overflow-y: scroll; */
  /* width: 290px; */

  .filter__string {
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      outline: none;
      width: 160px;
    }
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

const FormatDatas = styled.div`
  overflow-y: scroll;
  height: 150px;
`;
