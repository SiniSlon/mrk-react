import styled from "styled-components";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { useState } from "react";
import ModalWindow from "../ModalWindow";
import {headerTh} from '../../../../utils/stylesSettings'


const TaskManage =()=>{
	const [addModule, setAddModule] = useState(false);
	const [deleteModule, setDeleteModule] = useState(false);
	const [viewTable, setViewTable] = useState(true); 
    
	return(
			<Body>
				<Side>
				<OneStr>
					<button className="task-btn" title='Свернуть таблицу оповещений' onClick={()=>setViewTable(s=>!s)}><CloseFullscreenIcon/></button>
					<button className="task-btn" title='Добавить задание'  onClick={()=>setAddModule(s=>!s)}><AddIcon/></button>
					<button className="task-btn" title='Удалить задание' onClick={()=>setDeleteModule(s=>!s)}><CloseIcon/></button>
					<button className="task-btn" title='Запуск заданий'><PlayArrowIcon/></button>
					<button className="task-btn" title='Остановка заданий'><StopIcon/></button>
					<button className="task-btn"></button>
					<button className="task-btn"></button>   
				</OneStr>
				<div>
				<Table>
					<thead> {/*table - Mining jobs*/}
						<tr>
							<th>Тип</th>
							<th>Приоритет</th>
							<th>Состояние</th>
							<th>Автор</th>
							<th>Название</th>
							<th>Старт задания</th>
							<th>Конец задания</th>
							<th>Содержание</th>
							<th>Время срабатывания</th>
							<th>время последнего сраб</th>
							<th>визуал</th>
							<th>звук</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td><input type='checkbox'/></td>
							<td><input type='checkbox'/></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td><input type='checkbox'/></td>
							<td><input type='checkbox'/></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td><input type='checkbox'/></td>
							<td><input type='checkbox'/></td>
						</tr>
					</tbody>
				</Table></div>
					{viewTable && 
					<Bottom>
						<TableTwo>
							<thead>
								<tr>
									<th>Время оповещения</th>
									<th>АПК</th>
									<th>Сообщения</th>
									<th>Статистика</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1111</td>
									<td>222</td>
									<td>333</td>
									<td>444</td>
								</tr>
								<tr>
									<td>1111</td>
									<td>222</td>
									<td>333</td>
									<td>444</td>
								</tr>
								<tr>
									<td>1111</td>
									<td>222</td>
									<td>333</td>
									<td>444</td>
								</tr>
							</tbody>
						</TableTwo>
					</Bottom>}
          {addModule && 
					<ModalWindow>
                <div>
									<button onClick={()=>setAddModule(s=>!s)}>Отмена</button>
								</div>
          </ModalWindow>}
          {deleteModule && 
					<ModalWindow>
                <div>
									<button onClick={()=>setDeleteModule(s=>!s)}>Отмена</button>
                </div></ModalWindow>}
      </Side>    
    </Body>
  )
}
export default TaskManage

const Body = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  top: 35px;
  margin-top:30px;
  margin-left:10px;
	
  padding: 10px;
  border-radius: 10px;
    .task-btn {
    background-color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  `;
	
  const Table =styled.div`
    text-align:center;
    margin-top: 10px;
	overflow-y: scroll;
        th{padding:10px;
            border-bottom: 1px solid darkblue;
            font-weight: 300;
        }
        tbody{border-bottom: 1px solid gray;margin-bottom:5px;
		height:360px;}
        tbody tr:hover{
            cursor:pointer;
                background-color:rgba(150, 199, 241,0.2)}
    `;

    const TableTwo =styled.table`
    width:73vw;
    margin-top: 30px;
	overflow-y: scroll;
		border-collapse: collapse;
  
     th{border-bottom: 1px solid darkblue;
	font-weight:300;
	background-color:${headerTh};
color:white	}
    tbody{border-bottom: 1px solid gray;
		text-align:center;
	height:200px;}
    tbody tr:hover{cursor:pointer;
                background-color:rgba(150, 199, 241,0.2)}`;

    const Side =styled.div`
        display:grid;   
        grid-template-areas:
        "a"
        "b"
        "c";`;

    const OneStr =styled.div`
    grid-area:"a";
        
    `;

		const Bottom=styled.div`
			position:fixed;
			bottom:150px;`;

		const Top=styled.div`
		position:fixed;
		overflow-y:scroll`;
   

  

  