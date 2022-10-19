import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";

const PostNavBar = () => {
  const path = window.location.pathname;
  return (
    <Body>
      <Link to='/post' className={path == '/post' ? 'button__active' : 'button'}>Пост</Link>
      <Link to='/post/sessions' className={path == '/post/sessions' ? 'button__active' : 'button'}>Выгрузка сеансов</Link>
      <Link to='/post/database' className={path == '/post/database' ? 'button__active' : 'button'}>Подключение БД</Link>
      <Link to='/post/settings' className={path == '/post/settings' ? 'button__active' : 'button'}>Настройки</Link>
      <Link to='/post/media' className={path == '/post/media' ? 'button__active' : 'button'}>Воспроизведение</Link>
      <Link to='/post/maps' className={path == '/post/maps' ? 'button__active' : 'button'}>Карты</Link>
      <Link to='/post/analitic' className={path == '/post/analitic' ? 'button__active' : 'button'}>Аналитика</Link>
    </Body>
  )
}

export default PostNavBar;

const Body = styled.div`
  display: flex;
  width: 100%;
  /* margin-bottom: 20px; */
  background-color: #00000050;

  .button__active {
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

  .button {
    color: white;
    font-family: ${mainFontFamily};
    cursor: pointer;
    font-size: 18px; 
    padding: 10px 15px;
    border-radius: 10px;
    text-decoration: none;
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
