import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { mainBackground, mainFontFamily } from "../../utils/stylesSettings";
import PostNavBar from "./components/PostNavBar";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {hoverTr} from '../../utils/stylesSettings'
import * as js from '../../utils/analiticChart'

const Analitic = () => {
let  datas = js.data_pars; 
let ab_data = js.cards;
let billing_info = datas.ssn.map(function(e){return e.billing_count;});
let traffic_info = datas.ssn.map(function(e){return e.trafic_count;});
let imsi =ab_data.abonents_data.map(function(e){return e.IMSI});
let imei =ab_data.abonents_data.map(function(e){return e.IMEI});
let country_ab =ab_data.abonents_data.map(function(e){return e.country})
const test=billing_info.reduce((acc, el) => {acc[el] = (acc[el] || 0) + 1; return acc;}, {})
const traf=traffic_info.reduce((acc,el)=> {acc[el]=(acc[el]|| 0)+1; return acc;},{})
const ab_imsi=imsi.reduce((acc,el)=> {acc[el]=(acc[el]|| 0)+1; return acc;},{})
const ab_imei=imei.reduce((acc,el)=>{acc[el]=(acc[el]|| 0)+1; return acc;},{})
const countr_ab =country_ab.reduce((acc,el)=> {acc[el]=(acc[el]|| 0)+1; return acc;},{})
const countrAsce = [...country_ab];
const countrDesce = [...country_ab];
const countrAsc = countrAsce.sort((a,b)=> a.localeCompare(b));
const countrDesc = countrDesce.sort((a,b)=>b.localeCompare(a));


const ChartData = {
    labels: Object.keys(test),
    datasets :[
        { data: Object.values(test),
          label:'billing',
          borderColor:"#3333ff",
          backgroundColor: "rgba(0, 0, 255, 0.8)",
          fill: true,
          lineTension: 0.8
        }
    ]
}
const [value,setValue]=useState(ChartData);
const ChartDatas = {
  labels: Object.keys(traf),
  datasets :[
      { data: Object.values(traf),
        label: "traffic",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.8)",
        fill: true,
        lineTension: 0.8}
  ]
}
const ChartAbImsi = {
  labels: Object.keys(ab_imsi),
  datasets :[
      { data: Object.values(ab_imsi),
        label: "IMSI",
        borderColor: "#ad33ff",
        backgroundColor: "rgba(126, 15, 120, 0.8)",
        fill: true,
        lineTension: 0.8}
  ]
}

const ChartAbImei = {
  labels: Object.keys(ab_imei),
  datasets :[
      { data: Object.values(ab_imei),
        label: "IMEI",
        borderColor: "#d1930c",
        backgroundColor: "rgba(196, 117, 0, 0.8)",
        fill: true,
        lineTension: 0.8}
  ]
}

const ChartAbCountry = {
  labels : Object.keys(countr_ab),
  datasets :[
    { data: Object.values(countr_ab),
      label:'Country',
      borderColor:'#032963',
      backgroundColor:'rgba(4, 34, 133, 0.8)',
      fill:true,
      lineTension:0.8
    }
  ]
}

  return (
    <>
      <Header/>
      <Main>
        <PostNavBar/>
        <Table>
            <thead>
              <tr>
                <th>N</th>
                <th>Name</th>
                <th>Diffrent values</th>
                <th>Not null values</th>
                <th>Null values</th>
                <th>Min values</th>
                <th>Max values</th>
                <th>Values</th>
                </tr>
            </thead>
            <tbody>
              <tr onClick={()=>setValue(ChartData)}>
                <td>1</td>
                <td>Billing</td>
                <td>{billing_info.length}</td>
                <td>{billing_info.filter(x=>x!=0).length}</td>
                <td>{billing_info.filter(x=>x===0).length}</td>
                <td>{Math.min(...billing_info)}</td>
                <td>{Math.max(...billing_info)}</td>
                <td>{billing_info.join(", ")}</td>
              </tr>
              <tr onClick={()=>setValue(ChartAbImsi)}>
                <td>2</td>
                <td>Traffic</td>
                <td>{traffic_info.length}</td>
                <td>{traffic_info.filter(x=>x!=0).length}</td>
                <td>{traffic_info.filter(x=>x===0).length}</td>
                <td>{Math.min(...traffic_info)}</td>
                <td>{Math.max(...traffic_info)}</td>
                <td>{traffic_info.join(", ")}</td>
              </tr>
              <tr onClick={()=>setValue(ChartDatas)}>
                <td>3</td>
                <td>IMSI</td>
                <td>{imsi.length}</td>
                <td>{imsi.filter(x=>x!=0).length}</td>
                <td>{imsi.filter(x=>x===0).length}</td>
                <td>{Math.min(...imsi)}</td>
                <td>{Math.max(...imsi)}</td>
                <td>{imsi.join(", ")}</td>
              </tr>
              <tr onClick={()=>setValue(ChartAbImei)}>
                <td>4</td>
                <td>IMEI</td>
                <td>{imei.length}</td>
                <td>{imei.filter(x=>x!=0).length}</td>
                <td>{imei.filter(x=>x===0).length}</td>
                <td>{Math.min(...imei)}</td>
                <td>{Math.max(...imei)}</td>
                <td>{imei.join(", ")}</td>
              </tr> 
               <tr onClick={()=>setValue(ChartAbCountry)}>
                <td>5</td>
                <td>Country</td>
                <td>{country_ab.length}</td>
                <td>{country_ab.filter(x=>x!=0).length}</td>
                <td>{country_ab.filter(x=>x===0).length}</td>
                <td>{countrDesc[0]}</td>
                <td>{countrAsc[0]}</td>
                <td>{country_ab.join(", ")}</td>
              </tr> 
            </tbody>
          </Table>
          <TooMain>
        <Bar
        type="bar"
        width={160}
        height={50}
        options={{
          title: {
            display: true,
            text: "test1",
            fontSize: 18
          },
          legend: {
            display: false, //Is the legend shown?
            position: "top" //Position of the legend.
          }
        }}
       data={value}
      /></TooMain>
      </Main>
    </>
  )
}

export default Analitic;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  position: relative;
  background: ${mainBackground};
`;

const TooMain =styled.div`
  background-color: aliceblue;
  margin:10px;
  border-radius: 5px;
  `;

const Table =styled.table`
  background-color:white;
  margin:10px;
  border-radius: 10px;
  border-collapse:collapse;
th{
  font-size:14pt} 
tr{
  text-align:center;};
tbody tr:hover{
  cursor:pointer;
  background-color:${hoverTr};
  tbody{
    height :150px;
    overflow-y: scroll;
  }
}

td:first-child{
  font-size:12pt;
  border-left: none;
  padding:5px;
}

td{
  font-size:12pt;
  border-left: 1px solid gray;
  padding:5px;
  }
 
tbody tr{
  border-bottom: 1px solid gray;
  }`;
  
