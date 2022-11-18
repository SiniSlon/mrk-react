import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import JSZip from "jszip";
import { saveAs, imgData } from "file-saver";
import ssnArray from '../../../utils/tempSnn';


const PortalModal = ({ idArray, isOpen, onClose }) => {
  const [path, setPath] = useState(`C:\Users\admin`)
  if (!isOpen) return null;

  const obj = {
    id: 1,
    title: 'Title'
  }

  console.log('idArray >> ', idArray)
  console.log('ssnArray >> ', ssnArray)

  const handleExport = (e) => {
    console.log(path)
    const array = [];
    for (let i = 0; i < ssnArray.length; i++) {
      if (idArray.includes(String(ssnArray[i].id))) {
        array.push(ssnArray[i])
      }
    }
    console.log(array)
    const zip = new JSZip();
    
    zip.file("Hello.txt", JSON.stringify(array));
    
    zip.generateAsync({type:"blob"}).then(function(content) {
      // see FileSaver.js
      saveAs(content, "post_data.zip");
    });
  }

  return ReactDOM.createPortal(
    <Body>
      <Window>

        <div className='top'>
          <h2>Выгрузка данных</h2>

          <span className="close" onClick={onClose}>&times;</span>
        </div>
        <div className="content">
          {/* Куда экспортировать? */}
          
          {/* <input type="text" value={path} onChange={(e) => setPath(e.target.path)}/> */}
        </div>

        <button className='export-btn' onClick={handleExport}>Экспорт</button>
      
      </Window>
    </Body>,

    document.body
  );
};

export default PortalModal;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: #00000070;
  width: 100%;
  height: 100%;
  /* font-family: 'Roboto' */
`;

const Window = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 400px;
  /* height: 50%; */
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-sizing: border-box;
  
  .top {
    display: flex;
    /* margin: 50px 100px; */

    .close {
      color: black;
      font-size: 40px;
      font-weight: bold;
      margin-left: auto;
      cursor: pointer;
    }
  }

  .export-btn {
    font-size: 18px;
    width: min-content;
    padding: 3px 10px;
    /* margin: 100px 100px 0 auto; */
    margin-left: auto;
    margin-top: 100px;
    /* font-family: 'Roboto'; */
    /* font-weight: 300; */
  }

  .content {
    display: flex;
    flex-direction: column;    
    font-size: 18px;
    /* margin: 0 100px; */
    width: min-content;
  }

`;
