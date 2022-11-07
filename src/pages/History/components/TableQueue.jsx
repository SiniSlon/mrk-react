import { useState, useEffect } from "react";
import styled from "styled-components";
import ModalWindow from "../../Post/components/ModalWindow";
import PaginationBlock from "../../../components/Pagination";
import { mainFontFamily } from "../../../utils/stylesSettings";
import { deleteUser, getUsers } from "../../../api/users";

const TableQueue = ()=>{

    const [view,setView]=useState(false);
    const [ready, setReady] = useState(false);
    const [usersList, setSetUsersList] = useState([]);

    useEffect(() => {
      (async () => {
        try {
          const responseUsers = await getUsers();
          setSetUsersList(responseUsers.data)
          console.log('Response Users >> ', responseUsers.data);
  
        } catch (e) {
          console.error('Error Users Table >>> ', e.response);
        } finally {
            setReady(true);
        }
      })();
    }, []);

    return(
      <>
      {ready && <Table>
      
          <div className="table-item">
            <div className="tabe-title__name">Исходный файл</div>
            <div className="tabe-title__name">Размер файла</div>
            <div className="tabe-title__name">Время начала загрузки</div>
            <div className="tabe-title__name">Отменить загрузку</div>
          </div>
          {usersList.map((item) => (<div className="table-item" key={item.id}>
            <div className="tabe-title__name">`11</div>
            <div className="tabe-title__name">122</div>
            <div className="tabe-title__name">333</div>
            <div className="tabe-title__name"><button onClick={()=>setView(s=>!s)}>Cancel</button></div>
          </div> ))}
          {view && <ModalWindow>
                <div>
                    <p>Cancel download?</p>
                </div>
                <div>
                    <button>Yes</button>
                    <button onClick={()=>setView(s=>!s)}>No</button>
                </div>
                </ModalWindow>}
                <PaginationBlock />
      </Table>}</>
    )
}
export default TableQueue;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* height: 50%; */
  /* width: min-content; */
  background-color: #ffffff;
  border-radius: 10px;
  
  box-sizing: border-box;
  /* margin: 10px; */
  /* box-sizing: border-box; */
 
  .pagination {
    display: flex;
   
  }

  .table-item {
    display: flex;
    border-bottom: 1px solid #00000050;
    height: 50px;
    font-family: ${mainFontFamily};
  }

  .tabe-title__id {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    font-size: 20px;
    font-weight: 500;
  }

  .tabe-title__name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    font-size: 20px;
    font-weight: 500;
  }

  .table-info__id {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    font-size: 20px;
  }

  .table-info__name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    font-size: 20px;
  }
`;
