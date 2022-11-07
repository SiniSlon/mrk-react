import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";

const PostNavBar = () => {
  const path = window.location.pathname;

  return (
    <Body>
      <Link to='/post' className={path == '/post' ? 'button active' : 'button'}>Пост</Link>
      <Link to='/post/sessions' className={path == '/post/sessions' ? 'button active' : 'button'}>Выгрузка сеансов</Link>
      <Link to='/post/database' className={path == '/post/database' ? 'button active' : 'button'}>Подключение БД</Link>
      <Link to='/post/settings' className={path == '/post/settings' ? 'button active' : 'button'}>Настройки</Link>
      <Link to='/post/media' className={path == '/post/media' ? 'button active' : 'button'}>Воспроизведение</Link>
      <Link to='/post/maps' className={path == '/post/maps' ? 'button active' : 'button'}>Карты</Link>
      <Link to='/post/analitic' className={path == '/post/analitic' ? 'button active' : 'button'}>Аналитика</Link>
    </Body>
  )
}

export default PostNavBar;

const Body = styled.nav`
  display: flex;
  width: 100%;
  background-color: #00000080;

  .button {
    color: white;
    font-family: ${mainFontFamily};
    cursor: pointer;
    font-size: 18px; 
    padding: 10px 15px;
    text-decoration: none;
  }

  .active {
    color: #181f2c;
    font-weight: 500;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #ffffff;
    border: none;
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
    border: 2px solid white;
    border-radius: 7px;
    height: 38px;
    box-sizing: border-box;
    margin-top: 6px;
    text-decoration: none;
  }
`;
