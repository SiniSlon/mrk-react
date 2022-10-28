import styled from "styled-components";
import { mainBackground } from "../../utils/stylesSettings";
import Header from "../../components/Header";
import AdminNavBar from "./components/AdminNavBar";


const SettingsReport = () =>{
    return( <Body>
        <Header/>
  
        <Main>
          <AdminNavBar/>
          отчеты
        </Main>
  
        
      </Body>)
}
export default SettingsReport


const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
`;


const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${mainBackground};
`;