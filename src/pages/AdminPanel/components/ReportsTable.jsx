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
import Reports from '../../../utils/tempReport'
import {hoverTr} from '../../../utils/stylesSettings'
import { ImportedXmlComponent } from "docx";

const ReportsTable = () => {
	const set = useAppSelector(state => state.settingsSlice.common)
	const [details, setDetails] = useState(false);
	const [ytv, setYtv] = useState(false);
	const [closeReport, setCloseReport] = useState('') 

	const handleApprove = () => {
		setYtv(true)
	}

	const handleCurrentReport = () => {
		setCloseReport('')
	}

	const handleCloseReport = () => {
		let today = new Date();
		setCloseReport(today.getDate()+'-'+today.getMonth()+'-'+today.getFullYear());
		//console.log(closeReport)
	}

	const handleRefuse =()=>{
		setYtv(false)
	}

	return (  
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
				<button onClick={() => console.log('Search')} title='Нажмите для начала поиска'><ManageSearchIcon/>Поиск</button>
				<button onClick={() => console.log('Stop')} title='Остановить поиск'><StopIcon/>Стоп</button>
				<button onClick={() => console.log('Close')} title='Очистить фильтр'><CloseIcon/>Очистить</button>
			</ButtonSet>
			<FormDiv>
			<Bar>
				<ButtonDiv onClick={()=>console.log("export")} ><FileDownloadIcon/><span>Экспорт</span></ButtonDiv>
				<ButtonDiv onClick={handleCurrentReport}><CheckIcon/><span>Сделать отчет текущим</span></ButtonDiv>
				<ButtonDiv onClick={handleCloseReport} ><CloseIcon/><span>Закрыть отчет</span></ButtonDiv>
				<ButtonDiv onClick={handleApprove} disabled={ytv? "": "disabled"}><VisibilityIcon/><span>Утвердить отчет</span></ButtonDiv>
				<ButtonDiv onClick={handleRefuse}  disabled={!ytv}><DoDisturbIcon/><span>Отменить утверждение отчета</span></ButtonDiv>
				</Bar>
			</FormDiv>
			
			<Table>
				<thead>
					<tr>
						<th className="header_smallColumn"> {set.language =='eng' ? 'Number' :'Nomer' }</th>
						<th className="header_mediumColumn"> {set.language =='eng' ? 'Name' :'Operator' }</th>
						<th className="header_smallColumn"> {set.language =='eng' ? 'Date start' :'Data' }</th>
						<th className="header_smallColumn"> {set.language =='eng' ? 'Date finish' :'Data end' }</th>
						<th className="header_smallColumn"> {set.language =='eng' ? 'Date acces' :'Data ytv' }</th>
						<th className="header_largeColumn"> {set.language =='eng' ? 'Comment' :'Komment' }</th>
						<th className="header_mediumColumn"> {set.language =='eng' ? 'Details' :'Detali' }</th>
					</tr>
				</thead>
				<tbody>
					{ Reports.map((item) =>(
						<tr onClick={()=>setDetails(s=>!s)} key={item.id}>
							<td className="body_smallColumn">{item.id}</td>
							<td className="body_mediumColumn">{item.creator}</td>
							<td className="body_smallColumn">{item.open_date}</td>
							<td className="body_smallColumn">{item.close_date}</td>
							<td className="body_smallColumn">{item.accept_date}</td>
							<td className="body_largeColumn">{item.comment}</td>
							<td className="body_mediumColumn" ><span>Детали</span></td>
						</tr>
					))}
				</tbody>
			</Table>
			{details &&<ReportDetails/>}

		</>
	)
}

export default ReportsTable

const Table = styled.table`
  flex-direction: column;
  background-color:#ffffff;
  width:100%;
  border-radius: 10px;
	overflow-y: scroll;
	border-collapse: collapse;

	.header{
		font-weight:450;
		font-size:14pt;
		
		&_mediumColumn {
			width:150px;
			justify-content: center
		}

		&_smallColumn {
			width:120px;
			justify-content: center;
		}
		
		&_largeColumn {
			width: 450px;
			justify-content: center;
		}
	}

	.body{
		font-size:12pt;
		&_mediumColumn {
			width:120px;
			justify-content: center;
		}

		&_smallColumn {
			width:100px;
			justify-content: center;
		}

		&_largeColumn {
			width: 450px;
			justify-content: center;
		}
	}
	
	tr {
		border-bottom:1px solid black;
		text-align: center;
	}

	tr:last-child {
		border-bottom:none;
		text-align: center;
	}

	tbody tr:hover {
		cursor:pointer;
		background-color:${hoverTr};
	  border-radius: 7px;
	}
`;

const ButtonSet = styled.div`
	display:flex;
	flex-direction:row;
	margin: 10px;
	
	input{
		border-radius: 10px;
	  border:none;
	  padding: 3px 10px;
	  margin-right: 7px;
		outline:none;
		height:30px;
	};

	button {
		display:flex;
		border: 1px solid #00369b;
		border-radius: 7px;
		padding: 5px;
		background-color: white;
		width:100px;
		align-items: center;
		outline:none;
		margin-left: 5px;
		cursor: pointer;
	};

	button:hover {
		background-color: ${hoverTr};
	};

	span {
		margin-right: 5px;
	}
`;

const Bar = styled.div`
	display: flex;
	width: 120px;
	height:50px;
	margin-left: 10px;
	border-radius: 5px;
`;

const FormDiv = styled.div`
	display:flex;
	margin: 10px;
`;

const ButtonDiv = styled.div `
  display: flex;
  height:40px;
  align-items:center;
  border: 1px solid #00369b;
  border-radius: 7px;
  padding: 5px;
  font-size:8pt;
  background-color: white;
  width:130px;
  margin: auto;
  cursor: pointer;

  span {
		text-align: center;
		align-items: center;
		margin-right: 5px;
	}
	
	:hover {
		background-color:${hoverTr} ;
	}
`;