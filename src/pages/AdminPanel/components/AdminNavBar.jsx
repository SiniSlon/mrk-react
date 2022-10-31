import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mainFontFamily } from '../../../utils/stylesSettings';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const AdminNavBar = () => {
  const path = window.location.pathname;

  return (
    <Body>
      <Link to='/adminpanel' className={path == '/adminpanel' || path == '/adminpanel/adduser' ? 'button__active' : 'button'} >Управление пользователями</Link>
      <Link to='/adminpanel/logs' className={path == '/adminpanel/logs' ? 'button__active' : 'button'}>Логи</Link>
      <Link to='/adminpanel/reports' className={path == '/adminpanel/reports' ? 'button__active' : 'button'}>Отчеты</Link>
      {path == '/adminpanel' && <Link to='adduser' className='adduser-btn'><PersonAddAltIcon style={{marginRight: '10px'}}/>Добавить пользователя</Link>}
    </Body>
  )
}

export default AdminNavBar;

const Body = styled.nav`
  display: flex;
  width: 100%;
  background-color: #00000050;

  .button {
    color: white;
    font-family: ${mainFontFamily};
    cursor: pointer;
    font-size: 18px; 
    padding: 10px 15px;
    border-radius: 10px;
    text-decoration: none;
    
    &__active {
      color: #005aff;
      font-family: ${mainFontFamily};
      font-size: 18px; 
      font-weight: 500;
      cursor: pointer;
      padding: 10px 15px;
      border: 1px solid black;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: #ffffff;
      border: none;
      text-decoration: none;
    }
  }

  .adduser-btn {
    display: flex;
    color: white;
    font-family: ${mainFontFamily};
    cursor: pointer;
    font-size: 18px; 
    padding: 5px;
    margin-left: auto;
    margin-right: 100px;
    align-items: center;
    height: 38px;
    box-sizing: border-box;
    text-decoration: none;
  }
`;
