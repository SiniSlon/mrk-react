import styled from "styled-components";
import Header from '../../../components/Header';
import LoadNavBar from "./LoadNavBar";
import { mainBackground } from '../../../utils/stylesSettings';
import TableQueue from "./TableQueue";

const QueueLoad = () =>{
    return(
        <Body>
            <Header/>
            <Main>
            <LoadNavBar/>
            <TableQueue/>
            </Main>
        </Body>
    )
}
export default QueueLoad

const Main = styled.div`
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
