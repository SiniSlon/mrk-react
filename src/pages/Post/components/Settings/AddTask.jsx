
import { useState } from "react";
import * as yup from 'yup';
import styled from "styled-components";
import { mainFontFamily } from "../../../../utils/stylesSettings";
import { yupResolver } from "@hookform/resolvers/yup";

const warning = {
	nameTask:'Enter correct name',
	dateStart:'Enter start date',
	apk:'Enter name apk'
};

const test = yup.object({
	nameTask: yup.string().required(warning.nameTask),
	dateStart: yup.date().required(warning.dateStart),
	apk: yup.string().required(warning.color)	
})

const AddTask=(props)=>{
	const [checkDate,setCheckDate]=useState(false);
	const [nameTask,setNameTask] =useState('');
	const [visual,setVisual] =useState(true);
	const [sound,setSound] =useState(true);
	const [dateStart,setDateStart] =useState('')
	const [dateEnd,setDateEnd] =useState('')
	const [apk,setApk] =useState('')

	const onSubmit= async(data)=>{
			const datas ={
			name: nameTask,
			visual: visual,
			sound: sound,
			date_start: dateStart,
			date_end:dateEnd,
			apk:apk
		}
		console.log(datas)
}
	console.log(dateStart)
    return(
        <Body>
					<Block>
					<span onClick={()=>props.setAddModule(false)}>&times;</span>
					<h2>Новое задание</h2>
					<labe>Имя задания </labe>
					<input placeholder="Имя задания" type='text' value={nameTask} onChange={(e)=>setNameTask(e.target.value)}/>
					<label>Дата начала</label>
					<input type='date' value={dateStart} onChange={(e)=>setDateStart(e.target.value)}/>
					<div>
						<label>Установить дату окончания</label>
						<input type='checkbox'  checked={checkDate} onChange={()=>setCheckDate(s=>!s)}/>
					</div>	
					<label>Дата окончания</label>
					<input type='date' value={dateEnd} title={checkDate ? '': 'Выберите активировать дату окончания'} onChange={(e)=>setDateEnd(e.target.value)} disabled={checkDate ? null: 'disabled'}/>
					<label>АПК</label>
					<input type='text' value={apk} onChange={(e)=>setApk(e.target.value)}/>
					<div>
						<label>Визуальное оповещение</label>
						<input type='checkbox' checked={visual} onChange={()=>setVisual(s=>!s)}/>
					</div>
					<div>
						<label>Звуковое оповещение</label>
						<input type='checkbox' checked={sound} onChange={()=>setSound(s=>!s)}/>
					</div>
					<button onClick={onSubmit}>Отправить</button>
					</Block>
				</Body>
    )
}
export default AddTask

const Body=styled.div`
    display:flex;
		height: 100%;
		background-color: #0000005c;
		width:100%;
		position:fixed;
		top: 0;
		left:0;`;
const Block=styled.div`
		display:flex;
		flex-direction:column;
		background-color:white;
		width:400px;
		height:550px;
		padding: 10px 20px;
  	margin: 200px auto 0;
	span{
		font-size:40px;
		font-weight:500;
		margin-left:auto;
		cursor:pointer;}
	h2{
		text-align:center;
		font-family: ${mainFontFamily};}
	input{
		padding:10px;
		outline: none;
	};
	label{margin-top:10px;}
	div{margin-top:10px;};
	button{
		display:flex;
		width:150px;
		height:30px;
		background-color: white;
		margin:auto;
		padding-left: 30px;
		padding-top: 3px;
		font-size:16px;
		text-align	: center;
		font-family:${mainFontFamily};
	};
	button:hover{
		cursor:pointer
	}`;
		
