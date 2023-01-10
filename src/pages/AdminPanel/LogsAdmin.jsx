import styled from 'styled-components';
import { mainBackground } from '../../utils/stylesSettings';
import Header from '../../components/Header';
import { useAppSelector } from '../../store/hooks';
import AdminNavBar from './components/AdminNavBar';
import { hoverTr } from '../../utils/stylesSettings';

const LogsAdmin = () => {
 const logs = useAppSelector((state)=>state.logSlice.logs);

  return (
    <>
      <Header/>
      <Main>
        <AdminNavBar/>
        <Table>
          <thead>
            <tr>
              <th>Location user</th>
              <th>Time location</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((item, index) => (
            <tr key={index}>
              <td>{item.location}</td>
              <td>{item.date}</td>
            </tr>
            ))}

            {/* {person.map((item, index, arr) => (
              <div id={key}>
                <></>
              </div>
            ))} */}
          </tbody>
        </Table>
      </Main>
    </>
  )
}

export default LogsAdmin;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
  
  label {
    flex-direction:row
  }
`;

const Table = styled.table`
  display:flex;
  background-color: white;
  border-radius:5px;
  margin: 10px;
  flex-direction:column;
  justify-content:space-around;
  // align-items: center;
  border-collapse:collapse;
  height: calc(100% - 50px - 10px);
  // align-items: flex-top;
  justify-content: flex-start;

  th {
    font-size: 20px;
    font-weight: 600;
    // width:550px;
    width: 50vw;
    text-align: center;
  };

  td {
    font-size: 18px;
    // width:550px;
    width: 50vw;
    text-align: center;
  }

  tbody {
    // height: 80wh;
    // height: calc(100wh - 300px);
    overflow-y: scroll;
    padding: 10px;
  }

  tbody tr { 
    border-bottom: 0.5px solid #dddddd;
    :last-child{
      border-bottom: none;
    }
  }

  tbody tr:hover{
    background-color:${hoverTr};
    cursor:pointer
  }
`;
