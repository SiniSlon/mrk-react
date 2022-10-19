import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mainFontFamily } from '../utils/stylesSettings';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const path = window.location.pathname;

  const handleLogout = () => {
    console.log('Log out');
  }

  return (
      <Body>
        <div className="header__wrapper">
          <Link to='/post' 
            className={
              path == '/post' || 
              path == '/post/sessions' || 
              path == '/post/database' ||
              path == '/post/settings' || 
              path == '/post/media' || 
              path == '/post/maps' ||
              path == '/post/analitic' ? 'active-link' : 'link'
            }
          >Пост обработки
          </Link>
          <Link to='/upload' className={path == '/upload' ? 'active-link' : 'link'}>История загрузок</Link>
          <Link to='/database' className={path == '/database'  ? 'active-link' : 'link'}>Настройка БД</Link>
          <Link to='/adminpanel' className={path == '/adminpanel' || path == '/adminpanel/logs' || path == '/adminpanel/adduser' ? 'active-link' : 'link'}>Панель администратора</Link>
        </div>
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

  .logout {
    display: flex;
    align-items: center;
    border: 2px solid #005aff;
    border-radius: 7px;
    padding: 5px;
    color: #005aff;
    font-family: ${mainFontFamily};
    margin-left: auto;
    margin-right: 100px;
    cursor: pointer;

    span {
      margin-right: 5px;
    }
  }

  .header__wrapper {
    display: flex;
    width: 100%;
    max-width: 800px;
    justify-content: space-around;

    .link {
      font-family: ${mainFontFamily};
      font-size: 18px;
      color: #005affb2;
      text-decoration: none;

      :hover {
        color: #005aff;
      }
    }

    .active-link {
      font-family: ${mainFontFamily};
      font-size: 18px;
      color: #005aff;
      font-weight: 500;
      text-decoration: none;
      position: relative;

      ::after {
        position: absolute;
        display: flex;
        width: 100%;
        height: 5px;
        background-color: #005aff;
        top: 30px;
        content: '';
      }
    }
  }
`;
