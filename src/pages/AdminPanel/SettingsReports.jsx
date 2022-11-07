import styled from "styled-components";
import { mainBackground } from "../../utils/stylesSettings";
import Header from "../../components/Header";
import AdminNavBar from "./components/AdminNavBar";
<<<<<<< HEAD
import ReportsTable from "./components/ReportsTable";

const SettingsReport = () =>{
    return( <Body>
        <Header/>
  
        <Main>
          <AdminNavBar/>
          <ReportsTable/>
        </Main>
  
        
      </Body>)
=======

const SettingsReport = () => {
  return( 
    <>
      <Header/>

      <Main>
        <AdminNavBar/>
        Отчеты
      </Main>
    </>
  )
>>>>>>> 62aeead21b5ba916e81c1bf6d99db9638c7d9fe0
}

export default SettingsReport

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
`;
