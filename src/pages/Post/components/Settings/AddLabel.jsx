import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as AxiosLabels from "../../../../api/services/labels";
import { mainFontFamily } from '../../../../utils/stylesSettings';
import Popup from '../Popup';

const warning = {
  number: 'Введите номер',
  minNumber: 'Минимальний номер -1',
  maxNumber: 'Максимальный номер 9999',
  title: 'Введите название',
  comment: 'Введите комментарий',
  maxComment: 'Максимальное количество символов - 250',
  color: 'Выберете цвет',
};

const loginSchema = yup.object({
  number: yup.number().min(-1, warning.minNumber).max(9999, warning.maxNumber).required(warning.number),
  title: yup.string().required(warning.title),
  comment: yup.string().max(250, warning.maxComment).required(warning.comment),
  color: yup.string().required(warning.color),
});

const AddLabel = (props) => {

  useEffect(()=>{
		setTimeout(()=>{setPopup('')},7000)
	},[])


  const [popup,setPopup] =useState('');

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      number: 0,
      title: '',
      comment: '',
      color: '#000000',
    },
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        number: data.number,
        name: data.title,
        comment: data.comment,
        color: data.color,
      }
      console.log('Create label >> ', payload)
      setPopup('ok')
      const response = await AxiosLabels.createNewLabel(payload);
      
      props.setShowAddLabel(false)
    } catch (e) {
      console.error('Error Add Label >>> ', e.response);
      const error = e.response.data.split(':')[1][0];
      if (error == 'L') {
        setError('number', {
          type: 'custom',
          message: 'Такой номер уже используется'
        }, { 
          shouldFocus: true 
        })
      } else if (error == 'c') {
        setError('title', {
          type: 'custom',
          message: 'Слишком длинное название'
        }, { 
          shouldFocus: true 
        })
      }  
    }
  }

  return (
    <Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <span className="close" onClick={() => props.setShowAddLabel(false)}>&times;</span>
        <h2>Новая метка</h2>

        {errors.number ? <label style={{color: 'red'}}>{errors.number.message}</label> : <label>Введите номер</label>}
        <input className='line__input' placeholder='Номер' type='number' min={-1} max={9999} {...register('number')}/>

        {errors.title ? <label style={{color: 'red'}}>{errors.title.message}</label> : <label>Введите название</label>}
        <input className='line__input' placeholder='Название' {...register('title')}/>

        {errors.comment ? <label style={{color: 'red'}}>{errors.comment.message}</label> : <label>Введите комментарий</label>}
        <input className='line__input' placeholder='Комментарий' {...register('comment')}/>

        {errors.color ? <label style={{color: 'red'}}>{errors.color.message}</label> : <label>Выберете цвет</label>}
        <input className='color__input' type='color' {...register('color')}/>

        <button className='submit-btn' type="submit">Добавить метку</button>
      </Form>
      {popup !=='' ? <Popup style={popup}/>:null}
    </Body>
  )
}

export default AddLabel;

const Body = styled.div`
  display: flex;
  background-color: #0000005c;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  width: 400px;
  height: 520px;
  padding: 10px 20px;
  margin: 200px auto 0;

  label {
    font-family: ${mainFontFamily};
    margin: 10px;
  }

  .line__input {
    font-size: 16px;
    padding: 10px;
    outline: none;
    font-family: ${mainFontFamily};
  }

  .color__input {
    margin: 0 10px;
    cursor: pointer;
  }

  .close {
    color: black;
    font-size: 40px;
    font-weight: bold;
    margin-left: auto;
    cursor: pointer;
  }

  h2 {
    margin: 0 auto 30px;
    font-family: ${mainFontFamily};
  }

  .submit-btn {
    font-size: 18px;
    margin: 0 auto;
    margin-top: 40px;
    width: 180px;
    height: 40px;
    background: white;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
    font-family: ${mainFontFamily};
  }
`;
