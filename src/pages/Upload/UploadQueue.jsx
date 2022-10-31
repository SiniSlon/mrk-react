import styled from "styled-components";
import { mainBackground } from '../../utils/stylesSettings';
import Header from '../../components/Header';
import LoadNavBar from "./components/UploadNavBar";
import TableQueue from "./components/TableQueue";

const UploadQueue = () => {

  return (
    <>
      <Header/>
      
      <Main>
        <LoadNavBar/>
        <TableQueue/>
      </Main>
    </>
  )
}

export default UploadQueue;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
`;
