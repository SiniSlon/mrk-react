
import { useState } from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';


const SearchText = (props) => {
	const [vision,setVision] = useState(false)
	const [addVision,setAddVision] = useState(true)
	const [text,setText]= useState('')
	const [wordFilter,setWorldFilter] =useState('')
	const [dateStart,setDateStart] =useState('')
	const [dateEnd,setDateEnd] =useState('')
	const [zone,setZone] =useState('')
	const [cellule,setСellule] =useState('')
	const [station,setStation] =useState('')
	const [format,setFormat] =useState([]) 
  
	const handleFormBz2 =()=>{
		if(format.includes('bz2')){
				const temp =[...format];
				const index =temp.indexOf('bz2');
				temp.splice(index,1)
				setFormat(temp)
		}
		else{
				setFormat(s=>[...s,'bz2'])
				}
			}

	const handleFormJava =()=>{
		if(format.includes('java')){
			const temp =[...format];
			const index =temp.indexOf('java');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'java'])
		}
	}

	const handleFormPptx =()=>{
		if(format.includes('pptx')){
			const temp =[...format];
			const index =temp.indexOf('pptx');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'pptx'])
		}
	}

	const handleFormPpt =()=>{
		if(format.includes('ppt')){
			const temp =[...format];
			const index =temp.indexOf('ppt');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'ppt'])
	}
	}

	const handleFormZip =()=>{
		if(format.includes('zip')){
			const temp =[...format];
			const index =temp.indexOf('zip');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'zip'])
		}
	}

	const handleFormRar =()=>{
		if(format.includes('rar')){
			const temp =[...format];
			const index =temp.indexOf('rar');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'rar'])
		}
	}

	const handleFormTar =()=>{
		if(format.includes('tar')){
			const temp =[...format];
			const index =temp.indexOf('tar');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'tar'])
		}
	}

	const handleFormGzip =()=>{
		if(format.includes('gzip')){
			const temp =[...format];
			const index =temp.indexOf('gzip');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'gzip'])
		}
	}

	const handleFormPdf =()=>{
		if(format.includes('pdf')){
			const temp =[...format];
			const index =temp.indexOf('pdf');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'pdf'])
		}
	}

	const handleFormXlsx =()=>{
		if(format.includes('xlsx')){
			const temp =[...format];
			const index =temp.indexOf('xlsx');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'xlsx'])
		}
	}

	const handleFormXls =()=>{
		if(format.includes('xls')){
			const temp =[...format];
			const index =temp.indexOf('xls');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'xls'])
		}
	}

	const handleFormDocx =()=>{
		if(format.includes('docx')){
			const temp =[...format];
			const index =temp.indexOf('docx');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
				setFormat(s=>[...s,'docx'])
		}
	}

	const handleFormDoc =()=>{
		if(format.includes('doc')){
			const temp =[...format];
			const index =temp.indexOf('doc');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'doc'])
		}
	}

	const handleFormCls =()=>{
		if(format.includes('cls')){
			const temp =[...format];
			const index =temp.indexOf('cls');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'cls'])
		}
	}

	const handleFormPsw =()=>{
		if(format.includes('psw')){
			const temp =[...format];
			const index =temp.indexOf('psw');
			temp.splice(index,1)
			setFormat(temp)
	}
		else{
			setFormat(s=>[...s,'psw'])
		}
	}

	const handleFormEml =()=>{
		if(format.includes('eml')){
			const temp =[...format];
			const index =temp.indexOf('eml');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'eml'])
		}
	}

	const handleFormXml =()=>{
		if(format.includes('xml')){
			const temp =[...format];
			const index =temp.indexOf('xml');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'xml'])
		}
	}
	const handleFormRtf =()=>{
		if(format.includes('rtf')){
			const temp =[...format];
			const index =temp.indexOf('rtf');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'rtf'])
		}
	}

	const handleFormRtx =()=>{
		if(format.includes('rtx')){
			const temp =[...format];
			const index =temp.indexOf('rtx');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'rtx'])
		}
	}

	const handleFormHtmlx =()=>{
		if(format.includes('htmlx')){
			const temp =[...format];
			const index =temp.indexOf('htmlx');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'htmlx'])
		}
	}
	
	const handleFormTxt =()=>{
		if(format.includes('txt,ini,nfo')){
			const temp =[...format];
			const index =temp.indexOf('txt,ini,nfo');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'txt,ini,nfo'])
		}
	}
	const handleFormHtm =()=>{
		if(format.includes('htm,html,mht')){
			const temp =[...format];
			const index =temp.indexOf('htm,html,mht');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'htm,html,mht'])
		}
	}

	const handleFormOdt =()=>{
		if(format.includes('odt')){
			const temp =[...format];
			const index =temp.indexOf('odt');
			temp.splice(index,1)
			setFormat(temp)
		}
		else{
			setFormat(s=>[...s,'odt'])
		}
	}
	
	const Search = async()=>{
		const data={
			query:text,	
			type_filter:wordFilter,
			date_start:dateStart,
			date_end:dateEnd,
			zone:zone,
			station:station,
			cellule:cellule,
			format:format
		}
		console.log(data)
	}
   
    return(
			<Main>
					<Aside >
							<input placeholder="Введите слова для поиска" value={text} onChange={(e)=>setText(e.target.value)}/>
							<button onClick={Search}><SearchIcon/><span>Поиск</span>
							</button>
					</Aside>
					<div className="chooseFilter">
							<input id='words' type='radio' name='text' value='words' onClick={(e)=>setWorldFilter(e.target.value)}/>
							<label htmlFor="words">По словоформам</label>
							
							<input id='accuracy' type='radio' name='text' value='accuracy' onClick={(e)=>setWorldFilter(e.target.value)}/>
							<label htmlFor="accuracy">Точно</label> 
							
							<input id='number' type='radio' name='text' value ='number' onClick={(e)=>setWorldFilter(e.target.value)}/>
							<label htmlFor="number">Номер</label> 
							
							<input id ='inaccuracy' type='radio' name='text' value='inaccuracy' onClick={(e)=>setWorldFilter(e.target.value)}/>
							<label htmlFor="inaccuracy">Не точно</label> 
							
							<input id='similarity'type='radio' name='text'  value='similarity' onClick={(e)=>setWorldFilter(e.target.value)}/>
							<label htmlFor="similarity">Схожее</label>
					</div>
					<div className="addFilter">
							<input id='add' type='checkbox' checked={addVision} onChange={()=>setAddVision(s=>!s)}/>
							<label htmlFor="add">Дополнительный фильтр</label>
							{addVision && <AddVision>
									<fieldset>
									<legend>Фильтр по дате</legend>
										<div>
												<label htmlFor="cis">Включить фильтр по датам</label>
												<input id='cis' className="addDate"  type='checkbox' checked={vision} onChange={()=>setVision(s=>!s)}/>
										</div>
										<div>
												<label>Дата с</label>
												<input className="addDate" type='date' disabled={vision ? '':'disabled'} value={dateStart} onChange={(e)=>setDateStart(e.target.value)}/>
										</div>
										<div>
												<label>Дата по</label>
												<input className="addDate" type='date' disabled={vision ? '':'disabled'} value={dateEnd} onChange={(e)=>setDateEnd(e.target.value)}/>
										</div>
									</fieldset>
									<fieldset>
											<legend>Формат</legend>
											<Format>
											<div>
													<label htmlFor='bz2'>bz2</label>
													<input id='bz2' type='checkbox' checked={format.includes('bz2')}  onChange={handleFormBz2} />
											</div>
											<div>
													<label htmlFor='java'>java</label>
													<input id='java' type='checkbox' checked={format.includes('java')} onChange={handleFormJava}/>
											</div>
											<div>
													<label htmlFor='pptx'>pptx</label>
													<input id='pptx' type='checkbox' checked={format.includes('pptx')} onChange={handleFormPptx}/>
											</div>
											<div>
													<label htmlFor='ppt'>ppt</label>
													<input id='ppt' type='checkbox' checked={format.includes('ppt')} onChange={handleFormPpt}/>
											</div>
											<div>
													<label htmlFor='zip'>zip</label>
													<input id='zip' type='checkbox' checked={format.includes('zip')} onChange={handleFormZip}/>
											</div>
											<div>
													<label htmlFor='rar'>rar</label>
													<input id='rar' type='checkbox' checked={format.includes('rar')} onChange={handleFormRar}/>
											</div>
											<div>
													<label htmlFor='tar'>tar</label>
													<input id='tar' type='checkbox' checked={format.includes('tar')} onChange={handleFormTar}/>
											</div>
											<div>
													<label htmlFor='gzip'>gzip</label>
													<input id='gzip' type='checkbox' checked={format.includes('gzip')} onChange={handleFormGzip}/>
											</div>
											<div>
													<label htmlFor='pdf'>pdf</label>
													<input id='pdf' type='checkbox' checked={format.includes('pdf')} onChange={handleFormPdf}/>
											</div>
											<div>
													<label htmlFor='xlsx'>xlsx</label>
													<input id='xlsx' type='checkbox' checked={format.includes('xlsx')} onChange={handleFormXlsx}/>
											</div>
											<div>
													<label htmlFor='xls'>xls</label>
													<input id='xls' type='checkbox' checked={format.includes('xls')} onChange={handleFormXls}/>
											</div>
											<div>
													<label htmlFor='docx'>docx</label>
													<input id='docx' type='checkbox' checked={format.includes('docx')} onChange={handleFormDocx}/>
											</div>
											<div>
													<label htmlFor='doc'>doc</label>
													<input id='doc' type='checkbox' checked={format.includes('doc')} onChange={handleFormDoc}/>
											</div>
											<div>
													<label htmlFor='cls'>cls</label>
													<input id='cls' type='checkbox' checked={format.includes('cls')} onChange={handleFormCls}/>
											</div>
											<div>
													<label htmlFor='psw'>psw</label>
													<input id='psw' type='checkbox' checked={format.includes('psw')} onChange={handleFormPsw}/>
											</div>
											<div>
													<label htmlFor='eml'>eml</label>
													<input id='eml' type='checkbox' checked={format.includes('eml')} onChange={handleFormEml}/>
											</div>
											<div>
													<label htmlFor='xml'>xml</label>
													<input id='xml' type='checkbox' checked={format.includes('xml')} onChange={handleFormXml}/>
											</div>
											<div>
													<label htmlFor='odt'>odt</label>
													<input id='odt' type='checkbox' checked={format.includes('odt')} onChange={handleFormOdt}/>
											</div>
											<div>
													<label htmlFor='rtf'>rtf</label>
													<input id='rtf' type='checkbox' checked={format.includes('rtf')} onChange={handleFormRtf}/>
											</div>
											<div>
													<label htmlFor='rtx'>rtx</label>
													<input id='rtx' type='checkbox' checked={format.includes('rtx')} onChange={handleFormRtx}/>
											</div>
											<div>
													<label htmlFor='htmlx'>htmlx</label>
													<input id='htmlx' type='checkbox' checked={format.includes('htmlx')} onChange={handleFormHtmlx}/>
											</div>
											<div>
													<label htmlFor='htm'>htm,html,mht</label>
													<input id='htm' type='checkbox' checked={format.includes('htm,html,mht')} onChange={handleFormHtm}/>
											</div>
											<div>
													<label htmlFor='txt'>txt,ini,nfo</label>
													<input id='txt' type='checkbox' checked={format.includes('txt,ini,nfo')} onChange={handleFormTxt}/>
											</div>
											</Format>  
											</fieldset>
											<fieldset className="addDescr"><legend>Местоположение</legend>
													<div>
															<label htmlFor="zone">Зона</label>
															<input id='zone' value={zone} onChange={(e)=>setZone(e.target.value)}/>
													</div>
													<div>
															<label htmlFor="station">Базовая станция</label>
															<input id='station' value={station} onChange={(e)=>setStation(e.target.value)}/>
													</div>
													<div>
															<label htmlFor="cellule">Сота</label>
															<input id='cellule' value={cellule} onChange={(e)=>setСellule(e.target.value)}/>
													</div>
											</fieldset>
							</AddVision>}
							<div>
									<fieldset>
										<legend>Найдено</legend>
										<p>Comming soon</p>
									</fieldset>
									</div>
					</div>
			</Main>
    )
}
export default SearchText;

const Main =styled.div`
	padding-top: 10px;
	padding-left:30px;
	margin-right: 5px;
	label{
		cursor:pointer;
	}
		
	fieldset{
		margin:10px 0 10px 0 ;
			}
		.chooseFilter{
				margin-top:10px;
				label{
					cursor:pointer}
	}
		.addFilter{
				margin-top:5px;
	}
	input:hover{
		cursor:pointer
	}
	button:hover{
		cursor:pointer;
	}`;

const Aside =styled.div`
	display:flex;
		input{
			outline:none;
			width:100%;
			border: 1px solid #00369b;
			border-radius: 7px;
			height:25px;};
		button{
			text-align: center;
			border: 1px solid #00369b;
			border-radius: 7px;
			background-color: white;
			margin: 0 5px 0 5px;
			display:flex;
			justify-content: center;
			align-items: center ;}
`;	

const AddVision =styled.div`
    display:flex;
    fieldset{
			margin: 10px 10px 0 0;
     };
    .addDate{
			margin:5px;
    };
    .addDescr{ 
			width: 350px;
			padding-left: 10px;
				input{
					margin:0 0 5px 5px;
					outline:none;
					display:flex;
					justify-content: right;}}`;    

const Format =styled.div`
	overflow-y: scroll;
	height:100px;
`   
