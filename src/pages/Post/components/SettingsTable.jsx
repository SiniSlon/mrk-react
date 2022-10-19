import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";
import PaginationBlock from "../../../components/Pagination";
import Loader from "../../../components/Loader";

const SettingsTable = (props) => {

  // console.log(props.postList)
  return (
    <Body>
        <Aside></Aside>



        
       

    </Body>
    
  )
}

export default SettingsTable;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
`;

const Aside = styled.div`
    display: flex;
    flex-direction: column;
`;
