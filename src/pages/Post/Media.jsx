import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { mainBackground, mainFontFamily } from '../../utils/stylesSettings';
import PostNavBar from './components/PostNavBar';
import FileViewer from 'react-file-viewer';


const Media = () => {
  const [radioInput, setRadioInput] = useState('one3')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)

    console.log('radioInput >> ', radioInput)
  } 

  const file = '/11.csv'
  const type = 'csv'

  return (
    <>
      <Header/>

      <Main>
        <PostNavBar/>
        Media
        <FileViewer
        fileType={type}
        filePath={file}

        />
        <form onSubmit={handleSubmit}>
          <label>One</label>
          <input type='radio' name='myradio' value='one' onClick={(e) => setRadioInput(e.target.value)}/>
          <label>2</label>
          <input type='radio' name='myradio' value='one1' onClick={(e) => setRadioInput(e.target.value)}/>
          <label>3</label>
          <input type='radio' name='myradio' value='one2' onClick={(e) => setRadioInput(e.target.value)}/>
          <label>4</label>
          <input type='radio' name='myradio' value='one3' onClick={(e) => setRadioInput(e.target.value)}/>
          <label>5</label>
          <input type='radio' name='myradio' value='one4' onClick={(e) => setRadioInput(e.target.value)}/>

          <button type='submit'>submit</button>
        </form>
      </Main>
    </>
  )
}

export default Media;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
`;
