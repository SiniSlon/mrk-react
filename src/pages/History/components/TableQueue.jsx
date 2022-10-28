import { useState } from "react";
import styled from "styled-components";
import ModalWindow from "../../Post/components/ModalWindow";
import PaginationBlock from "../../../components/Pagination";
import { mainFontFamily } from "../../../utils/stylesSettings";

const TableQueue = ()=>{

    const [view,setView]=useState(false);

    return(
    
        <Table>
            <thead>
                <tr>
                    <th>Исходный файл</th>
                    <th>Размер файла</th>
                    <th>Время начала загрузки</th>
                    <th>Отменить загрузку</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>`11</td>
                    <td>122</td>
                    <td>33</td>
                    <td><Buttons onClick={()=>setView(s=>!s)}>Cancel</Buttons></td>
                </tr>
            </tbody>
            {view && <ModalWindow>
                <div>
                    <p>Cancel download?</p>
                </div>
                <div>
                    <Buttons>Yes</Buttons>
                    <Buttons onClick={()=>setView(s=>!s)}>No</Buttons>
                </div>
                </ModalWindow>}
                <PaginationBlock />
        </Table>
        
    )
}
export default TableQueue;

const Table = styled.table`
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      border-radius: 10px;
      padding: 20px;
      box-sizing: border-box;
      border-collapse : collapse ;
      font-weight: 300;
      font-family: ${mainFontFamily};
    th{
      border-bottom: 1px solid black;
      border-collapse : collapse ;
      text-align: center ;
      width: 450px;
      font-size: 20px;
      font-weight: 500  ;
      height: 50px;

    }
    tbody:hover{
      background-color: rgba(12,114,234,0.2);
      cursor:pointer;
    }
    
    td{
      text-align: center  ;
      width: 450px;
      font-size: 20px;}

    .pagination {
      display: flex;
      margin: 0 auto;
  }
    `;

  const Buttons = styled.button`
      background-color: rgba(12,114,234,0.8);
      color:white;
      border-radius: 5px;
      border:none;
      :hover{
        cursor:pointer;
        background-color: rgba(12,114,234,0.6);
      }
    `;
