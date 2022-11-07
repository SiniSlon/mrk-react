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
<<<<<<< HEAD

     
    </Body>
=======
    </>
>>>>>>> 62aeead21b5ba916e81c1bf6d99db9638c7d9fe0
  )
}

export default LogsAdmin;

const Main = styled.main`
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  height: calc(100vh - 100px);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
=======
  height: calc(100vh - 50px);
>>>>>>> 62aeead21b5ba916e81c1bf6d99db9638c7d9fe0
  background: ${mainBackground};
`;
