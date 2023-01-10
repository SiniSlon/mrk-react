import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { hoverTr } from "../../../../utils/stylesSettings";
import { mainFontFamily } from "../../../../utils/stylesSettings";

const SearchAbonent = () => {
  const [typeFilter, setTypeFilter] =  useState('')
  const [arrayApk, setArrayApk] = useState([])
  const [query, setQuery] = useState('')

const handleFormApk = () => {
  if (arrayApk.includes('main'))
  {const temp = [...arrayApk];
    const index = temp.indexOf('main');
    temp.splice(index, 1)
    setArrayApk(temp)
  } else {
    setArrayApk(s => [...s, 'main'])
  }
}

  const handleFormAnyApk = () => {
    if (arrayApk.includes('anyApk'))
      {const temp = [...arrayApk];
        const index = temp.indexOf('anyApk');
        temp.splice(index, 1)
        setArrayApk(temp)
      } else{
        setArrayApk(s => [...s, 'anyApk'])
      }
  }

  const Search = async() => {
    const data = {
      type_apk: arrayApk,
      query: query,
      type_filter: typeFilter
    }
    console.log(data)
  }
  
  return(
    <Main>
      <AbonentDiv>   
        <fieldset className='APK'>
          <legend>АПК</legend>
          <div>
            <label  htmlFor="main">Текущий АПК</label>
            <input type='checkbox' checked={arrayApk.includes('main')} onChange={handleFormApk} id='main' />
          </div>
          <div>
            <label htmlFor="any">Сторонний АПК</label>
            <input checked={arrayApk.includes('anyApk')} onChange={handleFormAnyApk}  id='any' type='checkbox'/>
          </div>
        </fieldset>
        <fieldset className='Search'>
          <legend>Поиск</legend>
          <input placeholder="Введите запрос" value={query} onChange={(e)=>setQuery(e.target.value)}/>
          <button onClick={Search}><SearchIcon/>Поиск</button>
        </fieldset>
        <fieldset className='Sett'>
          <legend>Параметры</legend>
            <div>
              <label htmlFor="numb">По номеру</label>
              <input type='radio' id='numb' value='number' onClick={(e)=>setTypeFilter(e.target.value)} name='src'/>
            </div>
            <div>
              <label htmlFor='name' >По имени</label>
              <input type='radio' id='name' value='name' onClick={(e)=>setTypeFilter(e.target.value)}  name='src'/>
            </div>
            <div>
              <label htmlFor="yu">По УИ</label>
              <input id='yu'type='radio' value='id' onClick={(e)=>setTypeFilter(e.target.value)}  name='src'/>
            </div>
        </fieldset>
      </AbonentDiv>
      <fieldset>
        <legend>Результаты поиска</legend>
        <table>
          <thead>
            <tr>
              <th className='small'>№</th>
              <th className='medium'>Метки</th>
              <th className='small'>Дата регистрации</th>
              <th className='medium'>Имя</th>
              <th className='large'>Комментарий</th>
              <th className='small'>Идентификатор</th>
              <th className='small'>TMSI</th>
              <th className='small'>IMSI</th>
              <th className='small'>IMEI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='small'>2</td>
              <td className='medium'>5</td>
              <td className='small' >3</td>
              <td className='medium'>5</td>
              <td className='large'>5</td>
              <td className='small'>4</td>
              <td className='small'>7</td>
              <td className='small'>6</td>
              <td className='small'>7</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </Main>
  )
}

export default SearchAbonent

const Main = styled.div`
  padding-top: 5px;
  padding-left: 30px;

  fieldset{
    margin: 10px 5px 15px 0;
  };

  table {
    border-collapse:collapse ;
    font-family: ${mainFontFamily};
      
    tbody {
      text-align:center;
    }

    tbody tr {
      border-bottom: 1px solid gray;
    }

    tbody tr:hover {
      background-color:${hoverTr}
    }

    th {
      font-size: 14pt;
      font-weight: 400;
    }

    td {
      font-size:12pt
    }

    .small {
      width:100px;
    }

    .medium {
      width:150px;
    }

    .large {
      width:200px;
    }
  }
`
    
const AbonentDiv = styled.div`
  display:flex;

  input:hover {
    cursor: pointer;
  }

  label:hover {
    cursor:pointer;
  }
  .Search {
    input {
      outline:none;
      width:650px;
      height:20px
    };

    button {
      margin-top: 10px;
      display:flex;
      justify-content: center;
      align-items: center ;
      border: 1px solid #00369b;
      border-radius: 7px;
      background-color: white;
    }

    button:hover {
      cursor:pointer;
    }
  }
`;    