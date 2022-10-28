import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";

const LoadNavBar =()=>{
    const path = window.location.pathname;
    return(
        <Body>
        <Link to='/upload' className={path == '/upload' ? 'button__active' : 'button'}>История загрузки</Link>
        <Link to='/upload/queue' className={path == '/upload/queue' ? 'button__active' : 'button'}>Очередь загрузки</Link>
      </Body>
    )
}
export default LoadNavBar


const Body = styled.div`
  display: flex;
  width: 100%;
  /* margin-bottom: 20px; */
  background-color: #00000050;
  border-radius: 12px; 

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