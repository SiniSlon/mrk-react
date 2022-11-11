import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts, getPostsByID } from '../../api/services/posts';
import Header from '../../components/Header';
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';
import PostNavBar from './components/PostNavBar';
import PostTable from './components/PostTable';
import Filters from './components/Filters';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TaskIcon from '@mui/icons-material/Task';
import { Bar } from "react-chartjs-2";
import { changeSnn } from '../../store/reducers/ssn';

const Post = () => {
  const [ready, setReady] = useState(false);
  const [filter, setFilter] = useState(false);
  const [taskm, setTaskM] = useState(false);
  const [postList, setPostList] = useState([]);

  const dispatch = useAppDispatch();
  const defaultSettings = useAppSelector((state) => state.settingsSlice.filterDefault)
  const set = useAppSelector(state => state.settingsSlice.filter)

  // Фильтры 1 столбца

  const [filterTime, setFilterTime] = useState('');
  // const [identif, setIdentif] = useState('imei');
  // const [identifValue, setIdentifValue] = useState('');
  const [duration, setDuration] = useState(false);
  const [looked, setLooked] = useState(false);
  const [cardAbonent, setCardAbonent] = useState(false);
  const [codeDownload, setCodeDownload] = useState(false);
  const [comment, setComment] = useState('');
  const [postRegistation, setPostRegistration] = useState('');
  const [traffic, setTraffic] = useState(false);
  const [byGeodata, setByGeodata] = useState('');
  const [label, setLabel] = useState('');

  // Фильтры 2 столбца

  const [irridium, setIrridium] = useState(set.irridium ? defaultSettings.irridiumDefault : false);
  const [thuraya, setThuraya] = useState(set.thuraya ? defaultSettings.thurayaDefault : false);
  const [ptt, setPtt] = useState(set.ptt ? defaultSettings.pttDefault : false);
  const [gsm, setGsm] = useState(set.gsm ? defaultSettings.gsmDefault : false);
  const [kv, setKv] = useState(set.kv ? defaultSettings.kvDefault : false);
  const [ukv, setUkv] = useState(set.ukv ? defaultSettings.ukvDefault : false);
  const [wifi, setWifi] = useState(set.wifi ? defaultSettings.wifiDefault : false);

  const [idImei, setIdImei] = useState('');
  const [idImsi, setIdImsi] = useState('');
  const [idTfop, setIdTfop] = useState('');
  const [idTmsi, setIdTmsi] = useState('');
  const [idSsid, setIdSsid] = useState('');
  const [idKeyShifr, setIdKeyShifr] = useState('');
  const [idBssid, setIdBssid] = useState('');
  const [idOperator, setIdOperator] = useState('');
  const [idNameDevice, setIdNameDevice] = useState('');
  const [idModelDevice, setIdModelDevice] = useState('');
  const [idDnsNmae, setIdDnsNmae] = useState('');
  const [idNumApp, setIdNumApp] = useState('');
  const [idEmail, setIdEmail] = useState('');
  const [idMacAddr, setIdMacAddr] = useState('');
  const [idPort, setIdPort] = useState('');
  const [idIpAdderss, setIdIpAdderss] = useState('');
  const [idNumChan, setIdNumChan] = useState('');
  const [idName, setIdName] = useState('');
  const [idNameForm, setIdNameForm] = useState('');
  const [idNameTo, setIdNameTo] = useState('');
  const [idPriority, setIdPriority] = useState('');
  const [idErbd, setIdErbd] = useState('');
  const [idNameGroup, setIdNameGroup] = useState('');
  const [idIdGroup, setIdIdGroup] = useState('');
  const [idNameAt, setIdNameAt] = useState('');

  // Фильтры 3 столбца

  const [formatData, setFormatData] = useState([]);
  const [coordShFrom, setCoordShFrom] = useState('');
  const [coordShTo, setCoordShTo] = useState('');
  const [coordDolFrom, setCoordDolFrom] = useState('');
  const [coordDolTo, setCoordDolTo] = useState('');
  const [complexShFrom, setComplexShFrom] = useState('');
  const [complexShTo, setComplexShTo] = useState('');
  const [complexDolFrom, setComplexDolFrom] = useState('');
  const [complexDolTo, setComplexDolTo] = useState('');

  const [numberChanel, setNumberChanel] = useState('');

  const [mainPolosaFrom, setMainPolosaFrom] = useState('');
  const [mainPolosaTo, setMainPolosaTo] = useState('');
  const [mainPolosaFromHz, setMainPolosaFromHz] = useState('hz');
  const [mainPolosaToHz, setMainPolosaToHz] = useState('hz');

  const [polosaFrom, setPolosaFrom] = useState('');
  const [polosaTo, setPolosaTo] = useState('');
  const [polosaFromHz, setPolosaFromHz] = useState('hz');
  const [polosaToHz, setPolosaToHz] = useState('hz');

  const [radioset, setRadioset] = useState('');
  const [typeSignal, setTypeSignal] = useState('');
  const [subtypeSignal, setSubtypeSignal] = useState('');
  
  const handleResetFilters = () => {
    // Фильтры 1 столбца

    setFilterTime('');
    setTraffic(false);
    setDuration(false);
    setLooked(false);
    setCardAbonent(false);
    setCodeDownload(false);
    setComment('');
    setPostRegistration('');
    setByGeodata('');
    setLabel('');

    // Фильтры 2 столбца

    setIrridium(defaultSettings.irridiumDefault);
    setThuraya(defaultSettings.thurayaDefault);
    setPtt(defaultSettings.pttDefault);
    setGsm(defaultSettings.gsmDefault);
    setKv(defaultSettings.kvDefault);
    setUkv(defaultSettings.ukvDefault);
    setWifi(defaultSettings.wifiDefault);
    
    setIdImei('');
    setIdImsi('');

    // Фильтры 3 столбца

    setFormatData([]);
    setCoordShFrom('');
    setCoordShTo('');
    setCoordDolFrom('');
    setCoordDolTo('');
    setComplexShFrom('');
    setComplexShTo('');
    setComplexDolFrom('');
    setComplexDolTo('');
  
    setNumberChanel('');
  
    setMainPolosaFrom('');
    setMainPolosaTo('');
    setMainPolosaFromHz('hz');
    setMainPolosaToHz('hz');
  
    setPolosaFrom('');
    setPolosaTo('');
    setPolosaFromHz('hz');
    setPolosaToHz('hz');
  
    setRadioset('');
    setTypeSignal('');
    setSubtypeSignal('');

  }

  
  useEffect(() => {
    (async() => {
      try {
        const processID = new Date().valueOf();
        console.log('processID', processID);

        // const firstData = {
        //   ssnFilterMap: null,
        //   orderBy: {
        //     duration: "DESC"
        //   },
        //   processId: processID,
        //   pageNumber: 0,
        //   // trafficType: [
        //   //   'text/plain'
        //   // ],
        //   dateStart: null,
        //   dateEnd: null,
        //   trafficPresent: true
        // }

      const firstResponse = await getPosts({processId: processID});
      console.log('firstResponse >', firstResponse.data)

        const secondData = {
          sort: "DESC",
          param: 'duration',
          processId: processID,
          pageNumber: 0,
          pageRowsCount: 20,
        }

        const secondResponse = await getPostsByID(secondData);

        console.log('secondResponse >', secondResponse.data)
        setPostList(secondResponse.data)

        dispatch(changeSnn(secondResponse.data))
      } catch (e) {
        console.error(e)
      } finally {
        setReady(true);
      }
    })()
  }, [])

  const findByFilter = async () => {
    const data = {
      // Фильтры 1 столбца

      filterTime,
      duration,
      looked,
      cardAbonent,
      codeDownload,
      comment,
      postRegistation,
      traffic,
      byGeodata,
      label,

      // Фильтры 2 столбца
      systemSv: {
        irridium,
        thuraya,
        ptt,
        gsm,
        kv,
        ukv,
        wifi,
      },

      byIdAbonenta: {
        idImei,
        idImsi,
        idTfop,
        idTmsi,
        idSsid,
        idKeyShifr,
        idBssid,
        idOperator,
        idNameDevice,
        idModelDevice,
        idDnsNmae,
        idNumApp,
        idEmail,
        idMacAddr,
        idPort,
        idIpAdderss,
        idNumChan,
        idName,
        idNameForm,
        idNameTo,
        idPriority,
        idErbd,
        idNameGroup,
        idIdGroup,
        idNameAt,
      },

      // Фильтры 3 столбца

      formatData,
      coord: {
        form: [coordShFrom, coordDolFrom],
        to: [coordShTo, coordDolTo],
      },
      complex: {
        form: [complexShFrom, complexDolFrom],
        to: [complexShTo, complexDolTo],
      },
      numberChanel,
      mainPolosa: {
        from: mainPolosaFrom,
        fromHz: mainPolosaFromHz,
        to: mainPolosaTo,
        toHz: mainPolosaToHz,
      },
      polosa: {
        from: polosaFrom,
        fromHz: polosaFromHz,
        to: polosaTo,
        toHz: polosaToHz,
      },
      radioset,
      typeSignal,
      subtypeSignal,
    }
    console.log('Submit!!! Sended data >> ', data);
  }

  return (
    <>
      <Header/>

      <Main>
        <PostNavBar filter={filter} setFilter={setFilter}/>

        <div className="filter-bar">
          <button className={filter ? 'filter-btn active-btn' : 'filter-btn'} onClick={() => setFilter(s => !s)}><FilterAltIcon/>Фильтры</button>
          <button className="filter-btn" onClick={handleResetFilters}><RestartAltIcon/>Сбросить все фильтры</button>
        </div>

        <PostTable postList={postList}/>
        
        {filter && <Filters
          findByFilter={findByFilter}
          setFilter={setFilter}

          // Фильтры 1 столбца

          filterTime={filterTime}
          setFilterTime={setFilterTime}
          duration={duration}
          setDuration={setDuration}
          looked={looked}
          setLooked={setLooked}
          cardAbonent={cardAbonent}
          setCardAbonent={setCardAbonent}
          codeDownload={codeDownload}
          setCodeDownload={setCodeDownload}
          comment={comment}
          setComment={setComment}
          postRegistation={postRegistation}
          setPostRegistration={setPostRegistration}
          traffic={traffic}
          setTraffic={setTraffic}
          byGeodata={byGeodata}
          setByGeodata={setByGeodata}
          label={label}
          setLabel={setLabel}

          // Фильтры 2 столбца

          irridium={irridium}
          setIrridium={setIrridium}
          thuraya={thuraya}
          setThuraya={setThuraya}
          ptt={ptt}
          setPtt={setPtt}
          gsm={gsm}
          setGsm={setGsm}
          kv={kv}
          setKv={setKv}
          ukv={ukv}
          setUkv={setUkv}
          wifi={wifi}
          setWifi={setWifi}

          idImei={idImei}
          setIdImei={setIdImei}
          idImsi={idImsi}
          setIdImsi={setIdImsi}
          idTfop={idTfop}
          setIdTfop={setIdTfop}
          idTmsi={idTmsi}
          setIdTmsi={setIdTmsi}
          idSsid={idSsid}
          setIdSsid={setIdSsid}
          idKeyShifr={idKeyShifr}
          setIdKeyShifr={setIdKeyShifr}
          idBssid={idBssid}
          setIdBssid={setIdBssid}
          idOperator={idOperator}
          setIdOperator={setIdOperator}
          idNameDevice={idNameDevice}
          setIdNameDevice={setIdNameDevice}
          idModelDevice={idModelDevice}
          setIdModelDevice={setIdModelDevice}
          idDnsNmae={idDnsNmae}
          setIdDnsNmae={setIdDnsNmae}
          idNumApp={idNumApp}
          setIdNumApp={setIdNumApp}
          idEmail={idEmail}
          setIdEmail={setIdEmail}
          idMacAddr={idMacAddr}
          setIdMacAddr={setIdMacAddr}
          idPort={idPort}
          setIdPort={setIdPort}
          idIpAdderss={idIpAdderss}
          setIdIpAdderss={setIdIpAdderss}
          idNumChan={idNumChan}
          setIdNumChan={setIdNumChan}
          idName={idName}
          setIdName={setIdName}
          idNameForm={idNameForm}
          setIdNameForm={setIdNameForm}
          idNameTo={idNameTo}
          setIdNameTo={setIdNameTo}
          idPriority={idPriority}
          setIdPriority={setIdPriority}
          idErbd={idErbd}
          setIdErbd={setIdErbd}
          idNameGroup={idNameGroup}
          setIdNameGroup={setIdNameGroup}
          idIdGroup={idIdGroup}
          setIdIdGroup={setIdIdGroup}
          idNameAt={idNameAt}
          setIdNameAt={setIdNameAt}

          // Фильтры 3 столбца

          formatData={formatData}
          setFormatData={setFormatData}

          coordShFrom={coordShFrom}
          setCoordShFrom={setCoordShFrom}
          coordShTo={coordShTo}
          setCoordShTo={setCoordShTo}
          coordDolFrom={coordDolFrom}
          setCoordDolFrom={setCoordDolFrom}
          coordDolTo={coordDolTo}
          setCoordDolTo={setCoordDolTo}

          complexShFrom={complexShFrom}
          setComplexShFrom={setComplexShFrom}
          complexShTo={complexShTo}
          setComplexShTo={setComplexShTo}
          complexDolFrom={complexDolFrom}
          setComplexDolFrom={setComplexDolFrom}
          complexDolTo={complexDolTo}
          setComplexDolTo={setComplexDolTo}

          numberChanel={numberChanel}
          setNumberChanel={setNumberChanel}

          mainPolosaFrom={mainPolosaFrom}
          setMainPolosaFrom={setMainPolosaFrom}
          mainPolosaTo={mainPolosaTo}
          setMainPolosaTo={setMainPolosaTo}

          mainPolosaFromHz={mainPolosaFromHz}
          setMainPolosaFromHz={setMainPolosaFromHz}
          mainPolosaToHz={mainPolosaToHz}
          setMainPolosaToHz={setMainPolosaToHz}

          polosaFrom={polosaFrom}
          setPolosaFrom={setPolosaFrom}
          polosaTo={polosaTo}
          setPolosaTo={setPolosaTo}
          polosaFromHz={polosaFromHz}
          setPolosaFromHz={setPolosaFromHz}
          polosaToHz={polosaToHz}
          setPolosaToHz={setPolosaToHz}

          radioset={radioset}
          setRadioset={setRadioset}
          typeSignal={typeSignal}
          setTypeSignal={setTypeSignal}
          subtypeSignal={subtypeSignal}
          setSubtypeSignal={setSubtypeSignal}
        />}
      </Main>
    </>
  )
}

export default Post;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  position: relative;
  background: ${mainBackground};

  .filter-bar{
    display: flex;
  }

  .filter-btn {
    display: flex;
    align-items: center;
    margin: 10px 0 0 10px;
    background-color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-family: ${mainFontFamily};

    :hover {
      /* background-color: #f1f1f1; */
    }
  }

  .active-btn {
    background-color: #0054bd;
    color: white;
  }
`;
