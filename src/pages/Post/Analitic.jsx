import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { mainBackground, mainFontFamily } from "../../utils/stylesSettings";
import PostNavBar from "./components/PostNavBar";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';



const Analitic = () => {
 // const [filter, setFilter] = useState(false);

  let data_pars ={
    "ssn" : [
        {
             "id":1,
             "file_name": 'ez051020221524',
             "date_load":'2022-10-05 15:24',
             "billing_count":124,
             "trafic_count":147,
             "first_session":'2022-10-05 06:14',
             "last_session":'2022-10-06 16:14',
             "status":'read',
             "log":'none',
             "personalization":'yes'},
         {
                 "id":2,
                 "file_name": 'ez051020221124',
                 "date_load":'2022-10-05 11:24',
                 "billing_count":235,
                 "trafic_count":117,
                 "first_session":'2022-10-05 07:14',
                 "last_session":'2022-10-06 18:14',
                 "status":'none',
                 "log":'none',
                 "personalization":'yes'},
           {
                "id":3,
                "file_name": 'ez051020221125',
                "date_load":'2022-10-05 19:24',
                "billing_count":215,
                "trafic_count":245,
                "first_session":'2022-10-05 01:14',
                "last_session":'2022-10-06 19:14',
                "status":'yes',
                "log":'yes',
                "personalization":'no'}
    
             ]
    }

let billing_info = data_pars.ssn.map(function(e){return e.billing_count; });
let traffic_info = data_pars.ssn.map(function(e){return e.trafic_count;});
let labels = data_pars.ssn.map(function(e) {return e.date_load;})

const ChartData = {
    labels: labels,
    
    datasets :[
        {
            data: billing_info,
            label:'billing',
            borderColor:"#3333ff",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            fill: true,
            lineTension: 0.5
        },
        {
            data: traffic_info,
            label: "traffic",
            borderColor: "#ff3333",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
            lineTension: 0.5
          }
    ]
}


  return (
    <Body>
      <Header/>
      <Main>
        <PostNavBar/>
        <form>
        <table>
            <thead>
              <tr>
                <th>Тест</th>
                <th>2Тест</th>
                <th>3Тест</th>
                </tr>
            </thead>
            <tbody>
              <tr><td>1</td>
              <td>2</td>
              <td>3</td></tr>
            </tbody>
          </table>
          </form>
          <TooMain>
        <Bar
        type="bar"
        width={160}
        height={60}
        options={{
          title: {
            display: true,
            text: "test1",
            fontSize: 20
          },
          legend: {
            display: false, //Is the legend shown?
            position: "top" //Position of the legend.
          }
        }}
        data={ChartData}
      /></TooMain>
      </Main>
    </Body>
  )
}

export default Analitic;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  /* padding: 10px; */
  position: relative;
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

const TooMain =styled.div`
  background-color: aliceblue;
  margin:10px;
  border-radius: 5px;
    table{
      border-bottom: 0.5px solid darkblue;
    }
    th{
      font-weight: 500;
      font-size: 16px;
    }
  `;

  
