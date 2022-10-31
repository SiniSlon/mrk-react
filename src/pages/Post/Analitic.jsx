import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { mainBackground, mainFontFamily } from "../../utils/stylesSettings";
import PostNavBar from "./components/PostNavBar";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import data_pars from '../../utils/analiticChart';

const Analitic = () => {
let billing_info = data_pars.ssn.map(function(e){return e.billing_count; });
let traffic_info = data_pars.ssn.map(function(e){return e.trafic_count;});
let labels = data_pars.ssn.map(function(e) {return e.date_load;})

const ChartData = {
  labels: labels,
    
  datasets: [
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
    <>
      <Header/>
      <Main>
        <PostNavBar/>
        <form>
          <table>
            <thead>
              <tr>
                <th>1Тест</th>
                <th>2Тест</th>
                <th>3Тест</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
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
          />
        </TooMain>
      </Main>
    </>
  )
}

export default Analitic;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
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
