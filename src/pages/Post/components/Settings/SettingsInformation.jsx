import styled from "styled-components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { putSettingsInfo } from "../../../../store/reducers/settings";

const SettingsInformation = ()=>{

  const dispatch = useAppDispatch();
  const set = useAppSelector((state)=>state.settingsSlice.settings);

    const [infAb,setInfab]=useState(set.settingsInfo.infAb);
    const [infs,setInfs]=useState(set.settingsInfo.infs);
    const [inft,setInft]=useState(set.settingsInfo.inft);
    const [infot,setInfot]=useState(set.settingsInfo.infot);
    const [infspr,setInfspr]=useState(set.settingsInfo.infspr);

    const SaveSettings = async (e) => {
      e.preventDefault();
      const data ={
        infAb,
        infs,
        inft,
        infot,
        infspr
      }
      dispatch(putSettingsInfo(data))
    }

    return( <form>
        <Checkbox>
          <input type='checkbox' id='infAb' checked={infAb} onChange={()=>setInfab(s=>!s)}/>
          <label htmlFor="infAb">Информация об абоненте</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='infs' checked={infs} onChange={()=>setInfs(s=>!s)}/>
          <label htmlFor="infs">Информация об сеансе</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='inft' checked={inft} onChange={()=>setInft(s=>!s)}/>
          <label htmlFor="inft">Результаты текстового поиска</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='infot' checked={infot} onChange={()=>setInfot(s=>!s)}/>
          <label htmlFor="infot">Информация об отчете</label>
        </Checkbox>
        <Checkbox>
          <input type='checkbox' id='infspr' checked={infspr} onChange={()=>setInfspr(s=>!s)}/>
          <label htmlFor="infspr">Информация из информационно-справочных БД</label>  
        </Checkbox>
        <div>
								<ButtonSet onClick={SaveSettings}>Сохранить</ButtonSet>
								<ButtonSet>По умолчанию</ButtonSet>
								</div>
          </form>)
}
export default SettingsInformation

const Checkbox = styled.div `
    padding-top:10px;
    margin-left: 5px;
  label,input:hover{
    cursor:pointer;
    border-radius: 5px;
    padding-left: 5px;
  }
  textarea{
    width:100px;
    height: 10px; 
    resize: none;
    margin-left:3px;
    padding-left: 5px;;
  }
`;

const ButtonSet = styled.button`
    width:110px;
    height: 30px;
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 10px;
    background-color:#559ddb ;
    border-radius: 5px;
    border: none;
    color :white;
    text-align: center;
  :hover{
    cursor:pointer;
    background-color: #5b93c5 ;
    color:white;}
  `;