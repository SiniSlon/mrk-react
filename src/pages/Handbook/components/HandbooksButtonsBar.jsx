import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";

const HandbooksButtonsBar = () => {

  return (
    <Body>
      <NavLink to='/handbooks/regions' className={({isActive}) => isActive ? 'link active' : 'link'}>Регионов</NavLink>
      <NavLink to='/handbooks/phones' className={({isActive}) => isActive ? 'link active' : 'link'}>Телефонных номеров</NavLink>
      <NavLink to='/handbooks/system' className={({isActive}) => isActive ? 'link active' : 'link'}>Телефонных систем</NavLink>
      <NavLink to='/handbooks/operator' className={({isActive}) => isActive ? 'link active' : 'link'}>Телефонных операторов</NavLink>
      <NavLink to='/handbooks/imsi' className={({isActive}) => isActive ? 'link active' : 'link'}>IMSI</NavLink>
      <NavLink to='/handbooks/imei' className={({isActive}) => isActive ? 'link active' : 'link'}>IMEI</NavLink>
      <NavLink to='/handbooks/ispc' className={({isActive}) => isActive ? 'link active' : 'link'}>ISPC</NavLink>
      <NavLink to='/handbooks/ip' className={({isActive}) => isActive ? 'link active' : 'link'}>IP</NavLink>
      <NavLink to='/handbooks/orientir' className={({isActive}) => isActive ? 'link active' : 'link'}>Оперативно важных ориентиров</NavLink>
      <NavLink to='/handbooks/station' className={({isActive}) => isActive ? 'link active' : 'link'}>Базовых станций</NavLink>
      <NavLink to='/handbooks/calendar' className={({isActive}) => isActive ? 'link active' : 'link'}>Календари</NavLink>
    </Body>
  )
}

export default HandbooksButtonsBar;

const Body = styled.nav`
  display: flex;
  padding: 10px;
  padding-bottom: 0;

  .link {
    display: flex;
    padding:3px 10px;
    background-color: #38455e;
    color: white;
    text-decoration: none;
    font-size: 16px;
    margin-right: 10px;
    border-radius: 5px;
    align-items: center;
    font-family: ${mainFontFamily};
  }

  .active {
    background-color: white;
    color: #38455e
  }
`;
