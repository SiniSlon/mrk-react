import { useState, useEffect } from "react";
import styled from "styled-components";
import { mainFontFamily } from "../../../utils/stylesSettings";
import PaginationBlock from "../../../components/Pagination";
import Loader from "../../../components/Loader";

const TableUpload = () => {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // const responseUpload = await getUsers();
        // setData(responseUpload.data)
        // console.log('Response Upload >> ', responseUpload.data);

      } catch (e) {
        console.error('Error Upload Table >>> ', e.response);
      } finally {
        setReady(true);
      }
    })();
  }, []);

  return (
    <>
      <Table>
        <div className="table-title">
          <div className="table-title__item">Исходный файл</div>
          <div className="table-title__item">Дата загрузки</div>
          <div className="table-title__item">Биллинг</div>
          <div className="table-title__item">Трафик</div>
          <div className="table-title__item">Первый сеанс</div>
          <div className="table-title__item">Последний сеанс</div>
          <div className="table-title__item">Статус загрузки</div>
          <div className="table-title__item">Журнал загрузки</div>
          <div className="table-title__item">Персонализация</div>
          <div className="table-title__item">Удалить</div>
        </div>

        {!ready ?
          data.map((item) => (
            <div className="table-content" key={item.id}>
              <div className="table-content__item">1</div>
              <div className="table-content__item">2</div>
              <div className="table-content__item">3</div>
              <div className="table-content__item">4</div>
              <div className="table-content__item">5</div>
              <div className="table-content__item">6</div>
              <div className="table-content__item">7</div>
              <div className="table-content__item">9</div> 
              <div className="table-content__item"><button>Delete</button></div>
            </div>
          )) : <Loader/>
        }
      </Table> 
    
    <PaginationBlock prefixUrl={'/upload'}/>
  </>
  )
}

export default TableUpload;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  height: 100%;
  margin-bottom: 0;
  box-sizing: border-box;
  
  .table-title {
    display: flex;
    border-bottom: 1px solid #00000050;
    height: 50px;
    font-family: ${mainFontFamily};
    text-align: center;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      font-size: 20px;
      font-weight: 500;
    }
  }

  .table-content {
    display: flex;
    border-bottom: 1px solid #00000050;
    height: 50px;
    font-family: ${mainFontFamily};

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      font-size: 20px;
      font-weight: 400;
    }
  }
`;