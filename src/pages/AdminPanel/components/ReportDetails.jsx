import styled from "styled-components";
import { hoverTr } from "../../../utils/stylesSettings";

const ReportDetails =()=>{
    return(
        <Form>
            <FirstStr>
                <DivOne>
                    <legend>Отчет</legend>
                <div>
                    <label>Статус:</label><label>1</label>
                </div>
                <div> 
                    <label>Оператор:</label><label>2</label>
                </div>
                <div>
                    <label>Логин:</label><label>3</label>
                </div>
                <div>
                    <label>Дата создания отчета:</label><label>4</label>
                </div>
                <div>
                    <label>Обработано сеансов:</label><label>5</label>
                </div>
                <div>
                    <label>Просмотрено сеансов:</label><label>6</label>
                </div>
                <div>
                    <label>Просмотрено карточек абонентов:</label><label>7</label>
                </div>
                <div>
                    <label>Построено сетей:</label><label>8</label>
                </div>
                <div>
                    <label>Сеансов в отчете:</label><label>9</label>
                </div>
                </DivOne>
            <Table>
                <thead>
                    <tr>
                        <th className='header_small'>№</th>
                        <th className="header_medium">Критерий</th>
                        <th className="header_medium">Значение</th>
                        <th className="header-little">Количество</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='body_small'>tetet</td>
                        <td className="body_medium">tetet</td>
                        <td className="body_medium">etetet</td>
                        <td className='body_little'>etetet</td>
                    </tr>
                </tbody>
            </Table>
            <CommentBlock>
                <legend>Комментарий</legend>
            <p>test</p></CommentBlock>
            </FirstStr>
                <fieldset>
                    <legend>сеансы связи</legend>
                </fieldset>
                 <fieldset>
                    <legend>сессии</legend>
                </fieldset>
        </Form>
    )
}
export default ReportDetails

const Form =styled.div`
    background-color:white;
    border-radius:10px;
    margin: 10px;
    padding:10px;`
    
const FirstStr = styled.div `
    display:flex;
    flex-direction:row;`

const DivOne =styled.fieldset`
    width:450px;
    
  label{
    padding: 5px;
    font-size: 11pt;}
  ;`

const CommentBlock =styled.fieldset`
    width:150px; `

const Table =styled.table`
    display:flex;
    flex-direction: column;
    text-align: center;
    width:100%;
    overflow-y: scroll;
    border-collapse: collapse;
    margin:5px;
  .header{
    font-size: 16pt;
    font-weight:450;
      &_small{
        width: 100px;
        justify-content: center;
      }
      &_medium{
        width:450px;
        justify-content: center;
      }
      &_little{
        width:150px;
        justify-content: center;
      }
  }
  .body{
    font-size:14px;
      &_small{
        width: 100px;
        justify-content: center;
      };
      &_medium{
        width:450px;
        justify-content: center;
      };
      &_little{
        width:150px;
        justify-content: center;
      }
    };
  tbody tr{
    border-bottom: 1px solid gray;}
  tbody tr:hover{
    background-color: ${hoverTr};
  }`;