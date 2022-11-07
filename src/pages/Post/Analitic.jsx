import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { mainBackground, mainFontFamily } from "../../utils/stylesSettings";
import PostNavBar from "./components/PostNavBar";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {hoverTr} from '../../utils/stylesSettings'



const Analitic = () => {
 // const [filter, setFilter] = useState(false);
  
  

  let data_pars ={
    "ssn" : [
        {   "id":1,
            "file_name": 'ez051020221524',
            "date_load":'2022-10-05 15:24',
            "billing_count":124,
            "trafic_count":0,
            "first_session":'2022-10-05 06:14',
            "last_session":'2022-10-06 16:14',
            "status":'read',
            "log":'none',
            "personalization":'yes'},
         {  "id":2,
            "file_name": 'ez051020221124',
            "date_load":'2022-10-05 11:24',
            "billing_count":235,
            "trafic_count":0,
            "first_session":'2022-10-05 07:14',
            "last_session":'2022-10-06 18:14',
            "status":'none',
            "log":'none',
            "personalization":'yes'},
          { "id":3,
            "file_name": 'ez051020221125',
            "date_load":'2022-10-05 19:24',
            "billing_count":0,
            "trafic_count":245,
            "first_session":'2022-10-05 01:14',
            "last_session":'2022-10-06 19:14',
            "status":'yes',
            "log":'yes',
            "personalization":'no'},
           {"id":4,
            "file_name": 'ez051043221126',
            "date_load":'2022-11-05 13:24',
            "billing_count":215,
            "trafic_count":101,
            "first_session":'2022-10-01 01:14',
            "last_session":'2022-10-02 19:14',
            "status":'yes',
            "log":'yes',
            "personalization":'no'},
           {"id":5,
            "file_name": 'ez051043221127',
            "date_load":'2022-11-05 15:24',
            "billing_count":124,
            "trafic_count":200,
            "first_session":'2022-10-01 01:13',
            "last_session":'2022-10-02 12:13',
            "status":'yes',
            "log":'yes',
            "personalization":'no'},
            {"id":6,
            "file_name": 'ez051043221128',
            "date_load":'2022-11-05 13:24',
            "billing_count":2,
            "trafic_count":293,
            "first_session":'2022-10-01 04:14',
            "last_session":'2022-10-02 15:14',
            "status":'yes',
            "log":'yes',
            "personalization":'no'},  
            {"id":7,
            "file_name": 'ez051043221125',
            "date_load":'2022-11-05 17:24',
            "billing_count":2,
            "trafic_count":293,
            "first_session":'2022-10-01 06:14',
            "last_session":'2022-10-02 17:14',
            "status":'yes',
            "log":'yes',
            "personalization":'no'},
             ]
    }

let billing_info = data_pars.ssn.map(function(e){return e.billing_count;});
let traffic_info = data_pars.ssn.map(function(e){return e.trafic_count;});

const test=billing_info.reduce((acc, el) => {acc[el] = (acc[el] || 0) + 1; return acc;}, {})
const traf=traffic_info.reduce((acc,el)=> {acc[el]=(acc[el]|| 0)+1; return acc;},{})

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
              <tr onClick={()=>setValue(ChartDatas)}>
                <td>2</td>
                <td>Traffic</td>
                <td>{traffic_info.length}</td>
                <td>{traffic_info.filter(x=>x!=0).length}</td>
                <td>{traffic_info.filter(x=>x===0).length}</td>
                <td>{Math.min(...traffic_info)}</td>
                <td>{Math.max(...traffic_info)}</td>
                <td>{traffic_info.join(", ")}</td>
              </tr>
            </tbody>
          </Table>
          <TooMain>
        <Bar
        type="bar"
        width={160}
        height={60}
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
}
td{
  font-size:12pt;
  border-left: 1px solid gray;
  padding:5px;
  }
tbody tr{
  border-bottom: 1px solid gray;
  }`;
  
