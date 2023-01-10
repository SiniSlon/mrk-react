import styled from "styled-components";
import { hoverTr } from "../../../utils/stylesSettings";
import { HeadingLevel,Document, Packer, Paragraph, TextRun,SectionType, Underline } from "docx";
import { saveAs } from 'file-saver';
import { Report } from "@material-ui/icons";

const ReportDetails = () => {

  const report ={
    "status":"ready",
    "user": "User",
    "login": "Admin",
    "Create_date": '21-11-2022 10:42',
    'processed_sessions': "12",
    'Watched_sessions': "0",
    "watched_cards" : "12",
    "created_nets": "1",
    'sessions_in_reports' : "1"
  }

  const tableRep = {
    "n":'1',
    "cr":'test',
    "val":'tetet',
    "count":'999',
  }

  let array = [];

  for (let key in report ) {
    array.push(key + ':' +  report[key] + "\n");
  }

  let newArray = array.join("\n");

  let tableInfo = [];

  for (let key in tableRep) {
    tableInfo.push(key + ':' + tableRep[key] +"\n");
  }
  let newReport = tableInfo.join("\n")

  let comnt = 'tests';

  const doc = new Document({
    title:'Report',
    creator:'User',
    description: 'User\'s report about work choosen user',
    sections: [
      {
        properties: {
          type: SectionType.CONTINUOUS
        },
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text:"Report users",
                size:30,
                bold:true,
                heading: HeadingLevel.TITLE,
              }),
              new TextRun({
                text:{newArray},
                heading: HeadingLevel.HEADING_2,
                size:28,
                break:2,
              }),
              new TextRun({
                text:{newReport},
                size:28,
                break:2,
              }),
              new TextRun({
                text:{comnt},
                size:28,
                break:2,
              })
            ],
          }), 
        ],
      },
    ],
  });

  const handleCreate = () => {
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Report.docx");
    });
  }

  return(
    <Form>
      <FirstStr>
        <DivOne>
          <legend>Отчет</legend>
          <div>
            <label>Статус:</label>
            <label >{Object.values(report.status)}</label> 
          </div>
          <div> 
            <label>Оператор:</label><label>{Object.values(report.user)}</label> 
          </div>
          <div>
            <label>Логин:</label><label>{Object.values(report.login)}</label> 
          </div>
          <div>
            <label>Дата создания отчета:</label><label>{Object.values(report.Create_date)}</label> 
          </div>
          <div>
            <label>Обработано сеансов:</label><label>{Object.values(report.processed_sessions)}</label> 
          </div>
          <div>
            <label>Просмотрено сеансов:</label><label>{Object.values(report.Watched_sessions)}</label> 
          </div>
          <div>
            <label>Просмотрено карточек абонентов:</label><label>{Object.values(report.watched_cards)}</label> 
          </div>
          <div>
            <label>Построено сетей:</label><label>{Object.values(report.created_nets)}</label> 
          </div>
          <div>
            <label>Сеансов в отчете:</label><label>{Object.values(report.sessions_in_reports)}</label> 
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
              <td className='body_small'>{Object.values(tableRep.n)}</td>
              <td className="body_medium">{Object.values(tableRep.cr)}</td>
              <td className="body_medium">{Object.values(tableRep.val)}</td>
              <td className='body_little'>{Object.values(tableRep.count)}</td>
            </tr>
          </tbody>
        </Table>
        <CommentBlock>
          <legend>Комментарий</legend>
          <p>{comnt}</p>
        </CommentBlock>
      </FirstStr>
      <div>
        <button onClick={handleCreate}><Report/> Download report</button>
      </div>
      <fieldset>
        <legend>сеансы связи</legend>
      </fieldset>
      <fieldset>
        <legend>сессии</legend>
      </fieldset>
    </Form>
  )
}

export default ReportDetails;

const Form = styled.div`
  background-color:white;
  border-radius:10px;
  margin: 10px;
  padding:10px;

  button {
    display:flex;
    border: 1px solid #00369b;
    border-radius: 7px;
    padding: 5px;
    background-color: white;
    width:100px;
    align-items: center;
    outline:none;
    margin:5px 0 0 3px;
    cursor: pointer;
  };

  button:hover {
    background-color: ${hoverTr};
  }
`
    
const FirstStr = styled.div `
  display:flex;
  flex-direction:row;
`

const DivOne =styled.fieldset`
  width:450px;
  
  label {
    padding: 5px;
    font-size: 11pt;
  }
`

const CommentBlock = styled.fieldset`
  width:150px; 
`

const Table = styled.table`
  display:flex;
  flex-direction: column;
  text-align: center;
  width:100%;
  overflow-y: scroll;
  border-collapse: collapse;
  margin:5px;

  .header {
    font-size: 14pt;
    font-weight:450;

    &_small {
      width: 100px;
      justify-content: center;
    }

    &_medium {
      width:450px;
      justify-content: center;
    }

    &_little {
      width:150px;
      justify-content: center;
    }
  }

  .body {
    font-size:12px;

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
  }

  tbody tr {
    border-bottom: 1px solid gray;
  }

  tbody tr:hover {
    background-color: ${hoverTr};
  }
`;
