import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";

const PostNavBar = () => {

  return (
    <Body>
      <NavLink end to='/post' className={({isActive}) => isActive ? 'button active' : 'button'}>Пост</NavLink>
      <NavLink to='/post/database' className={({isActive}) => isActive ? 'button active' : 'button'}>Подключение БД</NavLink>
      <NavLink to='/post/search' className={({isActive}) => isActive ? 'button active' : 'button'}>Поиск</NavLink>
      <NavLink to='/post/settings' className={({isActive}) => isActive ? 'button active' : 'button'}>Настройки</NavLink>
      {/* <NavLink to='/post/media' className={({isActive}) => isActive ? 'button active' : 'button'}>Воспроизведение</NavLink> */}
      <NavLink to='/post/maps' className={({isActive}) => isActive ? 'button active' : 'button'}>Карты</NavLink>
      <NavLink to='/post/analitic' className={({isActive}) => isActive ? 'button active' : 'button'}>Аналитика</NavLink>
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
