import { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../store/hooks";
import ReportDetails from "./ReportDetails";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import StopIcon from '@mui/icons-material/Stop';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SettingsIcons  from '@mui/icons-material/Settings';
import {hoverTr} from '../../../utils/stylesSettings'

const ReportsTable =() =>{
	const set = useAppSelector(state => state.settingsSlice.settings)
	const [details,setDetails] =useState(false);
    return(  
	<> 
		<ButtonSet>
			<input type='datetime-local' placeholder='Выберите дату создания отчета'/>
			<input type='datetime-local' placeholder='Выберите дату закрытия отчета'/>
			<input list='id' placeholder='Выберите пользователя'/>
			<datalist id='id'>
			<option>test</option>
			<option>no test</option>
			</datalist>
			<input type='text' placeholder='Введите идентификатор'/>
			<button onClick={()=>console.log('Search')} title='Нажмите для начала поиска'><ManageSearchIcon/><span>Поиск</span></button>
			<button onClick={()=>console.log('Stop')} title='Остановить поиск'><StopIcon/><span>Стоп</span></button>
			<button onClick={()=>console.log('Close')} title='Очистить фильтр'><CloseIcon/><span>Очистить</span></button>
		</ButtonSet>
		<FormDiv>
		<Bar>
			<ButtonDiv onClick={()=>console.log("export")} ><FileDownloadIcon/><span>Экспорт</span></ButtonDiv>
			<ButtonDiv onClick={()=>console.log("Report main")}><CheckIcon/><span>Сделать отчет текущим</span></ButtonDiv>
			<ButtonDiv onClick={()=>console.log('Close report')} ><CloseIcon/><span>Закрыть отчет</span></ButtonDiv>
			<ButtonDiv onClick={()=>console.log('Accept report')} ><VisibilityIcon/><span>Утвердить отчет</span></ButtonDiv>
			<ButtonDiv onClick={()=>console.log('Cancel Accept report')} ><DoDisturbIcon/><span>Отменить утверждение отчета</span></ButtonDiv>
	</Bar>
    <Table>
		<thead>
            <tr>
               <th className="header_smallColumn"> {set.settingsMain.lan =='eng' ? 'Number' :'Nomer' }</th>
				<th className="header_mediumColumn"> {set.settingsMain.lan =='eng' ? 'Name' :'Operator' }</th>
				<th className="header_smallColumn"> {set.settingsMain.lan =='eng' ? 'Date start' :'Data' }</th>
				<th className="header_smallColumn"> {set.settingsMain.lan =='eng' ? 'Date finish' :'Data end' }</th>
				<th className="header_smallColumn"> {set.settingsMain.lan =='eng' ? 'Acces' :'Ytv' }</th>
				<th className="header_smallColumn"> {set.settingsMain.lan =='eng' ? 'Date acces' :'Data ytv' }</th>
				<th className="header_largeColumn"> {set.settingsMain.lan =='eng' ? 'Comment' :'Komment' }</th>
				<th className="header_mediumColumn"> {set.settingsMain.lan =='eng' ? 'Details' :'Detali' }</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td className="body_smallColumn">11</td>
				<td className="body_mediumColumn">22</td>
				<td className="body_smallColumn">33</td>
				<td className="body_smallColumn">44</td>
				<td className="body_smallColumn">55</td>
				<td className="body_smallColumn">66</td>
				<td className="body_largeColumn">77</td>
				<td className="body_mediumColumn"><ButtonDiv onClick={()=>setDetails(s=>!s)} title='Click to see reports detail'><SettingsIcons/><span>Детали</span></ButtonDiv></td>
			</tr>
			<tr>
				<td className="body_smallColumn">11</td>
				<td className="body_mediumColumn">22</td>
				<td className="body_smallColumn">33</td>
				<td className="body_smallColumn">44</td>
				<td className="body_smallColumn">55</td>
				<td className="body_smallColumn">66</td>
				<td className="body_largeColumn">77</td>
				<td className="body_mediumColumn"><ButtonDiv onClick={()=>setDetails(s=>!s)}><SettingsIcons/><span>Детали</span></ButtonDiv></td>
			</tr>
			<tr>
				<td className="body_smallColumn">11</td>
				<td className="body_mediumColumn">22</td>
				<td className="body_smallColumn">33</td>
				<td className="body_smallColumn">44</td>
				<td className="body_smallColumn">55</td>
				<td className="body_smallColumn">66</td>
				<td className="body_largeColumn">77</td>
				<td className="body_mediumColumn"><ButtonDiv onClick={()=>setDetails(s=>!s)}><SettingsIcons/><span>Детали</span></ButtonDiv></td>
			</tr>
			<tr>
				<td className="body_smallColumn">11</td>
				<td className="body_mediumColumn">22</td>
				<td className="body_smallColumn">33</td>
				<td className="body_smallColumn">44</td>
				<td className="body_smallColumn">55</td>
				<td className="body_smallColumn">66</td>
				<td className="body_largeColumn">77</td>
				<td className="body_mediumColumn"><ButtonDiv onClick={()=>setDetails(s=>!s)}><SettingsIcons/><span>Детали</span></ButtonDiv></td>
			</tr>
		</tbody>
    </Table>
	</FormDiv>
	{details &&<ReportDetails/>}
			</>
)}
export default ReportsTable

const Table =styled.table `
  flex-direction: column;
  background-color:#ffffff;
  width:100%;
  border-radius: 10px;
	overflow-y: scroll;
	border-collapse: collapse;
    .header{
      font-weight:450;
	    font-size:16pt;
        &_mediumColumn{
          width:150px;
          justify-content: center};
        &_smallColumn{
          width:120px;
          justify-content: center;};
        &_largeColumn{
          width: 450px;
          justify-content: center;}}
    .body{
      font-size:14pt;
        &_mediumColumn{
          width:120px;
          justify-content: center;};
        &_smallColumn{
          width:100px;
          justify-content: center;};
        &_largeColumn{
          width: 450px;
          justify-content: center;
        }}
    tr{
      border-bottom:1px solid black;
      text-align: center;}
    tbody tr:hover{
      cursor:pointer;
      background-color:${hoverTr};}`;

const ButtonSet =styled.div`
	display:flex;
	flex-direction:row;
	margin: 10px;
	width:100%;
    input{
      border-radius: 10px;
      outline	:none ;
      height:30px;
      };
    button{
      display:flex;
      border: 1px solid #00369b;
      border-radius: 7px;
      padding: 5px;
      background-color: white;
      width:100px;
      align-items: center;
      outline:none;
      margin-left: 5px;
      cursor: pointer;};
	  button:hover{
      background-color: ${hoverTr};};
	  span{
      margin-right: 5px;}`;

const Bar =styled.div`
	flex-direction: row;
	justify-content: flex-end;
	width: 120px;
	margin-right: 30px;
	border-radius: 5px;`;

const FormDiv =styled.div`
	display:flex;
	margin: 10px;`;

const ButtonDiv =styled.div `
	display: flex;
  align-items: center;

  border: 1px solid #00369b;
  border-radius: 7px;
  padding: 5px;
  font-size:11pt;
	background-color: white;
  width:130px;
	margin: auto;
  cursor: pointer;
    span {
      margin-right: 5px;}
	  :hover{
		background-color:${hoverTr} ;}`
		
