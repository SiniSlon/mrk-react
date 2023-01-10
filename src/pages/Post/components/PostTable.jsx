import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";
import PaginationBlock from "../../../components/Pagination";
import Loader from "../../../components/Loader";

const PostTable = ({ postList, idArray, setIdArray }) => {
  const addSnnToCheck = (e) => {
    const temp = [...idArray];
    
    if (temp.includes(e.target.id)) {
      const index = temp.indexOf(e.target.id)
      temp.splice(index, 1)
      setIdArray(temp)
    } else {
      temp.push(e.target.id)
      setIdArray(temp)
    }
  }
  
  return (
    <>
      <Table>
        <div className="table-item">
          <div className="table-title__name">Выбрать</div>
          <div className="table-title__name">Метки</div>
          <div className="table-title__name">АПК</div>
          <div className="table-title__name">Дата</div>
          <div className="table-title__name">Длительность</div>
          <div className="table-title__name">Система связи</div>
          <div className="table-title__name">Формат данных</div>
          <div className="table-title__name">Трафик</div>
          <div className="table-title__name">Коммент</div>
          <div className="table-title__name">IMEI</div>
          <div className="table-title__name">IMSI</div>
          <div className="table-title__name">TMSI</div>
          <div className="table-title__name">ТФОП аб.</div>
          <div className="table-title__name">Направление</div>
          <div className="table-title__name">ТФОП коор</div>
          <div className="table-title__name">Координаты</div>
          <div className="table-title__name">Пост регистрации</div>
        </div>
        
        {postList.length !== 0 ? postList.map((item) => (
          <div className="table-item" key={item.id}>
            <div className="table-info__name"><input type='checkbox' id={item.id} onChange={addSnnToCheck}/></div>

            <div className="table-info__name">{item.labels.map((item, index) => (<div key={index}>{item.name}</div>))}</div>
            <div className="table-info__name">{item.origin}</div>
            <div className="table-info__name">{item.time}</div>
            <div className="table-info__name">{item.duration}</div>
            <div className="table-info__name">{item.sys}</div>
            <div className="table-info__name">{item.type}</div>
            <div className="table-info__name">{item.traffic !== 0 && '+'}</div>
            <div className="table-info__name">{item.comment}</div>
            <div className="table-info__name">{item.cc3}</div>
            <div className="table-info__name">{item.cc4}</div>
            <div className="table-info__name">{item.cc5}</div>
            <div className="table-info__name">{item.cx1}</div>
            <div className="table-info__name">{item.direction}</div>
            <div className="table-info__name">{item.cx1b}</div>
            <div className="table-info__name">{item.coordinates[0]?.point1}</div>
            <div className="table-info__name">{item.regStation}</div>
          </div>
        )) : <Loader/>}
      </Table>

      <PaginationBlock prefixUrl={'/post'}/>
    </>
  )
}

export default PostTable;
const Table = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 10px 10px 0 10px;
  overflow-x: scroll;

  .pagination {
    display: flex;
    margin: 0 auto;
  }

  .table-item {
    display: flex;
    height: 50px;
    font-family: ${mainFontFamily};
  }

  .table-title__name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    min-width: 200px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #00000050;
  }

  .table-info__name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    min-width: 200px;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid #00000050;
  }
`;
