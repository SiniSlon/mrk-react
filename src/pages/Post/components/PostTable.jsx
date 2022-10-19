import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";
import PaginationBlock from "../../../components/Pagination";
import Loader from "../../../components/Loader";

const PostTable = (props) => {

  // console.log(props.postList)
  return (
    <>
      <Table>
        <div className="table-item">
          <div className="table-title__name">АПК</div>
          <div className="table-title__name">Дата</div>
          <div className="table-title__name">Метки</div>
          <div className="table-title__name">Длительность</div>
          <div className="table-title__name">Система связи</div>
          <div className="table-title__name">Пост регистрации</div>
          <div className="table-title__name">IMEI</div>
          <div className="table-title__name">IMSI</div>
          <div className="table-title__name">ТФОП аб.</div>
          <div className="table-title__name">ТФОП кор.</div>
          <div className="table-title__name">Уст-во аб.</div>
          <div className="table-title__name">Уст-во кор.</div>
          <div className="table-title__name">Направление</div>
          <div className="table-title__name">Тип</div>
          <div className="table-title__name">Point1</div>
          <div className="table-title__name">Point2</div>
        </div>


        
        {props.postList.length !== 0 ? props.postList.map((item) => (
          <div className="table-item" key={item.id}>
            <div className="table-info__name">{item.origin}</div>
            <div className="table-info__name">{item.time}</div>
            <div className="table-info__name">{item.labels.map((item, index) => (<div key={index}>{item.name}</div>))}</div>
            <div className="table-info__name">{item.duration}</div>
            <div className="table-info__name">{item.sys}</div>
            <div className="table-info__name">{item.regStation}</div>
            <div className="table-info__name">{item.cc3}</div>
            <div className="table-info__name">{item.cc4}</div>
            <div className="table-info__name">{item.cx1}</div>
            <div className="table-info__name">{item.cx1b}</div>
            <div className="table-info__name">{item.cx2}</div>
            <div className="table-info__name">{item.cx2b}</div>
            <div className="table-info__name">{item.direction}</div>
            <div className="table-info__name">{item.ot}</div>
            <div className="table-info__name">{item.coordinates[0].point1}</div>
            <div className="table-info__name">{item.coordinates[0].point2}</div>
          </div>
        )) : <Loader/>}

      </Table>
      <PaginationBlock />
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
  /* padding: 10px; */
  box-sizing: border-box;
  margin: 10px 10px 0 10px;
  overflow-x: scroll;

  .pagination {
    display: flex;
    margin: 0 auto;
  }

  .table-item {
    display: flex;
    /* border-bottom: 1px solid #00000050; */
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
