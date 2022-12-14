import styled from 'styled-components';
import { mainBackground } from '../../utils/stylesSettings';
import Header from '../../components/Header';
import AdminTable from './components/AdminTable';
import AdminNavBar from './components/AdminNavBar';

const AdminPanel = () => {

  return (
    <>
      <Header/>

      <Main>
        <AdminNavBar/>

        <AdminTable/>      
      </Main>
    </>
  )
}

export default AdminPanel;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
`;
