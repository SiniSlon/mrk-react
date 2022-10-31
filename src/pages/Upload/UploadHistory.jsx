import styled from 'styled-components';
import { mainBackground } from '../../utils/stylesSettings';
import Header from '../../components/Header';
import LoadNavBar from './components/UploadNavBar';
import TableUpload from './components/TableUpload';

const UploadHistory = () => {

  return (
    <>
      <Header/>

      <Main>
        <LoadNavBar/>
        <TableUpload/>
      </Main>
    </>
  )
}

export default UploadHistory;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
`;
