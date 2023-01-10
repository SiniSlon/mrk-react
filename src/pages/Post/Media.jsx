import Header from '../../components/Header';
import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import PostNavBar from './components/PostNavBar';
import styled from 'styled-components';
import { useEffect,useRef,useState } from 'react';
import { mainBackground, hoverTr, mainFontFamily } from '../../utils/stylesSettings';
import * as WaveSurferTimeLinePlugin  from 'wavesurfer.js/dist/plugin/wavesurfer.timeline';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import StopIcon from '@mui/icons-material/Stop';
import * as Cursor from 'wavesurfer.js/dist/plugin/wavesurfer.cursor'
import ssnArray from '../../utils/tempSnn';
const Waveform = ({ idArray }) => {

  const waveSurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [volume,setVolume] =useState(0.3);
  const [heightWave,setHeightWave] = useState(50);
  const [readyPlayer, setPlayerReady] = useState(false);
 
  

useEffect(() => {
 if(!waveSurfer.current) 
  { waveSurfer.current = WaveSurfer.create({
    barWidth: 2,
    cursorWidth: 2,
    container: '#wave',
    backend: 'MediaElement',
    height: heightWave,
    progressColor: '#77cef7',
    responsive: true,
    waveColor: '#000000',
    cursorColor: "gray  ",
    audioContext: 'context.createMediaElementSource(audio)',
    plugins: 
    [
      WaveSurferTimeLinePlugin.create({
        container:'#timeLine',
        primaryFontColor:"black",
        secondaryFontColor:'gray',
      }),
      Cursor.create({
        showTime:true,
        opacity:1,
        customShowTimeStyle: {
          'background-color': '#ffffff',
          color: '#000000',
          padding: '2px',
          'font-size': '14px'
        }
      })
    ],
  }); 
    const array=[];
    for (let i=0; i <ssnArray.length; i++){
      if (idArray.includes(String(ssnArray[i].id))) {
      array.push(ssnArray[i].file)
      
      if (array.length===0){
      waveSurfer.current.load(array[i])}
      else{waveSurfer.current.load(array[0])}
      waveSurfer.current.on("ready", () => {
      setPlayerReady(true); })
    }
  
      };
   
}
},[])

const handlePlay = () => {
  waveSurfer.current.playPause()
  setPlaying(s=>!s);};

const handleStop = ()=>{
  waveSurfer.current.stop();
  setPlaying(false);};

 const handleChangeSpeed = (e) =>{
  waveSurfer.current.setPlaybackRate(e.target.value);
  setSpeed(e.target.value)}

 const handleChangeVolume =(e) =>{
  waveSurfer.current.setVolume(e.target.value);
  setVolume(e.target.value)}

 const handleChangeHeight =(e)=>{
  waveSurfer.current.setHeight(e.target.value)
  setHeightWave(e.target.value)}

  return (
    <> 
      <WaveformContianer>
        <ControlPanel>
          <button onClick={handlePlay}><NotStartedIcon/><span>{playing ? 'Pause' : 'Play'}</span></button>
          <button onClick={handleStop}><StopIcon/><span>Stop</span></button>
          <fieldset>
            <legend>Change Speed</legend>
            <input id='speed' type='range' min={0.5} max={2} step={0.5} value={speed} title='Change speed' onChange={handleChangeSpeed} /><span>{speed}</span>
          </fieldset>
          <fieldset>
          <legend>Change volume</legend>
            <input type='range' min={0.1} max={1} step={0.1} value={volume} title='Change volume' onChange={handleChangeVolume}/><span>{volume*100}</span>
          </fieldset>
          <fieldset>
            <legend>Change height</legend>
          <input  type='range' min={50} max={500} step={50} value={heightWave} title='Change height waveform' onChange={handleChangeHeight}/><span>{heightWave}</span>
          </fieldset>
        </ControlPanel>
        <WaveVision>
          <div id="wave" style={{visibility: `{$readyPlayer ? 'visible' : 'hidden'}`}}></div>
          <div id='timeLine'></div>
        </WaveVision> 
      </WaveformContianer>
    </>
  );
}
export default Waveform;

const WaveformContianer = styled.div`
  display: flex !important ;  
  flex-direction: column;  
  position: relative;
  background: ${mainBackground};  
`;

const ControlPanel =styled.div`
  display:flex;
  margin:10px;
  height:50px;
  border-radius:5px;
    button{
      display:flex;
      justify-content: center;
      align-items: center ;
      border: 1px solid #00369b;
      border-radius: 7px;
      background-color: white;
      color:#00369b;
      font-family: ${mainFontFamily};
      margin-right: 5px;
      cursor: pointer;}
    input{
      background-color: white;};
    button:hover{
		  background-color:${hoverTr} ;};
    fieldset{
      border: 1px solid darkblue;
      width:195px;};
      
    input:hover{
      cursor:pointer};`

const WaveVision = styled.div`
  margin:10px;
  border-radius:5px;
  background-color: #ffffff;
  `

