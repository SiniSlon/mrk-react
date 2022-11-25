import styled from "styled-components";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { useState } from "react";
import ModalWindow from "./ModalWindow";
import {hoverTr} from '../../../../utils/stylesSettings';
import AddTask from "./AddTask";
import Pagination from "../../../../components/Pagination";


const TaskManage =()=>{
	const [addModule, setAddModule] = useState(false);
	const [deleteModule, setDeleteModule] = useState(false);
	const [viewTable, setViewTable] = useState(true); 
  const [page,setPage] =useState(1) 
  
	return(
			<Body>
        <Button>
					<button onClick={()=>setViewTable(s=>!s)}><CloseFullscreenIcon/><span>{viewTable ? 'Свернуть таблицу': 'Развернуть таблицу'}</span></button>
					<button  onClick={()=>setAddModule(s=>!s)}><AddIcon/><span>Добавить задание</span></button>
					{/*<button className="task-btn" title='Удалить задание' onClick={()=>setDeleteModule(s=>!s)}><CloseIcon/></button>
					<button className="task-btn" title='Запуск заданий'><PlayArrowIcon/></button>
					<button className="task-btn" title='Остановка заданий'><StopIcon/></button>
					<button className="task-btn"></button>
  <button className="task-btn"></button>   */}</Button>
				<Table>
					<thead>
						<tr>
							<th className="small">Тип</th>
							<th className="small">Приоритет</th>
							<th className="small">Состояние</th>
							<th className="medium">Автор</th>
							<th className="medium">Название</th>
							<th className="small">Старт задания</th>
							<th className="small">Конец задания</th>
							<th className="large">Содержание</th>
							<th className="small">Первое оповещение</th>
							<th className="small">Последнее оповещение</th>
							<th className="small">визуал</th>
							<th className="small">звук</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="small">tetet</td>
							<td className="small">etetet</td>
							<td className="small">etete</td>
							<td className="medium">etetet</td>
							<td className="medium">etetet</td>
							<td className="small">etetet</td>
							<td className="small">etetet</td>
							<td className="large">etet</td>
							<td className="small">eett</td>
							<td className="small">tetet</td>
							<td className="small"><input type='checkbox'/></td>
							<td className="small"><input type='checkbox'/></td>
						</tr>
            <tr>
							<td className="small">tetet</td>
							<td className="small">etetet</td>
							<td className="small">etete</td>
							<td className="medium">etetet</td>
							<td className="medium">etetet</td>
							<td className="small">etetet</td>
							<td className="small">etetet</td>
							<td className="large">etet</td>
							<td className="small">eett</td>
							<td className="small">tetet</td>
							<td className="small"><input type='checkbox'/></td>
							<td className="small"><input type='checkbox'/></td>
						</tr>
            <tr>
							<td className="small">tetet</td>
							<td className="small">etetet</td>
							<td className="small">etete</td>
							<td className="medium">etetet</td>
							<td className="medium">etetet</td>
							<td className="small">etetet</td>
							<td className="small">etetet</td>
							<td className="large">etet</td>
							<td className="small">eett</td>
							<td className="small">tetet</td>
							<td className="small"><input type='checkbox'/></td>
							<td className="small"><input type='checkbox'/></td>
						</tr>
            <tr>
							<td className="small">tetet</td>
							<td className="small">etetet</td>
							<td className="small">etete</td>
							<td className="medium">etetet</td>
							<td className="medium">etetet</td>
							<td className="small">etetet</td>
							<td className="small">etetet</td>
							<td className="large">etet</td>
							<td className="small">eett</td>
							<td className="small">tetet</td>
							<td className="small"><input type='checkbox'/></td>
							<td className="small"><input type='checkbox'/></td>
						</tr>
					</tbody>
				</Table>
        <Pagination  data={10} onChange={setPage}/>
					{viewTable && <TableTwo>
							<thead>
								<tr>
									<th className="header_small">Время оповещения</th>
									<th className="header_medium">АПК</th>
									<th className="header_large">Сообщения</th>
									<th className="header_medium">Статистика</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="body_small">1111</td>
									<td className="body_medium">222</td>
									<td className="body_large">333</td>
									<td className="body_medium">444</td>
								</tr>
                <tr>
									<td className="body_small">1111</td>
									<td className="body_medium">222</td>
									<td className="body_large">333</td>
									<td className="body_medium">444</td>
								</tr>
                <tr>
									<td className="body_small">1111</td>
									<td className="body_medium">222</td>
									<td className="body_large">333</td>
									<td className="body_medium">444</td>
								</tr>
                <tr>
									<td className="body_small">1111</td>
									<td className="body_medium">222</td>
									<td className="body_large">333</td>
									<td className="body_medium">444</td>
								</tr>
                <tr>
									<td className="body_small">1111</td>
									<td className="body_medium">222</td>
									<td className="body_large">333</td>
									<td className="body_medium">444</td>
								</tr>
							</tbody>
						</TableTwo>}
          {addModule && <AddTask setAddModule={setAddModule}/>}    
    </Body>
  )
}
export default TaskManage

const Body = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
.task-btn {
  background-color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  }`;
	
const Table =styled.table`
	flex-direction: column;
	width:100%;
	text-align: center;
	overflow-y: scroll;
 	margin-top: 5px;
	border-collapse: collapse;
  .small{
    width:90px;
    justify-content:center};
  .medium{
    width:100px;
    justify-content:center};
  .large{
    width:300px;
    justify-content:center};
  th{
    font-weight: 350;
    font-size: 14pt;
    };
  tbody tr{
    border-bottom: 1px solid gray;};
  td{
    font-size:12pt;};
    th td{margin-left:5px}
  tbody tr:hover{
    cursor:pointer;
    background-color:${hoverTr}}
  tbody{height:20px;
  overflow-y:scroll}`;

const TableTwo =styled.table`
  flex-direction: column;
	margin-top: 50px;
	padding:10px;
	text-align: center;
	border-collapse: collapse;
	width:100%;
  th{
    font-weight: 350;
    font-size: 14pt;};
  td{
    font-size:12pt;};
  tbody tr{
    border-bottom: 1px solid gray;}	
  .header{
    &_small{
      width:150px;
      justify-content:center}
    &_medium{
      width:300px;
      justify-content:center}
    &_large{
      width:500px;
      justify-content:center}}
  .body{
    &_small{
      width:150px;
      justify-content:center}
    &_medium{
      width:300px;
      justify-content:center}
    &_large{
      width:500px;
      justify-content:center}}
		tbody tr:hover{
			cursor:pointer;
			background-color:${hoverTr}};
      tbody{
        height:20px;
        overflow-y:scroll ;
      };`;

const Button =styled.div`
  display:flex;
  button{
    display:flex;
    justify-content: center;
    align-items: center ;
    border: 1px solid #00369b;
    border-radius: 7px;
    background-color: white;
    margin-right: 5px;
    cursor: pointer;}
	button:hover{
		background-color:${hoverTr} ;}`;
  
  

  