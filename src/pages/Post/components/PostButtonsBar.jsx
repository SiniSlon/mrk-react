import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";
import LeakAdd from '@mui/icons-material/LeakAdd';
import MusicVideo from '@mui/icons-material/MusicVideo';
import Label from '@mui/icons-material/LabelOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import tempSnnArray from '../../../utils/tempSnn';

const PostButtonsBar = ({ 
  filter,           
  setFilter,
  handleResetFilters,
  setModalSessions,
  setNet,
  setMedia,
 }) => {

  // console.log(tempSnnArray)

  return (
    <Body>
      <button className={filter ? 'filter-btn active-btn' : 'filter-btn'} onClick={() => setFilter(state => !state)}><FilterAltIcon/>Фильтры</button>
      <button className="filter-btn" onClick={handleResetFilters}><RestartAltIcon/>Сбросить все фильтры</button>
      <button className="filter-btn" onClick={() => setModalSessions(true)}><BrowserUpdatedIcon/>Выгрузить сеансы</button>
      <button onClick={()=> setNet(s => !s)} className="filter-btn"><LeakAdd/>Сеть контактов</button>
      <button className="filter-btn" onClick={()=> setMedia(s=>!s)}><MusicVideo/>плеер</button> 
      <button className="filter-btn"><Label/>Метки</button>
    </Body>
  )
}

export default PostButtonsBar;

const Body = styled.div`
  display: flex;

  .filter-btn {
    display: flex;
    align-items: center;
    margin: 10px 0 0 10px;
    background-color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-family: ${mainFontFamily};
    text-decoration:none;
    color: black;
  }

  .active-btn {
    background-color: #0054bd;
    color: white;
  }
`;
