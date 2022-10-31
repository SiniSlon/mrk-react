import styled from 'styled-components';
import { mainBackground } from '../../utils/stylesSettings';
import Header from '../../components/Header';
import AdminNavBar from './components/AdminNavBar';

const LogsAdmin = () => {
 
  return (
    <>
      <Header/>

      <Main>
        <AdminNavBar/>
        LogsAdmin
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
`;
