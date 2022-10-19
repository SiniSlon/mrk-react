import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { deleteUser, getUsers } from "../../../api/users";
import { mainFontFamily } from "../../../utils/stylesSettings";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PaginationBlock from "../../../components/Pagination";

const TableUpload = () => {
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

  return (
    <>
    {ready && <Table>
      <div className="table-item">
        <div className="tabe-title__name">time</div>
        <div className="tabe-title__name">ssnCount</div>
        <div className="tabe-title__name">attrCount</div>
        <div className="tabe-title__name">zonesCount</div>
        <div className="tabe-title__name">trafficCount</div>
        <div className="tabe-title__name">condition</div>
      </div>

      {usersList.map((item) => (
        <div className="table-item" key={item.id}>
          <div className="tabe-title__name">1</div>
          <div className="tabe-title__name">2</div>
          <div className="tabe-title__name">3</div>
          <div className="tabe-title__name">4</div>
          <div className="tabe-title__name">5</div>
          <div className="tabe-title__name">6</div>
          {/* <div className="table-info__id">{item.id}</div>
          <div className="table-info__name">{item.userName}</div>
          <div className="table-info__name">{item.authority}</div>
          <Link to={`edituser/${item.userName}`} className="table-info__name"><EditIcon/></Link>
          <div className="table-info__name"><DeleteIcon onClick={handleDelete} id={item.userName} style={{cursor: 'pointer', width: '27px'}}/></div> */}
        </div>
      ))}

      <PaginationBlock />

    </Table>}
  </>
  )
}

export default TableUpload;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* height: 50%; */
  /* width: min-content; */
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  /* margin: 10px; */
  /* box-sizing: border-box; */

  .pagination {
    display: flex;
    margin: 0 auto;
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
