import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";

const UploadNavBar = () => {
  const path = window.location.pathname;

  return (
    <Body>
      <Link to='/upload' className={path == '/upload' ? 'button__active' : 'button'}>История загрузки</Link>
      <Link to='/upload/queue' className={path == '/upload/queue' ? 'button__active' : 'button'}>Очередь загрузки</Link>
    </Body>
  )
}
export default UploadNavBar

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
`;