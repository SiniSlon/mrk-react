import styled from "styled-components";
import ssnArray from '../../../utils/tempSnn';
import {useState, useRef, useEffect} from 'react'
import Clear from '@mui/icons-material/Clear';
import Graph from '@mui/icons-material/LineAxis';

const NetAbonents =({ idArray, net, onClose }) => {
  const [build, setBuild] =useState(false)

  let canvasRef = useRef(null);
  let canva;
  let cx = '';
  let x1=10;
  let y1=80;

  
  
  useEffect(() => {
    canva = canvasRef.current
     cx = canva.getContext('2d')
  },[])

  const createNet = () => {
    const array = [];
  
    for ( let i = 0; i  < ssnArray.length; i++ ){
      if (idArray.includes(String(ssnArray[i].id))) {
      array.push(ssnArray[i])}
      console.log(array)
    };
  
    let ab_name = array.map(function(e) {return e.cx1});
    let cr_name = array.map(function(e) {return e.cx1b});

   canva = canvasRef.current;
    cx = canva.getContext('2d');
    // setBuild(true)
    setBuild(true)
    cr_name.forEach((item, index) => {
      cx.beginPath();
      cx.fillStyle='black';
      cx.lineTo(x1*2+10, y1*2+10);
      // cx.arc(x1*2+20,y1*2+20,1,0,0,false)
      cx.fillStyle='black';
      cx.fillText(ab_name[0], x1*2+10, y1*2+15);
      cx.strokeStyle='black';
      cx.fillStyle='red';
      cx.strokeRect(x1*2+5, y1*2+5,6,6);
      cx.fillRect(x1*2+10, y1*2+10,5,5);
      cx.strokeRect((x1*2+5)*index+1,(index+1*2*5)+10,6,6);
      cx.fillRect((x1*2+5)*index+1,(index+1*2*5)+10,5,5);
      cx.lineTo((x1*2+5)*index+1, (index+1*2*5)+10 );
      cx.fillStyle='black';
      cx.fillText(item,(x1*2+15)*index+1, (index+1*2*10)+15);
      cx.strokeStyle='black';
      cx.stroke();
    })     
  }

  const clearNet = () => {
    setBuild(false)
    canva = canvasRef.current;
    cx = canva.getContext('2d');

    cx.clearRect(0, 0, canva.width, canva.height);
  }

  return(
    <div>
      <canvas ref ={canvasRef}  width='800px' height='300px' style={{backgroundColor: "white", margin:'10px'}} />
      <ButtonSet>
        <Button onClick={createNet} disabled={build ? 'disabled' : ''}><Graph/>Построить сеть графиков</Button>
        <Button onClick={clearNet}><Clear/>Очистить</Button>
      </ButtonSet>
    </div>
  )
}

export default NetAbonents

const ButtonSet = styled.div`
  display:flex;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 5px;
  text-align: center;
  margin: 10px 0 0 10px;
  background-color: white;
  cursor:pointer;
  border: none;
`;