import { useState, useEffect } from "react";
import styled from "styled-components";
import { mainFontFamily } from "../../../../utils/stylesSettings";
import * as AxiosLabels from "../../../../api/services/labels";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddLabel from "./AddLabel";
import EditLabel from "./EditLabel";
import Loader from "../../../../components/Loader";
import Pagination from '../../../../components/Pagination';
import ButtonWhitIcon from "../../../../components/UI/BarButton/BarButton.tsx";

const Labels = () => {
  const [ready, setReady] = useState(false);
  const [labels, setLabels] = useState([]);
  const [showAddLabel, setShowAddLabel] = useState(false)
  const [showEditLabel, setShowEditLabel] = useState(false)
  const [editingId, setEditingId] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        console.log(page)

        const response = await AxiosLabels.getAllLabels({pageNumber: page-1});

        console.log(response.data)
        setLabels(response.data)
      } catch (e) {
        console.error('Labels error >>> ', e)
      } finally {
        setReady(true)
      }
    })()
  }, [showAddLabel, showEditLabel, page])

  const handleDelete = async (e) => {
    let number;

    if (e.target.nodeName == 'path') {
      number = +(e.target.parentElement.parentElement.id)
    } else {
      number = +(e.target.id);
    }
    console.log(number);
    
    const response = await AxiosLabels.deleteLabelByNumber({labelNumber: number});
    console.log('Response delete label >>> ', response)

    const responseLabels = await AxiosLabels.getAllLabels({pageNumber: page - 1});
    setLabels(responseLabels.data)
  }
  
  return (
    <Lables>
      <div className='top-block'>
        {/* <Button className='nav-button' onClick={() => setShowAddLabel(true)}><BookmarkAddIcon/>Добавить метку</Button> */}
        <ButtonWhitIcon icon={<BookmarkAddIcon/>} title='Добавить метку' color='blue' size='small' func={() => setShowAddLabel(true)}/>
      </div>

      <Table>
        <div className="header">
          <div className="header__number">Номер</div>
          <div className="header__title">Название</div>
          <div className="header__comment">Комментарий</div>
          <div className="header__color">Цвет</div>
          <div className="header__edit">Редактировать</div>
          <div className="header__delete">Удалить</div>
        </div>

        {ready ? labels.map((item, index) => (
          <div className="body" key={index}>
            <div className="body__number">{item.number}</div>
            <div className="body__title">{item.name}</div>
            <div className="body__comment">{item.comment}</div>
            <div className="body__color"><div className="body__color__inside" style={{backgroundColor: item.color}} title={item.color}></div></div>
            <button className="body__edit" onClick={() => {setShowEditLabel(true); setEditingId(item.number)}} id={item.number}><EditIcon/></button>
            <button className="body__delete" onClick={(e) => handleDelete(e)} id={item.number}><DeleteIcon/></button>
          </div>
        )) : <Loader/>}

      </Table>
      <Pagination data={15} onChange={setPage}/>

      {showAddLabel && <AddLabel setShowAddLabel={setShowAddLabel}/>}
      {showEditLabel && <EditLabel setShowEditLabel={setShowEditLabel} editingId={editingId}/>}
    </Lables>
  )
}
export default Labels;

const Lables = styled.div`
  display: flex;
  flex-direction: column;

  .top-block {
    display: flex;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-right: 10px;
  border: 2px solid #005aff;
  border-radius: 5px;
  color: #005aff;
  background-color: white;
  cursor: pointer;
  font-size: 14px;
  font-family: ${mainFontFamily};
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  max-width: 1200px;
  width: 100%;
  
  .header {
    display: flex;
    font-size: 18px;
    font-family: ${mainFontFamily};
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    width: 100%;

    &__number {
      display: flex;
      width: 80px;
      justify-content: center;
    }

    &__title {
      display: flex;
      width: 200px;
      justify-content: center;
    }

    &__comment {
      display: flex;
      width: 500px;
      justify-content: center;
    }

    &__color {
      display: flex;
      width: 80px;
      justify-content: center;

    }

    &__edit {
      display: flex;
      width: 140px;
      justify-content: center;
    }

    &__delete {
      display: flex;
      width: 130px;
      justify-content: center;
    }
  }

  .body {
    display: flex;
    font-size: 18px;
    font-family: ${mainFontFamily};
    margin-top: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #00000029;

    &__number {
      display: flex;
      width: 80px;
      justify-content: center;
    }

    &__title {
      display: flex;
      width: 200px;
      padding: 0 10px;
      box-sizing: border-box;
      border-left: 1px solid #00000029;
      border-right: 1px solid #00000029;
    }

    &__comment {
      display: flex;
      width: 500px;
      padding: 0 10px;
      box-sizing: border-box;
    }

    &__color {
      display: flex;
      width: 80px;
      justify-content: center;
      margin-bottom: 5px;
      border-left: 1px solid #00000029;

      &__inside {
        width: 60px;
        height: 20px;
      }
    }

    &__edit {
      display: flex;
      justify-content: center;
      width: 140px;
      border: none;
      background-color: white;
      padding: 0;
      cursor: pointer;
      font-size: 18px;
      border-left: 1px solid #00000029;
      border-right: 1px solid #00000029;
    }

    &__delete {
      display: flex;
      justify-content: center;
      width: 130px;
      border: none;
      background-color: white;
      padding: 0;
      cursor: pointer;
      font-size: 18px;
    }
  }
`;
