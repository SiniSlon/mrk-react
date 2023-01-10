import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";

const HandbooksNavBar = () => {
  const path = window.location.pathname;

  return (
    <Body>
      <NavLink to='/handbooks' className={({isActive}) => isActive ? 'button active' : 'button'}>Справочники</NavLink>
      <NavLink to='/handbook/import' className={({isActive}) => isActive ? 'button active' : 'button'}>Импорт</NavLink>
      <NavLink to='/handbook/settings' className={({isActive}) => isActive ? 'button active' : 'button'}>Настройки</NavLink>
      {/* <NavLink to='/handbook/grhc' className={({isActive}) => isActive ? 'button active' : 'button'}>ГРЧЦ</NavLink> */}
      {/* <NavLink to='/handbook/window' className={({isActive}) => isActive ? 'button active' : 'button'}>Окно</NavLink> */}
      {/* <NavLink to='/handbook/modules' className={({isActive}) => isActive ? 'button active' : 'button'}>Модули</NavLink> */}
      {/* <NavLink to='/handbook/help' className={({isActive}) => isActive ? 'button active' : 'button'}>Помощь</NavLink> */}
      {/* <NavLink to='/post/maps' className={({isActive}) => isActive ? 'button active' : 'button'}>Карты</NavLink> */}
    </Body>
  )
}

export default HandbooksNavBar;

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
