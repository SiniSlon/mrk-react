import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts, getPostsByID } from '../../api/posts';
import Header from '../../components/Header';
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';
import PostNavBar from './components/PostNavBar';
import PostTable from './components/PostTable';
import Filters from './components/Filters';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Post = () => {
  const [ready, setReady] = useState(false);
  const [filter, setFilter] = useState(false);
  const [postList, setPostList] = useState([]);

  const [filterTime, setFilterTime] = useState('');
  const [identif, setIdentif] = useState('imei');
  const [identifValue, setIdentifValue] = useState('');
  const [iridium, setIridium] = useState(false);
  const [thuraya, setThuraya] = useState(false);
  const [ptt, setPtt] = useState(false);
  const [gsm, setGsm] = useState(false);
  const [kv, setKv] = useState(false);
  const [ukv, setUkv] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [traffic, setTraffic] = useState(false);
  const [duration, setDuration] = useState(false);
  const [looked, setLooked] = useState(false);
  const [cardAbonent, setCardAbonent] = useState(false);
  const [codeDownload, setCodeDownload] = useState(false);
  const [comment, setComment] = useState('');
  const [postRegistation, setPostRegistration] = useState('');
  const [byGeodata, setByGeodata] = useState('');
  const [label, setLabel] = useState('');

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
    setFilterTime('');
    setIdentif('imei');
    setIdentifValue('');
    setIridium(false);
    setThuraya(false);
    setPtt(false);
    setGsm(false);
    setKv(false);
    setUkv(false);
    setWifi(false);
    setTraffic(false);
    setDuration(false);
    setLooked(false);
    setCardAbonent(false);
    setCodeDownload(false);
    setComment('');
    setPostRegistration('');
    setByGeodata('');
    setLabel('');

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
      //   const processID = new Date().valueOf();
      //   console.log('processID', processID);

      //   const firstData = {
      //     ssnFilterMap: null,
      //     orderBy: {
      //         duration: "DESC"
      //     },
      //     processId: processID,
      //     pageNumber: 0,
      //     trafficType: [
      //         'text/plain'
      //     ],
      //     dateStart: "2009-01-01T00:00:00+09:00",
      //     dateEnd: null,
      //     trafficPresent: true
      //   }

      // const firstResponse = await getPosts(firstData);
      // console.log('firstResponse >', firstResponse.data)

      //   const secondData = {
      //     sort: "DESC",
      //     param: 'duration',
      //     processId: processID,
      //     pageNumber: 0,
      //     pageRowsCount: 20,
      //   }

      //   const secondResponse = await getPostsByID(secondData);

      //   console.log('secondResponse >', secondResponse.data)
      //   setPostList(secondResponse.data)
      } catch (e) {
        console.error(e)
      } finally {
        setReady(true);
      }
    })()
  }, [])

  const findByFilter = async () => {
    const data = {
      time: filterTime,
      identificator: identif,
      idValue: identifValue,
      iridium: iridium,
      thuraya: thuraya,
      ptt: ptt,
      gsm: gsm,
      kv: kv,
      ukv: ukv,
      wifi: wifi,
      traffic: traffic,
      duration: duration,
      looked: looked,
      abonentCard: cardAbonent,
      comment: comment,
      postRegistration: postRegistation,
      byGeodata: byGeodata,
      label: label,
      dataFormat: formatData,
      coord: {
        form: [coordShFrom, coordDolFrom],
        to: [coordShTo, coordDolTo],
        // shFrom: coordShFrom,
        // shTo: coordShTo,
        // dolFrom: coordDolFrom,
        // dolTo: coordDolTo,
      },
      complex: {
        form: [complexShFrom, complexDolFrom],
        to: [complexShTo, complexDolTo],
        // shFrom: complexShFrom,
        // shTo: complexShTo,
        // dolFrom: complexDolFrom,
        // dolTo: complexDolTo,
      },
      numberChanel: numberChanel,
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
      radioset: radioset,
      typeSignal: typeSignal,
      subTypeSignal: subtypeSignal,
    }
    console.log('Submit!!! Data >> ', data);

  }

  return (
    <Body>
      <Header/>

      <Main>
        <PostNavBar filter={filter} setFilter={setFilter}/>

        <div className="filter-bar">
          <button className={filter ? 'filter-btn active-btn' : 'filter-btn'} onClick={() => setFilter(s=>!s)}><FilterAltIcon/>Фильтры</button>
          <button className="filter-btn" onClick={handleResetFilters}><RestartAltIcon/>Сбросить все фильтры</button>
        </div>

        <PostTable postList={postList}/>

        {filter && <Filters
          findByFilter={findByFilter}
          setFilter={setFilter}
          filterTime={filterTime}
          setFilterTime={setFilterTime}
          identif={identif}
          setIdentif={setIdentif}
          identifValue={identifValue}
          setIdentifValue={setIdentifValue}
          iridium={iridium}
          setIridium={setIridium}
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
          traffic={traffic}
          setTraffic={setTraffic}
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
          byGeodata={byGeodata}
          setByGeodata={setByGeodata}
          label={label}
          setLabel={setLabel}

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

      {/* <Footer> */}
        {/* Фууутер */}
      {/* </Footer> */}
    </Body>
  )
}

export default Post;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* height: calc(100vh - 100px); */
  /* padding: 10px; */
  position: relative;

  .filter-bar{
    display: flex;
  }

  .filter-btn {
    display: flex;
    align-items: center;
    /* width: 100px; */
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
    background-color: #051b9b;
    color: white;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${mainBackground};
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
