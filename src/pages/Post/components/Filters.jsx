import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";
import { useAppSelector } from "../../../store/hooks";
import * as func from '../../../utils/formFunctions';
import ClearIcon from '@mui/icons-material/Clear';
import CheckboxInput from "./UI/CheckboxInput";
import Input from "./UI/Input";
import FormatInput from "./UI/FormatInput";
import InputCross from "./UI/InputCross";
import IdInput from "./UI/IdInput";

const Filters = (props) => {
  const set = useAppSelector(state => state.settingsSlice.filter)

  if (!props.filter) return null;
  
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

          <CheckboxInput label='Продолжительность' id='duration' checked={props.duration} onChange={props.setDuration}/>
          <CheckboxInput label='Просмотрен' id='looked' checked={props.looked} onChange={props.setLooked}/>
          <CheckboxInput label='Карточка абонента' id='abonent' checked={props.cardAbonent} onChange={props.setCardAbonent}/>
          <CheckboxInput label='Код загрузки' id='kodzagruzki' checked={props.codeDownload} onChange={props.setCodeDownload}/>

          <Input placeholder='Комментарии' value={props.comment} onChange={props.setComment}/>
          <Input placeholder='Пост регистрации' value={props.postRegistation} onChange={props.setPostRegistration}/>
        </fieldset>

        <fieldset className='filter'>
          <legend className='filter__title'>По наличию трафика</legend>
          <CheckboxInput label='Наличие трафика' id='trafic' checked={props.traffic} onChange={props.setTraffic}/>
        </fieldset>

        <fieldset className='filter'>
          <legend className='filter__title'>По геоданным</legend>
          <CheckboxInput label='Принадлежность' id='prinadlezhnost' checked={props.byGeodata} onChange={props.setByGeodata}/>
        </fieldset>

        <fieldset className='filter'>
          <legend className='filter__title'>По меткам</legend>
          <Input placeholder='Метка' value={props.label} onChange={props.setLabel}/>
        </fieldset>

        <button className='submit-btn' onClick={() => {props.findByFilter(); props.setFilter(s => !s)}}>Применить</button>
      </MiniFilter>

      <SecondFilter>
        <fieldset className='filter'>
          <legend className='filter__title'>По системам связи</legend>
          {set.irridium && <CheckboxInput label='Irridium' id='irridium' checked={props.irridium} onChange={props.setIrridium}/>}
          {set.thuraya && <CheckboxInput label='Thuraya' id='thuraya' checked={props.thuraya} onChange={props.setThuraya}/>}
          {set.ptt && <CheckboxInput label='PTT' id='ptt' checked={props.ptt} onChange={props.setPtt}/>}
          {set.gsm && <CheckboxInput label='GSM' id='gsm' checked={props.gsm} onChange={props.setGsm}/>}
          {set.kv && <CheckboxInput label='КВ' id='kv' checked={props.kv} onChange={props.setKv}/>}
          {set.ukv && <CheckboxInput label='УКВ' id='ukv' checked={props.ukv} onChange={props.setUkv}/>}
          {set.wifi && <CheckboxInput label='Wi-Fi' id='wifi' checked={props.wifi} onChange={props.setWifi}/>}
        </fieldset>

        <fieldset className='filter' style={{overflowY: 'scroll'}}>
          <legend className='filter__title'>По идентификаторам абонентов</legend>

          {(props.irridium || props.th || props.gsm || props.ptt) && 
          <IdInput title='IMEI' value={props.idImei} onChange={props.setIdImei}/>}

          {(props.irridium || props.thuraya || props.gsm) && 
          <IdInput title='IMSI' value={props.idImsi} onChange={props.setIdImsi}/>}

          {(props.irridium || props.thuraya  || props.gsm) && 
          <IdInput title='ТФОП' value={props.idTfop} onChange={props.setIdTfop}/>}

          {(props.irridium  || props.thuraya || props.gsm) && 
          <IdInput title='TMSI' value={props.idTmsi} onChange={props.setIdTmsi}/>}

          {(props.wifi) && 
          <IdInput title='SSID' value={props.idSsid} onChange={props.setIdSsid}/>}

          {(props.thuraya|| props.gsm || props.wifi) && 
          <IdInput title='Ключ шифр.' value={props.idKeyShifr} onChange={props.setIdKeyShifr}/>}

          {(props.wifi) && 
          <IdInput title='BSSID' value={props.idBssid} onChange={props.setIdBssid}/>}

          {(props.gsm) && 
          <IdInput title='Оператор' value={props.idOperator} onChange={props.setIdOperator}/>}

          {(props.wifi) && 
          <IdInput title='Название аб. уст.' value={props.idNameDevice} onChange={props.setIdNameDevice}/>}

          {(props.gsm) && 
          <IdInput title='Модель уст.' value={props.idModelDevice} onChange={props.setIdModelDevice}/>}

          {(props.wifi) && 
          <IdInput title='DNS-имя аб.' value={props.idDnsNmae} onChange={props.setIdDnsNmae}/>}

          {(props.gsm || props.ykv || props.kv) && 
          <IdInput title='Номер аппар. част.' value={props.idNumApp} onChange={props.setIdNumApp}/>}

          {(props.wifi) && 
          <IdInput title='Email' value={props.idEmail} onChange={props.setIdEmail}/>}

          {/* {(props.thuraya) && 
          <IdInput title='GPS-dis' value={props.idTmsi} onChange={props.setIdTmsi}/>
          } */}

          {(props.wifi) && 
          <IdInput title='MAC-адрес' value={props.idMacAddr} onChange={props.setIdMacAddr}/>
          }

          {/* {(props.thuraya) && 
            <IdInput title='RAND' value={props.idTmsi} onChange={props.setIdTmsi}/>
          } */}

          {(props.wifi) && 
          <IdInput title='Порт' value={props.idPort} onChange={props.setIdPort}/>}

          {(props.thuraya || props.wifi) && 
          <IdInput title='IP-адрес' value={props.idIpAdderss} onChange={props.setIdIpAdderss}/>}

          {(props.ukv || props.kv) && 
          <IdInput title='Номер частот. канала' value={props.idNumChan} onChange={props.setIdNumChan}/>}

          {(props.ukv|| props.kv) && 
          <IdInput title='Позывной' value={props.idName} onChange={props.setIdName}/>}

          {(props.ukv || props.kv) && 
          <IdInput title='Позывной от' value={props.idNameForm} onChange={props.setIdNameForm}/>}

          {(props.ukv || props.kv) && 
          <IdInput title='Позывной кому' value={props.idNameTo} onChange={props.setIdNameTo}/>}

          {(props.ukv|| props.kv) && 
          <IdInput title='Приоритет' value={props.idPriority} onChange={props.setIdPriority}/>}

          {(props.ukv || props.kv) && 
          <IdInput title='№ ЕРБД' value={props.idErbd} onChange={props.setIdErbd}/>}

          {(props.ptt) && 
          <IdInput title='Имя группы' value={props.idNameGroup} onChange={props.setIdNameGroup}/>}

          {(props.ptt) && 
          <IdInput title='ID группы' value={props.idIdGroup} onChange={props.setIdIdGroup}/>}

          {(props.ptt) && 
          <IdInput title='Имя АТ' value={props.idNameAt} onChange={props.setIdNameAt}/>}

        </fieldset>
      </SecondFilter>

      <FullFilter>
        Расширенный фильтр   

        {(props.irridium || props.thuraya ) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Формат данных</legend>
            <FormatDatas>
              <FormatInput label='txt; ini; nfo' id='txt' checked={props.formatData.includes('txt')} onChange={func.handleFormTxt} props={props}/>
              <FormatInput label='htm,html,mht' id='htm' checked={props.formatData.includes('htm')} onChange={func.handleFormHtm} props={props}/>
              <FormatInput label='htmlx' id='htmlx' checked={props.formatData.includes('htmlx')} onChange={func.handleFormHtmlx} props={props}/>
              <FormatInput label='rtf' id='rtf' checked={props.formatData.includes('rtf')} onChange={func.handleFormRft} props={props}/>
              <FormatInput label='odt' id='odt' checked={props.formatData.includes('odt')} onChange={func.handleFormOdt} props={props}/>
              <FormatInput label='xml' id='xml' checked={props.formatData.includes('xml')} onChange={func.handleFormXml} props={props}/>
              <FormatInput label='eml' id='eml' checked={props.formatData.includes('eml')} onChange={func.handleFormEml} props={props}/>
              <FormatInput label='gsm' id='gsmF' checked={props.formatData.includes('gsm')} onChange={func.handleFormGsm} props={props}/>
              <FormatInput label='ibs' id='ibs' checked={props.formatData.includes('ibs')} onChange={func.handleFormIbs} props={props}/>
              <FormatInput label='alaw' id='alaw' checked={props.formatData.includes('alaw')} onChange={func.handleFormAlaw} props={props}/>
              <FormatInput label='ulaw' id='ulaw' checked={props.formatData.includes('ulaw')} onChange={func.handleFormUlaw} props={props}/>
              <FormatInput label='sgn' id='sgn' checked={props.formatData.includes('sgn')} onChange={func.handleFormSgn} props={props}/>
              <FormatInput label='cdma' id='cdma' checked={props.formatData.includes('cdma')} onChange={func.handleFormCdma} props={props}/>
              <FormatInput label='edem' id='edem' checked={props.formatData.includes('edem')} onChange={func.handleFormEdem} props={props}/>
              <FormatInput label='dect' id='dect' checked={props.formatData.includes('dect')} onChange={func.handleFormDect} props={props}/>
              <FormatInput label='wav' id='wav' checked={props.formatData.includes('wav')} onChange={func.handleFormWav} props={props}/>
              <FormatInput label='qcelp8' id='qcelp8' checked={props.formatData.includes('qcelp8')} onChange={func.handleFormQcelp8} props={props}/>
              <FormatInput label='pcm' id='pcm' checked={props.formatData.includes('pcm')} onChange={func.handleFormPcm} props={props}/>
              <FormatInput label='mp3' id='mp3' checked={props.formatData.includes('mp3')} onChange={func.handleFormMp3} props={props}/>
              <FormatInput label='ambe4k8' id='ambe4k8' checked={props.formatData.includes('ambe4k8')} onChange={func.handleFormAmbe4k8} props={props}/>
              <FormatInput label='ambe4kplus' id='ambe4kplus' checked={props.formatData.includes('ambe4kplus')} onChange={func.handleFormAmbe4kplus} props={props}/>
              <FormatInput label='thuraya' id='thurayaF' checked={props.formatData.includes('thuraya')} onChange={func.handleFormThuraya} props={props}/>
              <FormatInput label='g722' id='g722' checked={props.formatData.includes('g722')} onChange={func.handleFormG722} props={props}/>
              <FormatInput label='g723' id='g723' checked={props.formatData.includes('g723')} onChange={func.handleFormG723} props={props}/>
              <FormatInput label='g729' id='g729' checked={props.formatData.includes('g729')} onChange={func.handleFormG729} props={props}/>
              <FormatInput label='ogg' id='ogg' checked={props.formatData.includes('ogg')} onChange={func.handleFormOgg} props={props}/>
              <FormatInput label='jpeg; jpg' id='jpeg' checked={props.formatData.includes('jpeg')} onChange={func.handleFormJpeg} props={props}/>
              <FormatInput label='png' id='png' checked={props.formatData.includes('png')} onChange={func.handleFormPng} props={props}/>
              <FormatInput label='gif' id='gif' checked={props.formatData.includes('gif')} onChange={func.handleFormGif} props={props}/>
              <FormatInput label='bmp' id='bmp' checked={props.formatData.includes('bmp')} onChange={func.handleFormBmp} props={props}/>
              <FormatInput label='tiff' id='tiff' checked={props.formatData.includes('tiff')} onChange={func.handleFormTiff} props={props}/>
              <FormatInput label='fax' id='fax' checked={props.formatData.includes('fax')} onChange={func.handleFormFax} props={props}/>
              <FormatInput label='doc' id='doc' checked={props.formatData.includes('doc')} onChange={func.handleFormDoc} props={props}/>
              <FormatInput label='docx' id='docx' checked={props.formatData.includes('docx')} onChange={func.handleFormDocx} props={props}/>
              <FormatInput label='xls' id='xls' checked={props.formatData.includes('xls')} onChange={func.handleFormXls} props={props}/>
              <FormatInput label='xlsx' id='xlsx' checked={props.formatData.includes('xlsx')} onChange={func.handleFormXlsx} props={props}/>
              <FormatInput label='ps' id='ps' checked={props.formatData.includes('ps')} onChange={func.handleFormPs} props={props}/>
              <FormatInput label='ppt' id='ppt' checked={props.formatData.includes('ppt')} onChange={func.handleFormPpt} props={props}/>
              <FormatInput label='pptx' id='pptx' checked={props.formatData.includes('pptx')} onChange={func.handleFormPptx} props={props}/>
              <FormatInput label='pdf' id='pdf' checked={props.formatData.includes('pdf')} onChange={func.handleFormPdf} props={props}/>
              <FormatInput label='7z' id='7z' checked={props.formatData.includes('7z')} onChange={func.handleForm7z} props={props}/>
              <FormatInput label='gzip' id='gzip' checked={props.formatData.includes('gzip')} onChange={func.handleFormGzip} props={props}/>
              <FormatInput label='tar' id='tar' checked={props.formatData.includes('tar')} onChange={func.handleFormTar} props={props}/>
              <FormatInput label='rar' id='rar' checked={props.formatData.includes('rar')} onChange={func.handleFormRar} props={props}/>
              <FormatInput label='zip' id='zip' checked={props.formatData.includes('zip')} onChange={func.handleFormZip} props={props}/>
              <FormatInput label='bin' id='bin' checked={props.formatData.includes('bin')} onChange={func.handleFormBin} props={props}/>
              <FormatInput label='swf' id='swf' checked={props.formatData.includes('swf')} onChange={func.handleFormSwf} props={props}/>
              <FormatInput label='exe' id='exe' checked={props.formatData.includes('exe')} onChange={func.handleFormExe} props={props}/>
              <FormatInput label='java' id='java' checked={props.formatData.includes('java')} onChange={func.handleFormJava} props={props}/>
              <FormatInput label='bz2' id='bz2' checked={props.formatData.includes('bz2')} onChange={func.handleFormBz2} props={props}/>
              <FormatInput label='flv' id='flv' checked={props.formatData.includes('flv')} onChange={func.handleFormFlv} props={props}/>
              <FormatInput label='mpeg' id='mpeg' checked={props.formatData.includes('mpeg')} onChange={func.handleFormMpeg} props={props}/>
              <FormatInput label='mpg' id='mpg' checked={props.formatData.includes('mpg')} onChange={func.handleFormMpg} props={props}/>
            </FormatDatas>

            <button className='clear-btn' onClick={() => func.handleClearFormat(props)}>Очистить</button>
          </fieldset>
        }

        {(props.ptt || props.thuraya) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Координаты</legend>
            Широта
            <InputCross placeholder='От' value={props.coordShFrom} onChange={props.setCoordShFrom}/>
            <InputCross placeholder='До' value={props.coordShTo} onChange={props.setCoordShTo}/>
            Долгота
            <InputCross placeholder='От' value={props.coordDolFrom} onChange={props.setCoordDolFrom}/>
            <InputCross placeholder='До' value={props.coordDolTo} onChange={props.setCoordDolTo}/>
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

        {(props.ptt || props.thuraya) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Координаты комплекса</legend>
            Широта
            <InputCross placeholder='От' value={props.complexShFrom} onChange={props.setComplexShFrom}/>
            <InputCross placeholder='До' value={props.complexShTo} onChange={props.setComplexShTo}/>
            Долгота
            <InputCross placeholder='От' value={props.complexDolFrom} onChange={props.setComplexDolFrom}/>
            <InputCross placeholder='До' value={props.complexDolTo} onChange={props.setComplexDolTo}/>
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

            {/* <button className='clear-btn' onClick={() =>  props.setNumberChanel('')}>Очистить</button> */}
          </fieldset>
        }

        {(props.kv || props.ykv || props.wifi) && 
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

        {(props.kv || props.ykv) && 
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

        {(props.kv || props.ykv) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Радиосеть</legend>           
            <InputCross placeholder='Радиосеть' value={props.radioset} onChange={props.setRadioset}/>
          </fieldset>
        }

        {(props.kv || props.ykv) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Тип сигнала</legend>
            <InputCross placeholder='Тип сигнала' value={props.typeSignal} onChange={props.setTypeSignal}/>
          </fieldset>
        }

        {(props.kv || props.ykv) && 
          <fieldset className='filter'>
            <legend className='filter__title'>Подтип сигнала</legend>
            <InputCross placeholder='Подтип сигнала' value={props.subtypeSignal} onChange={props.setSubtypeSignal}/>
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
