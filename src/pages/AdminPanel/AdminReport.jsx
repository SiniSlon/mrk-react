import styled from "styled-components";
import { mainBackground } from "../../utils/stylesSettings";
import Header from "../../components/Header";
import AdminNavBar from "./components/AdminNavBar";
import ReportsTable from "./components/ReportsTable";

const AdminReport = () =>{
  return( 
    <>
      <Header/>
  
      <Main>
        <AdminNavBar/>
        <ReportsTable/>
      </Main>
    </>
  )
}

export default AdminReport

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
`;
