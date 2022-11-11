import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deleteUser, getUsers } from '../../../api/services/users';
import { mainFontFamily } from '../../../utils/stylesSettings';
import PaginationBlock from '../../../components/Pagination';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Loader from '../../../components/Loader';

const AdminTable = () => {
  const [ready, setReady] = useState(false);
  const [usersList, setSetUsersList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // const responseUsers = await getUsers();
        // setSetUsersList(responseUsers.data);
        // console.log('Response Admins Users >> ', responseUsers.data);

      } catch (e) {
        console.error('Error Users Table >>> ', e.response);
      } finally {
        setReady(true);
      }
    })();
  }, []);

  const handleDelete = async(e) => {
    try {

      let question = prompt('Удалить пользователя?', 'Да');

      if (question !== 'Да') return;

      if (e.target.dataset.testid == 'DeleteIcon') {
        const deletedUser = e.target.id;
        const del = await deleteUser({userName: deletedUser});
        console.log(del);
        const responseUsers = await getUsers();
        setSetUsersList(responseUsers.data);
      } else {
        const deletedUser = e.target.parentElement.id;
        const del = await deleteUser({userName: deletedUser});
        console.log(del);
        const responseUsers = await getUsers();
        setSetUsersList(responseUsers.data);
      }
    } catch (e) {
      console.error('Delete User >>> ', e);
    }
  }

  return (
    <>
      <Table>
        <div className="table-item">
          <div className="tabe-title__id">ID</div>
          <div className="tabe-title__name">Имя пользователя</div>
          <div className="tabe-title__name">Права</div>
          <div className="tabe-title__name">Редактировать</div>
          <div className="tabe-title__delete">Удалить</div>
        </div>

        {!ready ?
          usersList.map((item) => (
            <div className="table-item" key={item.id}>
              <div className="table-info__id">{item.id}</div>
              <div className="table-info__name">{item.userName}</div>
              <div className="table-info__name">{item.authority}</div>
              <Link to={`edituser/${item.userName}`} className="table-info__name"><EditIcon/></Link>
              <div className="table-info__delete"><DeleteIcon onClick={handleDelete} id={item.userName} style={{cursor: 'pointer', width: '27px'}}/></div>
            </div>
          )) : <Loader/>
        }
      </Table>

      <PaginationBlock prefixUrl={'/adminpanel'}/>
    </>
  )
}

export default AdminTable;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  margin: 10px;
  margin-bottom: 0;

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

  .tabe-title__delete {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    font-size: 20px;
    font-weight: 500;
    margin-left: auto;
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

  .table-info__delete {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    font-size: 20px;
    margin-left: auto;
  }
`;
