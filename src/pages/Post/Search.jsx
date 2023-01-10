import styled from "styled-components"
import Header from "../../components/Header"
import PostNavBar from "./components/PostNavBar"
import { mainBackground } from "../../utils/stylesSettings"
import { useState } from "react"
import SearchText from "./components/Search/SearchText"
import SearchAbonent from "./components/Search/SearchAbonent"
import SearchSession from "./components/Search/SearchSession"
import AsideMenu from "../../components/UI/AsideMenu/AsideMenu.tsx"

const Search = () => {
	const [section, setSection] = useState('Текстовый поиск')

  return (
    <>
      <Header/>
      <Main>
        <PostNavBar/>
        <Content>

          <AsideMenu 
            names={['Текстовый поиск', 'Поиск по абонентам', 'Поиск по сессиям']}
            section={section}
            setSection={setSection}
          />
          
          <div>
            {section ==='Текстовый поиск' && <SearchText/>}
            {section ==='Поиск по абонентам' && <SearchAbonent/>}
            {section ==='Поиск по сессиям' && <SearchSession/>}
          </div>
        </Content>
      </Main>
    </>
  )
}

export default Search;

const Main = styled.div`
	display:flex;
	flex-direction:column;
	height: calc(100vh - 50px);
	position: relative;
	background: ${mainBackground};
	font-family: 'Roboto';
`;

const Content = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 10px;  
  padding: 10px;
`
