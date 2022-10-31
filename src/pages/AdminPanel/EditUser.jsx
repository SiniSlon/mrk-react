import { useEffect, useState } from 'react';
import { useForm, Controller, setValue } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getUserByName, changeUser } from '../../api/users'; 
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';
import Header from '../../components/Header';
import AdminNavBar from './components/AdminNavBar';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Loader from '../../components/Loader';

const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*!@#$%^&*(){}:;<>,.?~_=|-]).{4,16}$/;

const warningLogin = {
  max: 'Слишком длинный логин',
  required: 'Введите логин',
};

const warningPassword = {
  matches: 'Password must contain at least 1 lowercase letter, at least 1 uppercase letter, and 1 special character',
  min: 'Пароль должен быть минимум 4 символа',
  required: 'Введите пароль',
};

const warningAuthority = {
  required: 'Выберете роль',
};

const signupSchema = yup.object().shape({
  userName: yup.string().max(12, warningLogin.max).required(warningLogin.required),
  // oldPassword: yup.string().required(warningOldPassword.required),
  password: yup.string()
  // .matches(regexPassword, warningPassword.matches)
  // .min(6, warningPassword.min)
  .required(warningPassword.required)
  ,
  replay: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
  authority: yup.string().required(warningAuthority.required),
});

const EditUser = () => {
  const [ready, setReady] = useState(false);
  const [userName, setUserName] = useState({});
  const [authority, setAuthority] = useState('');
  // const { register, setValue } = useForm();

  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const paramsName = useParams();
  // console.log(paramsName)

  useEffect(() => {
    (async () => {
      try {
          // const response = await getUserByName(paramsName);
          // console.log('Get user >> ', response.data); 
          // setUserName(response.data.userName)
          // setValue('userName', response.data.userName)
          // setValue('authority', response.data.authority)
      } catch (e) {
        console.error('Error Edit User Admin >>> ', e)
      } finally {
        setReady(true);
      }
    })()
  }, [])

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      userName: '',
      password: '',
      replay: '',
      authority: ''
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log('New user >>> ', data)
      const { replay, ...rest } = data;
      console.log('userName >>> ', userName);

      const newData = {
        userName: userName,
        newName: rest.userName,
        password: rest.password,
        authority: rest.authority,
      }

      console.log('newData >>> ', newData)
      // console.log(newRole)

      // const resLogin = await changeUser(newData);
      // const resPassword = await updateUserPassword(newPassword);
      // const response = await createUser(rest);
      // dispatch(putUser(response.data.user));
      // console.log('RESPONSE', response);
      navigate('/adminpanel');
    } catch (e) {
      console.error('Error Edit User Admin >>> ', e);
    }
  };

  return (
    <>
      <Header/>

      {ready ? 
        <Main>
          <AdminNavBar/>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="title">Редактирование пользователя</h2>

              <FormWrapper >
                <label className="form-label">
                  {errors.userName ? <ErrMessage>{errors.userName.message}</ErrMessage> : 'Введите логин' }
                </label>
                <div className="input-wrapper">
                  <PersonIcon/>
                  <input 
                    className="login-input" 
                    placeholder="Логин"
                    {...register('userName')}
                  />
                </div>
              </FormWrapper>

           
              <FormWrapper >
                <label className="form-label">
                  {errors.password ? <ErrMessage>{errors.password.message}</ErrMessage> : 'Введите новый пароль' }
                </label>
                <div className="input-wrapper">
                  <LockIcon/>
                  <input 
                    className="password-input" 
                    placeholder="Новый пароль"
                    {...register('password')}
                  />
                </div>
              </FormWrapper>

            
              <FormWrapper >
                <label className="form-label">
                  {errors.replay ? <ErrMessage>{errors.replay.message}</ErrMessage> : 'Введите новый пароль еще раз' }
                </label>
                <div className="input-wrapper">
                  <LockIcon/>
                  <input 
                    className="password-input" 
                    placeholder="Повторите пароль"
                    {...register('replay')}
                  />
                </div>
              </FormWrapper>


              <FormWrapperSelect>
                <label className="form-label">
                  {errors.authority ? <ErrMessage>{errors.authority.message}</ErrMessage> : 'Выберете роль' }
                </label>

                <select className="select-input" {...register('authority')}>
                  <option value='ADMIN'>Администратор</option>
                  <option value='USER'>Пользователь</option>
                </select>
              </FormWrapperSelect>

            <button className="button" type='submit'>Add</button>
          </Form>
        </Main> : <Loader/>}
    </>
  )
}

export default EditUser;

const FormWrapperSelect = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px; 

  .form-label {
    font-family: ${mainFontFamily};
  }

  .select-input {
    font-family: ${mainFontFamily};
    padding: 5px;
    width: 160px;
    border-radius: 5px;
    outline: none;
    margin-left: 20px;  
    font-size: 16px;
    background-color: white;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .form-label {
    font-family: ${mainFontFamily};
    margin: 10px 0;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    padding-left: 10px;
  }
`;

const ErrMessage = styled.span `
  color: red;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffffd6;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  margin: 100px auto 0;

  .title {
    color: black;
    margin: 0 auto 20px;
    font-family: ${mainFontFamily};
  }

  .login-input {
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-family: ${mainFontFamily};
    font-size: 16px;
  }

  .password-input {
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-family: ${mainFontFamily};
    font-size: 16px;
  }

  .button {
    background-color: #4141c0;
    border: none;
    font-family: ${mainFontFamily};
    font-size: 16px;
    padding: 12px 25px;
    margin: 20px auto 0;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    width: 100px;

    :hover {
      background-color: #4141c0b3;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
`;
