import { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../store/hooks";
import ModalWindow from "../../Post/components/ModalWindow";
import ReportDetails from "./ReportDetails";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import StopIcon from '@mui/icons-material/Stop';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SettingsIcons  from '@mui/icons-material/Settings'

const ReportsTable =() =>{
	const set = useAppSelector(state => state.settingsSlice.common)
	const [details, setDetails] = useState(false);

    return(  
	<> 
		<ButtonSet>
			<input type='datetime-local' title='Choose date start Reports'/>
			<input type='datetime-local' title='Choose date closed Reports'/>
			<input list='id' title='Choose users reports'/>
			<datalist id='id'>
			<option>test</option>
			<option>no test</option>
			</datalist>
			<input type='text' title='Write TFOP, IMEI,IMSI or another identificator'/>
			<ButtonDiv onClick={()=>console.log('Search')} title='Click to search by choosen parametrs'><ManageSearchIcon/><span>Search</span></ButtonDiv>
			<ButtonDiv onClick={()=>console.log('Stop')} title='Stop search'><StopIcon/><span>Stop</span></ButtonDiv>
			<ButtonDiv onClick={()=>console.log('Close')} title='Clean filter'><CloseIcon/><span>Close</span></ButtonDiv>
		</ButtonSet>
		<FormDiv>
		<Bar>
			<ButtonDiv onClick={()=>console.log("export")} title='Export choosen reports by text reports'><FileDownloadIcon/><span>Export</span></ButtonDiv>
			<ButtonDiv onClick={()=>console.log("Report main")} title='Make choosen reports actual'><CheckIcon/><span>Make report actual</span></ButtonDiv>
			<ButtonDiv onClick={()=>console.log('Close report')} title='Close choosen reports'><CloseIcon/><span>Close</span></ButtonDiv>
			<ButtonDiv onClick={()=>console.log('Accept report')} title='Accept choosen reports'><VisibilityIcon/><span>Accept</span></ButtonDiv>
			<ButtonDiv onClick={()=>console.log('Cancel Accept report')} title='Denied accept choosen report'><DoDisturbIcon/><span>Cancel accept</span></ButtonDiv>
	</Bar>
    <Table>
		<thead>
            <tr>
               <th> {set.language =='eng' ? 'Number' :'Nomer' }</th>
				<th> {set.language =='eng' ? 'Name' :'Operator' }</th>
				<th> {set.language =='eng' ? 'Date start' :'Data' }</th>
				<th> {set.language =='eng' ? 'Date finish' :'Data end' }</th>
				<th> {set.language =='eng' ? 'Acces' :'Ytv' }</th>
				<th> {set.language =='eng' ? 'Date acces' :'Data ytv' }</th>
				<th> {set.language =='eng' ? 'Comment' :'Komment' }</th>
				<th> {set.language =='eng' ? 'Details' :'Detali' }</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>11</td>
				<td>22</td>
				<td>33</td>
				<td>44</td>
				<td>55</td>
				<td>66</td>
				<td>77</td>
				<td><ButtonDiv onClick={()=>setDetails(s=>!s)} title='Click to see reports detail'><SettingsIcons/><span>Details</span></ButtonDiv></td>
			</tr>
			<tr>
				<td>11</td>
				<td>22</td>
				<td>33</td>
				<td>44</td>
				<td>55</td>
				<td>66</td>
				<td>77</td>
				<td><ButtonDiv onClick={()=>setDetails(s=>!s)}><SettingsIcons/><span>Details</span></ButtonDiv></td>
			</tr>
			<tr>
				<td>11</td>
				<td>22</td>
				<td>33</td>
				<td>44</td>
				<td>55</td>
				<td>66</td>
				<td>77</td>
				<td><ButtonDiv onClick={()=>setDetails(s=>!s)}><SettingsIcons/><span>Details</span></ButtonDiv></td>
			</tr>
			<tr>
				<td>11</td>
				<td>22</td>
				<td>33</td>
				<td>44</td>
				<td>55</td>
				<td>66</td>
				<td>77</td>
				<td><ButtonDiv onClick={()=>setDetails(s=>!s)}><SettingsIcons/><span>Details</span></ButtonDiv></td>
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
th{font-weight:450;
	font-size:16pt;}
td{font-size:14pt;}
tr{
	border-bottom:1px solid black;
	border-collapse: collapse;
	text-align: center;
	}
tbody tr:hover{
	cursor:pointer;
	}`;

const ButtonSet =styled.div`
	display:flex;
	flex-direction:row;
	margin: 5px;
	width:100%;
input{
	border-radius: 10px;
	outline	:none ;
	height:50px;
	}`;

const Bar =styled.div`
	flex-direction: row;
	justify-content: flex-end;
	width: 120px;
	margin-right: 10px;
	border-radius: 5px;
	`;

const FormDiv =styled.div`
	display:flex;
	margin: 5px;`;

const ButtonDiv =styled.div `
	display: flex;
    align-items: center;
    border: 2px solid #005aff;
    border-radius: 7px;
    padding: 5px;
	background-color: white;
    color: #0104a5;
    width:100px;
    cursor: pointer;
:hover{
	transform: scale(1.05);
	opacity:0.6;}
span {
    margin-right: 5px;
    }`
		
