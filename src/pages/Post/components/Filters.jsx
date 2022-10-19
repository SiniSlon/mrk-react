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

  const handleFormXml = () => {
    if (props.formatData.includes('xml')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('xml');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'xml'])
    }
  }
  
  const handleFormEml = () => {
    if (props.formatData.includes('eml')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('eml');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'eml'])
    }
  }

  const handleFormGsm = () => {
    if (props.formatData.includes('gsm')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('gsm');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'gsm'])
    }
  }
  const handleFormIbs = () => {
    if (props.formatData.includes('ibs')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('ibs');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'ibs'])
    }
  }

  const handleFormAlaw = () => {
    if (props.formatData.includes('alaw')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('alaw');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'alaw'])
    }
  }

  const handleFormUlaw = () => {
    if (props.formatData.includes('ulaw')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('ulaw');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'ulaw'])
    }
  }

  const handleFormSgn = () => {
    if (props.formatData.includes('sgn')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('sgn');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'sgn'])
    }
  }

  const handleFormCdma = () => {
    if (props.formatData.includes('cdma')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('cdma');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'cdma'])
    }
  }

  const handleFormEdem = () => {
    if (props.formatData.includes('edem')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('edem');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'edem'])
    }
  }

  const handleFormDect = () => {
    if (props.formatData.includes('dect')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('dect');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'dect'])
    }
  }

  const handleFormWav = () => {
    if (props.formatData.includes('wav')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('wav');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'wav'])
    }
  }

  const handleFormQcelp8 = () => {
    if (props.formatData.includes('qcelp8')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('qcelp8');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'qcelp8'])
    }
  }

  const handleFormPcm = () => {
    if (props.formatData.includes('pcm')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('pcm');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'pcm'])
    }
  }

  const handleFormMp3 = () => {
    if (props.formatData.includes('mp3')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('mp3');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'mp3'])
    }
  }

  const handleFormAmbe4k8 = () => {
    if (props.formatData.includes('ambe4k8')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('ambe4k8');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'ambe4k8'])
    }
  }

  const handleFormAmbe4kplus = () => {
    if (props.formatData.includes('ambe4kplus')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('ambe4kplus');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'ambe4kplus'])
    }
  }

  const handleFormMpg = () => {
    if (props.formatData.includes('mpg')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('mpg');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'mpg'])
    }
  }

  const handleFormMpeg = () => {
    if (props.formatData.includes('mpeg')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('mpeg');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'mpeg'])
    }
  }

  const handleFormFlv = () => {
    if (props.formatData.includes('flv')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('flv');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'flv'])
    }
  }

  const handleFormBz2 = () => {
    if (props.formatData.includes('bz2')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('bz2');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'bz2'])
    }
  }

  const handleFormJava = () => {
    if (props.formatData.includes('java')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('java');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'java'])
    }
  }

  const handleFormExe = () => {
    if (props.formatData.includes('exe')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('exe');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'exe'])
    }
  }

  const handleFormSwf= () => {
    if (props.formatData.includes('swf')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('swf');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'swf'])
    }
  }

  const handleFormBin = () => {
    if (props.formatData.includes('bin')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('bin');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'bin'])
    }
  }

  const handleFormZip = () => {
    if (props.formatData.includes('zip')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('zip');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'zip'])
    }
  }

  const handleFormRar = () => {
    if (props.formatData.includes('rar')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('rar');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'rar'])
    }
  }

  const handleFormTar= () => {
    if (props.formatData.includes('tar')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('tar');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'tar'])
    }
  }

  const handleFormGzip = () => {
    if (props.formatData.includes('gzip')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('gzip');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'gzip'])
    }
  }

  const handleForm7z = () => {
    if (props.formatData.includes('7z')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('7z');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, '7z'])
    }
  }

  const handleFormPdf = () => {
    if (props.formatData.includes('pdf')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('pdf');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'pdf'])
    }
  }

  const handleFormPptx = () => {
    if (props.formatData.includes('pptx')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('pptx');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'pptx'])
    }
  }

  const handleFormPpt = () => {
    if (props.formatData.includes('ppt')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('ppt');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'ppt'])
    }
  }

  const handleFormPs = () => {
    if (props.formatData.includes('ps')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('ps');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'ps'])
    }
  }

  const handleFormXlsx = () => {
    if (props.formatData.includes('xlsx')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('xlsx');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'xlsx'])
    }
  }

  const handleFormXls = () => {
    if (props.formatData.includes('xls')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('xls');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'xls'])
    }
  }

  const handleFormDocx = () => {
    if (props.formatData.includes('docx')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('docx');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'docx'])
    }
  }

  const handleFormDoc = () => {
    if (props.formatData.includes('doc')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('doc');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'doc'])
    }
  }
  const handleFormFax = () => {
    if (props.formatData.includes('fax')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('fax');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'fax'])
    }
  }

  const handleFormTiff = () => {
    if (props.formatData.includes('tiff')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('tiff');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'tiff'])
    }
  }

  const handleFormBmp = () => {
    if (props.formatData.includes('bmp')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('bmp');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'bmp'])
    }
  }

  const handleFormGif = () => {
    if (props.formatData.includes('gif')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('gif');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'gif'])
    }
  }

  const handleFormPng= () => {
    if (props.formatData.includes('png')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('png');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'png'])
    }
  }

  const handleFormJpeg = () => {
    if (props.formatData.includes('jpeg')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('jpeg');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'jpeg'])
    }
  }

  const handleFormThuraya = () => {
    if (props.formatData.includes('thuraya')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('thuraya');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'thuraya'])
    }
  }

  const handleFormG722 = () => {
    if (props.formatData.includes('g722')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('g722');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'g722'])
    }
  }

  const handleFormG723 = () => {
    if (props.formatData.includes('g723')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('g723');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'g723'])
    }
  }

  const handleFormG729 = () => {
    if (props.formatData.includes('g729')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('g729');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'g729'])
    }
  }

  const handleFormOgg = () => {
    if (props.formatData.includes('ogg')) {
      const temp = [...props.formatData];
      const index = temp.indexOf('ogg');
      temp.splice(index, 1)
      props.setFormatData(temp)
    } else {
      props.setFormatData(s => [...s, 'ogg'])
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
            <FormatDatas>
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
            
            <div className='input-wrapper'>
              <input id='xml' type='checkbox' checked={props.formatData.includes('xml')} onChange={handleFormXml}/><label htmlFor='xml'>xml</label>
            </div>
            <div className='input-wrapper'>
              <input id='eml' type='checkbox' checked={props.formatData.includes('eml')} onChange={handleFormEml}/><label htmlFor='eml'>eml</label>
            </div>
            <div className='input-wrapper'>
              <input id='gsm' type='checkbox' checked={props.formatData.includes('gsm')} onChange={handleFormGsm}/><label htmlFor='gsm'>gsm</label>
            </div>
            <div className='input-wrapper'>
              <input id='ibs' type='checkbox' checked={props.formatData.includes('ibs')} onChange={handleFormIbs}/><label htmlFor='ibs'>ibs</label>
            </div>
            <div className='input-wrapper'>
              <input id='alaw' type='checkbox' checked={props.formatData.includes('alaw')} onChange={handleFormAlaw}/><label htmlFor='alaw'>alaw</label>
            </div>
            <div className='input-wrapper'>
              <input id='ulaw' type='checkbox' checked={props.formatData.includes('ulaw')} onChange={handleFormUlaw}/><label htmlFor='ulaw'>ulaw</label>
            </div>
            <div className='input-wrapper'>
              <input id='sgn' type='checkbox' checked={props.formatData.includes('sgn')} onChange={handleFormSgn}/><label htmlFor='sgn'>sgn</label>
            </div>
            <div className='input-wrapper'>
              <input id='cdma' type='checkbox' checked={props.formatData.includes('cdma')} onChange={handleFormCdma}/><label htmlFor='cdma'>cdma</label>
            </div>
            <div className='input-wrapper'>
              <input id='edem' type='checkbox' checked={props.formatData.includes('edem')} onChange={handleFormEdem}/><label htmlFor='edem'>edem</label>
            </div>
            <div className='input-wrapper'>
              <input id='dect' type='checkbox' checked={props.formatData.includes('dect')} onChange={handleFormDect}/><label htmlFor='dect'>dect</label>
            </div>
            <div className='input-wrapper'>
              <input id='wav' type='checkbox' checked={props.formatData.includes('wav')} onChange={handleFormWav}/><label htmlFor='wav'>wav</label>
            </div>
            <div className='input-wrapper'>
              <input id='qcelp8' type='checkbox' checked={props.formatData.includes('qcelp8')} onChange={handleFormQcelp8}/><label htmlFor='qcelp8'>qcelp8</label>
            </div>
            <div className='input-wrapper'>
              <input id='pcm' type='checkbox' checked={props.formatData.includes('pcm')} onChange={handleFormPcm}/><label htmlFor='pcm'>pcm</label>
            </div>
            <div className='input-wrapper'>
              <input id='mp3' type='checkbox' checked={props.formatData.includes('mp3')} onChange={handleFormMp3}/><label htmlFor='mp3'>mp3</label>
            </div>
            <div className='input-wrapper'>
              <input id='ambe4k8' type='checkbox' checked={props.formatData.includes('ambe4k8')} onChange={handleFormAmbe4k8}/><label htmlFor='ambe4k8'>ambe4k8</label>
            </div>
            <div className='input-wrapper'>
              <input id='ambe4kplus' type='checkbox' checked={props.formatData.includes('ambe4kplus')} onChange={handleFormAmbe4kplus}/><label htmlFor='ambe4kplus'>ambe4kplus</label>
            </div>
            <div className='input-wrapper'>
              <input id='thuraya' type='checkbox' checked={props.formatData.includes('thuraya')} onChange={handleFormThuraya}/><label htmlFor='thuraya'>thuraya</label>
            </div>
            <div className='input-wrapper'>
              <input id='g722' type='checkbox' checked={props.formatData.includes('g722')} onChange={handleFormG722}/><label htmlFor='g722'>g722</label>
            </div>
            <div className='input-wrapper'>
              <input id='g723' type='checkbox' checked={props.formatData.includes('g723')} onChange={handleFormG723}/><label htmlFor='g723'>g723</label>
            </div>
            <div className='input-wrapper'>
              <input id='g729' type='checkbox' checked={props.formatData.includes('g729')} onChange={handleFormG729}/><label htmlFor='g729'>g729</label>
            </div>
            <div className='input-wrapper'>
              <input id='ogg' type='checkbox' checked={props.formatData.includes('ogg')} onChange={handleFormOgg}/><label htmlFor='ogg'>ogg</label>
            </div>
            <div className='input-wrapper'>
              <input id='jpeg' type='checkbox' checked={props.formatData.includes('jpeg')} onChange={handleFormJpeg}/><label htmlFor='jpeg'>jpeg;jpg</label>
            </div>
            <div className='input-wrapper'>
              <input id='png' type='checkbox' checked={props.formatData.includes('png')} onChange={handleFormPng}/><label htmlFor='png'>png</label>
            </div>
            <div className='input-wrapper'>
              <input id='gif' type='checkbox' checked={props.formatData.includes('gif')} onChange={handleFormGif}/><label htmlFor='gif'>gif</label>
            </div>
            <div className='input-wrapper'>
              <input id='bmp' type='checkbox' checked={props.formatData.includes('bmp')} onChange={handleFormBmp}/><label htmlFor='bmp'>bmp</label>
            </div>
            <div className='input-wrapper'>
              <input id='tiff' type='checkbox' checked={props.formatData.includes('tiff')} onChange={handleFormTiff}/><label htmlFor='tiff'>tiff</label>
            </div>
            <div className='input-wrapper'>
              <input id='fax' type='checkbox' checked={props.formatData.includes('fax')} onChange={handleFormFax}/><label htmlFor='fax'>fax</label>
            </div>
            <div className='input-wrapper'>
              <input id='doc' type='checkbox' checked={props.formatData.includes('doc')} onChange={handleFormDoc}/><label htmlFor='doc'>doc</label>
            </div>
            <div className='input-wrapper'>
              <input id='docx' type='checkbox' checked={props.formatData.includes('docx')} onChange={handleFormDocx}/><label htmlFor='docx'>docx</label>
            </div>
            <div className='input-wrapper'>
              <input id='xls' type='checkbox' checked={props.formatData.includes('xls')} onChange={handleFormXls}/><label htmlFor='xls'>xls</label>
            </div>
            <div className='input-wrapper'>
              <input id='xlsx' type='checkbox' checked={props.formatData.includes('xlsx')} onChange={handleFormXlsx}/><label htmlFor='xlsx'>xlsx</label>
            </div>
            <div className='input-wrapper'>
              <input id='ps' type='checkbox' checked={props.formatData.includes('ps')} onChange={handleFormPs}/><label htmlFor='ps'>ps</label>
            </div>
            <div className='input-wrapper'>
              <input id='ppt' type='checkbox' checked={props.formatData.includes('ppt')} onChange={handleFormPpt}/><label htmlFor='ppt'>ppt</label>
            </div>
            <div className='input-wrapper'>
              <input id='pptx' type='checkbox' checked={props.formatData.includes('pptx')} onChange={handleFormPptx}/><label htmlFor='pptx'>pptx</label>
            </div>
            <div className='input-wrapper'>
              <input id='pdf' type='checkbox' checked={props.formatData.includes('pdf')} onChange={handleFormPdf}/><label htmlFor='pdf'>pdf</label>
            </div>
            <div className='input-wrapper'>
              <input id='7z' type='checkbox' checked={props.formatData.includes('7z')} onChange={handleForm7z}/><label htmlFor='7z'>7z</label>
            </div>
            <div className='input-wrapper'>
              <input id='gzip' type='checkbox' checked={props.formatData.includes('gzip')} onChange={handleFormGzip}/><label htmlFor='gzip'>gzip</label>
            </div>
            <div className='input-wrapper'>
              <input id='tar' type='checkbox' checked={props.formatData.includes('tar')} onChange={handleFormTar}/><label htmlFor='tar'>tar</label>
            </div>
            <div className='input-wrapper'>
              <input id='rar' type='checkbox' checked={props.formatData.includes('rar')} onChange={handleFormRar}/><label htmlFor='rar'>rar</label>
            </div>
            <div className='input-wrapper'>
              <input id='zip' type='checkbox' checked={props.formatData.includes('zip')} onChange={handleFormZip}/><label htmlFor='zip'>zip</label>
            </div>
            <div className='input-wrapper'>
              <input id='bin' type='checkbox' checked={props.formatData.includes('bin')} onChange={handleFormBin}/><label htmlFor='bin'>bin</label>
            </div>
            <div className='input-wrapper'>
              <input id='swf' type='checkbox' checked={props.formatData.includes('swf')} onChange={handleFormSwf}/><label htmlFor='swf'>swf</label>
            </div>
            <div className='input-wrapper'>
              <input id='exe' type='checkbox' checked={props.formatData.includes('exe')} onChange={handleFormExe}/><label htmlFor='exe'>exe</label>
            </div>
            <div className='input-wrapper'>
              <input id='java' type='checkbox' checked={props.formatData.includes('java')} onChange={handleFormJava}/><label htmlFor='java'>java</label>
            </div>
            <div className='input-wrapper'>
              <input id='bz2' type='checkbox' checked={props.formatData.includes('bz2')} onChange={handleFormBz2}/><label htmlFor='bz2'>bz2</label>
            </div>
            <div className='input-wrapper'>
              <input id='flv' type='checkbox' checked={props.formatData.includes('flv')} onChange={handleFormFlv}/><label htmlFor='flv'>flv</label>
            </div>
            <div className='input-wrapper'>
              <input id='mpeg' type='checkbox' checked={props.formatData.includes('mpeg')} onChange={handleFormMpeg}/><label htmlFor='mpeg'>mpeg</label>
            </div>
            <div className='input-wrapper'>
              <input id='mpg' type='checkbox' checked={props.formatData.includes('mpg')} onChange={handleFormMpg}/><label htmlFor='mpg'>mpg</label>
            </div>
            </FormatDatas>

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


const FormatDatas = styled.div`
  overflow-y: scroll;
  height: 150px;
`;