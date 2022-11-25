import { useState } from "react";
import * as yup from 'yup';
import styled from "styled-components";
import { mainFontFamily } from "../../../../utils/stylesSettings";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';

const warningNameTask = {
	required: 'Введите name',
};
  
const warningDateStart = {
	required: 'Введите date',
};
const warningApk = {
	required: 'Введите apk',
};

const addTasks = yup.object({
	nameTask: yup.string().required(warningNameTask.required),
	dateStart: yup.string().required(warningDateStart.required),
	apk: yup.string().required(warningApk.required),
});

const AddTask = (props) => {
	const [checkDate,setCheckDate]=useState(false);
	const [visual,setVisual] =useState(true);
	const [sound,setSound] =useState(true);
	const [dateEnd,setDateEnd] =useState('')
	
  const {
    handleSubmit,
    register,
    formState:{ errors },
  } = useForm({
    resolver: yupResolver(addTasks),
    defaultValues: {
      nameTask: '',
      dateStart: '',
      apk: '',
    },
  });


	const onSubmit = async (data) => {
    try {
		console.log('Task data >>> ', data);
		} catch (e) {
			console.error('Error Add Task >>> ', e);
			const error = e.response.data.split(':')[1][0];
    }
  }
	
  return(
    <Body>		
        <Form onSubmit={handleSubmit(onSubmit)}>
         <span onClick={()=>props.setAddModule(false)}>&times;</span>
        <h2>Новое задание</h2>
		{errors.nameTask?<ErrMessage>{errors.nameTask.message}</ErrMessage> :<label>Имя задания </label>}
        <input  type='text' {...register('nameTask')}/>
		{errors.dateStart?<ErrMessage>{errors.dateStart.message}</ErrMessage> :<label>Дата начала</label>}
        <input type='date' {...register('dateStart')}/>

        <div>
          <label>Установить дату окончания</label>
          <input type='checkbox'  checked={checkDate} onChange={()=>setCheckDate(s=>!s)}/>
        </div>	

        <label>Дата окончания</label>
        <input type='date' value={dateEnd} title={checkDate ? '': 'Выберите активировать дату окончания'} onChange={(e)=>setDateEnd(e.target.value)} disabled={checkDate ? null: 'disabled'}/>
        
        {errors.apk ? <ErrMessage>{errors.apk.message}</ErrMessage> : <label>АПК</label>}
        <input type='text' {...register('apk')}/>

        <div>
          <label>Визуальное оповещение</label>
          <input type='checkbox' checked={visual} onChange={()=>setVisual(s=>!s)}/>
        </div>

        <div>
          <label>Звуковое оповещение</label>
          <input type='checkbox' checked={sound} onChange={()=>setSound(s=>!s)}/>
        </div>

		<button type='submit'>Отправить</button>
      </Form>
	  
    </Body>
  )
}
export default AddTask

const Body = styled.div`
    display:flex;
		height: 100%;
		background-color: #0000005c;
		width:100%;
		position:fixed;
		top: 0;
		left:0;
`;
const ErrMessage = styled.label `
  color: #ff0707;
`;
const Form=styled.form`
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
		