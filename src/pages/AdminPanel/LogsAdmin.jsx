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
  label{flex-direction:row}
`;

const Table = styled.table`
  background-color: white;
  border-radius:5px;
  margin:10px;
  height:150px;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  border-collapse:collapse;
    tbody tr:hover{
      background-color:${hoverTr};
      cursor:pointer
      }`;
