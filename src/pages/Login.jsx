import { useLocation, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { mainBackground, mainFontFamily } from '../utils/stylesSettings';
import * as yup from 'yup';
import { loginUser } from '../api/users';
import { useAppDispatch } from '../store/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { putUser } from '../store/reducers/user';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const warningUserName = {
  login: 'Неправильный логин',
  required: 'Введите логин',
};

const warningPassword = {
  password: 'Неправильный пароль',
  required: 'Введите пароль',
};

const loginSchema = yup.object({
  userName: yup.string().required(warningUserName.required),
  password: yup.string().required(warningPassword.required),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const from = location.state || { from: { pathname: '/' } };

  console.log(from);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await loginUser(data);
      dispatch(putUser(response.data[0]));
      console.log('Response Login >> ', response);

      navigate(from.from.pathname, { replace: true });
    } catch (e) {
      console.error('Error Login >>> ', e.response);
    }
  };

  return (
    <Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Вход</FormTitle>

        <Controller 
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormWrapper errorState={!!errors.userName}>
              <label className="form-label" htmlFor='userName'>{errors.userName ? <span style={{color: 'red'}}>{errors.userName.message}</span> : 'Введите логин'}</label>

              <div className="input-wrapper">
                <PersonIcon/>

                <input className='login-input'
                  type="text"
                  id="userName"
                  placeholder='Логин'
                  value={value}
                  {...register('userName')}
                />
              </div>
            </FormWrapper>
          )}
          name="userName"
          rules={{ required: true }}
        />

        <Controller 
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormWrapper errorState={!!errors.password}>
              <label className="form-label" htmlFor='password'>{errors.password ? <span style={{color: 'red'}}>{errors.password.message}</span> : 'Введите пароль'}</label>

              <div className="input-wrapper">
                <LockIcon/>

                <input className='password-input'
                  type="password"
                  id="password"
                  placeholder='Пароль'
                  value={value}
                  {...register('password')}
                />
              </div>
            </FormWrapper>
          )}
          name="password"
          rules={{ required: true }}
        />

        <button className="button" type='submit'>Войти</button>

      </Form>
    </Body>
  )
}

export default Login;

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


  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

const FormTitle = styled.h2`
  font-family: ${mainFontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #0D1821;
  margin: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #ffffffd6;
  font-family: ${mainFontFamily};
  align-items: center;
  color: #0D1821;
  padding: 30px;  
  margin-bottom: 50px;

  .button {
    background-color: #4141c0;
    border: none;
    font-family: ${mainFontFamily};
    font-size: 16px;
    padding: 12px 25px;
    margin-top: 20px;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    cursor: pointer;

    :hover {
      background-color: #4141c0b3;
    }
  }
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${mainBackground};
`;
