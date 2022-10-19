import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';
import * as yup from 'yup';
import { createUser } from '../../api/users';
import Header from '../../components/Header';
import AdminNavBar from './components/AdminNavBar';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*!@#$%^&*(){}:;<>,.?~_=|-]).{4,16}$/;

const warningLogin = {
  max: 'Слишком длинное имя',
  required: 'Введите логин',
};
const warningPassword = {
  matches: 'Password must contain at least 1 lowercase letter, at least 1 uppercase letter, and 1 special character',
  min: 'Пароль должен быть минимум 4 символа',
  required: 'Введите пароль',
};

const signupSchema = yup.object().shape({
  userName: yup.string().max(12, warningLogin.max).required(warningLogin.required),
  password: yup.string()
    .min(4, warningPassword.min)
    .required(warningPassword.required)
    ,
  replay: yup.string().oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
});

const AddUser = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      userName: '',
      password: '',
      replay: '',
      authority: 'ADMIN'
    },
  });


  const onSubmit = async (data) => {
    try {
      // console.log('New user >> ', data)
      if (data.password !== data.replay) return;
      const { replay, ...rest } = data;
      console.log(rest);
      const response = await createUser(rest);
      // dispatch(putUser(response.data.user));
      console.log('RESPONSE', response);
      navigate('/adminpanel');
    } catch (e) {
      console.error('Error Add User >>> ', e);
    }
  };

  return (
    <Body>
      <Header/>

      <Main>
        <AdminNavBar/>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="title">Добавление пользователя</h2>

          <Controller control={control} render={({ field: { onChange, value } }) => (
              <FormWrapper errorState={!!errors.userName}>
                <label className="form-label">{errors.userName ? <ErrMessage>{errors.userName.message}</ErrMessage> : 'Введите логин' }</label>
                <div className="input-wrapper">
                  <PersonIcon/>
                  <input 
                    className="login-input" 
                    placeholder="Логин"
                    type="text"
                    id="input-userName"
                    value={value}
                    onChange={onChange}
                    {...register('userName')}
                  />
                </div>
              </FormWrapper>
            )}
            name="userName"
            rules={{ required: true }}
          />

          <Controller control={control} render={({ field: { onChange, value } }) => (
            <FormWrapper errorState={!!errors.password}>
              <label className="form-label">{errors.password ? <ErrMessage>{errors.password.message}</ErrMessage> : 'Введите пароль' }</label>
              <div className="input-wrapper">
                <LockIcon/>
                <input 
                  className="password-input" 
                  placeholder="Пароль"
                  type="text"
                  id="input-password"
                  value={value}
                  onChange={onChange}
                  {...register('password')}
                />
              </div>
            </FormWrapper>
            )}
            name="password"
            rules={{ required: true }}
          />

          <Controller control={control} render={({ field: { onChange, value } }) => (
            <FormWrapper errorState={!!errors.replay}>
              <label className="form-label">{errors.replay ? <ErrMessage>{errors.replay.message}</ErrMessage> : 'Введите пароль еще раз' }</label>
              <div className="input-wrapper">
                <LockIcon/>
                <input 
                  className="password-input" 
                  placeholder="Повторите пароль"
                  type="text"
                  id="input-replay"
                  value={value}
                  onChange={onChange}
                  {...register('replay')}
                />
              </div>
            </FormWrapper>
            )}
            name="replay"
            rules={{ required: true }}
          />

          <Controller control={control} render={({ field: { onChange, value } }) => (
            <FormWrapperSelect >
              <label className="form-label">Выберете роль</label>

              <select 
                className="select-input"
                value={value}
                onChange={onChange}
                {...register('authority')}
              >
                <option value='ADMIN'>Администратор</option>
                <option value='USER'>Пользователь</option>
              </select>
            </FormWrapperSelect>
            )}
            name="authority"
            rules={{ required: true }}
          />
          <button className="button" type='submit'>Добавить</button>
        </Form>
      </Main>

      <Footer>
        Фууутер
      </Footer>
    </Body>
  )
}

export default AddUser;

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
    width: 130px;

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
  height: calc(100vh - 100px);
`;

const Footer = styled.footer`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${mainBackground};
`;
