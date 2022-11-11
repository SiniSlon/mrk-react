import { useState, useEffect } from "react";
import styled from "styled-components";
import ModalWindow from "../../Post/components/Settings/ModalWindow";
import PaginationBlock from "../../../components/Pagination";
import { mainFontFamily } from "../../../utils/stylesSettings";
import Loader from "../../../components/Loader";

const TableQueue = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [ready, setReady] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // const responseQueue = await getUsers();
        // setData(responseQueue.data)
        // console.log('Response Queue >> ', responseQueue.data);

      } catch (e) {
        console.error('Error Queue Table >>> ', e);
      } finally {
        setReady(true);
      }
    })();
  }, []);

  return(
    <>
      <Table>
        <thead>
          <tr>
            <th>Исходный файл</th>
            <th>Размер файла</th>
            <th>Время начала загрузки</th>
            <th>Отменить загрузку</th>
          </tr>
        </thead>

        {!ready ?
          <tbody>
            <tr>
              <td>11</td>
              <td>22</td>
              <td>33</td>
              <td><Buttons onClick={() => setIsOpenModal(s => !s)}>Cancel</Buttons></td>
            </tr>
          </tbody> : <Loader/>
        }   
      </Table>

      <PaginationBlock prefixUrl={'/upload/queue'}/>

      {isOpenModal && 
        <ModalWindow>
          <div>
              <p>Cancel download?</p>
          </div>

          <div>
            <Buttons>Yes</Buttons>
            <Buttons onClick={() => setIsOpenModal(s => !s)}>No</Buttons>
          </div>
        </ModalWindow>
      }
    </>
  )
}

export default TableQueue;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-collapse : collapse ;
  height: 100%;
  font-weight: 300;
  font-family: ${mainFontFamily};
  margin: 10px;
  margin-bottom: 0;

  th {
    border-bottom: 1px solid black;
    border-collapse : collapse;
    text-align: center;
    width: 450px;
    font-size: 20px;
    font-weight: 500;
    height: 50px;
  }

  tbody:hover{
    background-color: rgba(12,114,234,0.2);
    cursor:pointer;
  }
    
  td {
    text-align: center;
    width: 450px;
    font-size: 20px;
  }

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
