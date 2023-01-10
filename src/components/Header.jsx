import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mainFontFamily } from '../utils/stylesSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { logoutUser, putUser } from '../store/reducers/user';

// console.log('Header out');

const Header = () => {
  const user = useAppSelector((state) => state.userSlice.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const path = window.location.pathname.split('/')[1];

  // console.log('Header in');

  const handleLogout = () => {
    console.log('Log out');
    dispatch(logoutUser())
    navigate('/login')
  }

  return (
    <Body>
      <nav className="nav">
        <NavLink to='/post' className={({isActive}) => isActive ? 'link active' : 'link'}>Пост обработки</NavLink>
        <NavLink to='/upload' className={({isActive}) => isActive ? 'link active' : 'link'}>Загрузка данных</NavLink>
        <NavLink to='/adminpanel' className={({isActive}) => isActive ? 'link active' : 'link'}>Панель администратора</NavLink>
        <NavLink to='/handbooks' className={({isActive}) => isActive ? 'link active' : 'link'}>Справочник</NavLink>
      </nav>

      {user && <div className='username'>{user.role}</div>}
      <div className="logout" onClick={handleLogout}><span>Выйти</span><LogoutIcon/></div>
    </Body>
  )
}

export default Header;

const Body = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  background-color: #ffffff;
  
  .nav {
    display: flex;
    width: 100%;
    max-width: 800px;
    justify-content: space-around;

    .link {
      font-family: ${mainFontFamily};
      font-size: 18px;
      color: #252f40;
      text-decoration: none;
    }

    .active {
      color: #252f40;
      font-weight: 600;
    }
  }
  
  .username {
    font-size: 18px;
    font-family: ${mainFontFamily};
    margin-left: auto;
  }

  .logout {
    display: flex;
    align-items: center;
    border: 2px solid #252f40;
    border-radius: 7px;
    padding: 5px;
    color: #252f40;
    font-family: ${mainFontFamily};
    margin-left: auto;
    margin-right: 100px;
    cursor: pointer;

    span {
      margin-right: 5px;
    }
  }

  .username {
    font-size: 18px;
    font-family: ${mainFontFamily};
    margin-left: auto;
  }

  .header__wrapper {
    display: flex;
    width: 100%;
    max-width: 800px;
    justify-content: space-around;

    .link {
      font-family: ${mainFontFamily};
      font-size: 18px;
      color: #252f40;
      text-decoration: none;

      /* :hover {
        color: #005aff;
      } */
    }

    .active {
      color: #252f40;
      font-weight: 600;

      /* ::after {
        position: absolute;
        display: flex;
        width: 100%;
        height: 5px;
        background-color: #005aff;
        top: 30px;
        content: '';
      } */
    }
  }
`;
