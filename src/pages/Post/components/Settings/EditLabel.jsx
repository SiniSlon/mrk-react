import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as AxiosLabels from "../../../../api/labels";
import Loader from "../../../../components/Loader";
import { mainFontFamily } from '../../../../utils/stylesSettings';

const warning = {
  number: 'Введите номер',
  title: 'Введите название',
  maxTitle: 'Слишком длинное название',
  comment: 'Введите комментарий',
  maxComment: 'Максимальное количество символов - 250',
  color: 'Выберете цвет',
};

const loginSchema = yup.object({
  number: yup.string().required(warning.number),
  title: yup.string().max(15, warning.maxTitle).required(warning.title),
  comment: yup.string().max(250, warning.maxComment).required(warning.comment),
  color: yup.string().required(warning.color),
});

const EditLabel = (props) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await AxiosLabels.getLabelByNumber({labelNumber: props.editingId});

        setValue('number', response.data.number)
        setValue('title', response.data.name)
        setValue('comment', response.data.comment)
        setValue('color', response.data.color)
      } catch (e) {
        console.erre('Labels Edit Error >>> ', e)
      } finally {
        setReady(true)
      }
    })()
  }, [])

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    setValue
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      number: '',
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
      console.log('Edit label >> ', payload)
      
      const response = await AxiosLabels.updateLabel(payload);
      props.setShowEditLabel(false)
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
      } 
      // else if (error == 'c') {
      //   setError('title', {
      //     type: 'custom',
      //     message: 'Слишком длинное название'
      //   }, { 
      //     shouldFocus: true 
      //   })
      // }  
    }
  }
  

  return (
    <Body>
      
      {ready ? <Form onSubmit={handleSubmit(onSubmit)}>
        <span className="close" onClick={() => props.setShowEditLabel(false)}>&times;</span>
        <h2>Редактирование метки</h2>

        {errors.number ? <label style={{color: 'red'}}>{errors.number.message}</label> : <label>Номер</label>}
        <input disabled className='line__input' placeholder='Номер' type='number' min={-1} max={9999} {...register('number')}/>

        {errors.title ? <label style={{color: 'red'}}>{errors.title.message}</label> : <label>Название</label>}
        <input className='line__input' placeholder='Название' {...register('title')}/>

        {errors.comment ? <label style={{color: 'red'}}>{errors.comment.message}</label> : <label>Комментарий</label>}
        <input className='line__input' placeholder='Комментарий' {...register('comment')}/>

        {errors.color ? <label style={{color: 'red'}}>{errors.color.message}</label> : <label>Выберете цвет</label>}
        <input className='color__input' type='color' {...register('color')}/>

        <button className='submit-btn' type="submit">Сохранить</button>
      </Form> : <Loader/>
      }

    </Body>
  )
}

export default EditLabel;

const Body = styled.div`
  display: flex;
  background-color: #0000005c;
  height: 100vh;
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
