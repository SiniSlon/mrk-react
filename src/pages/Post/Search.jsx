import styled from "styled-components"
import Header from "../../components/Header"
import PostNavBar from "./components/PostNavBar"
import { mainBackground,mainButtonsHoverColor,mainFontFamily  } from "../../utils/stylesSettings"
import { useState } from "react"
import SearchText from "./components/SearchText"
import SearchAbonent from "./components/SearchAbonent"
import SearchSession from "./components/SearchSession"

const Search = () =>{
	const [search,setSearch] = useState('text')
    return(
			<>
			<Header/>
			<Main>
				<PostNavBar/>
					<Basic>
						<List>
							<label className={search==='text' ? 'active' : 'passive'} onClick={()=>setSearch('text')}>Текстовый поиск</label>
							<label className={search==='abonent' ? 'active' : 'passive'} onClick={()=>setSearch('abonent')}>Поиск по абонентам</label>
							<label className={search==='sessions' ? 'active' : 'passive'} onClick={()=>setSearch('sessions')}>Поиск по сессиям</label>
						</List>
						<Choosen>
						{search ==='text' && <SearchText/>}
						{search ==='abonent' && <SearchAbonent/>}
						{search ==='sessions' && <SearchSession/>}
					</Choosen>
					</Basic>
				</Main>
			</>
    )
}
export default Search

const Main =styled.div `
	display:flex;
	flex-direction:column;
	height: calc(100vh - 50px);
	position: relative;
	background: ${mainBackground};`;

const Basic =styled.div`
	display:flex;
	background-color:white;
	margin:10px;
	border-radius:12px;
		`
	
const List =styled.div`
	display:flex;
	flex-direction:column;
	padding:10px;
	label:first-child{
		border-top-left-radius:5px;
		border-top-right-radius:5px;
	}
	
	label:last-child{
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	label	{
		display:flex;
		border:0.5px solid #0748c0;
		
		justify-content: center;
		color:white;
		align-items:center;
		height: 70px;
		font-family: ${mainFontFamily};
		font-size:14pt;
    	width: 300px;
	}
	.active{
		background-color: #4785d6;}
	.passive{
		background-color: #186ddd;}
	label:hover{
		background-color: ${mainButtonsHoverColor} ;
		cursor:pointer
	}	`

const Choosen =styled.div`
	width:100%`;