import styled from "styled-components";
import { useState } from "react";
import ModalWindow from '../ModalWindow'
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { putSettingsFilter, putSettingsFilterDefault,defaultSettings } from "../../../../store/reducers/settings";

const SettingsFilter = () => {
    const [settings,setSettings] = useState('')
    const dispatch = useAppDispatch();
    const set = useAppSelector((state)=>state.settingsSlice.settings); 
    
    const [ir,setIr]=useState(set.settingsFilter.ir)
    const [th,setTh]=useState(set.settingsFilter.th)
    const [gsm,setGsm]=useState(set.settingsFilter.gsm)
    const [kv,setKv]=useState(set.settingsFilter.kv)
    const [ykv,setYkv]=useState(set.settingsFilter.ykv)
    const [ptt,setPtt]=useState(set.settingsFilter.ptt)
    const [wifi,setWifi]=useState(set.settingsFilter.wifi)
    const [ird,setIrd]=useState(set.settingsFilterDefault.ird)
    const [thd,setThd]=useState(set.settingsFilterDefault.thd)
    const [gsmd,setGsmd]=useState(set.settingsFilterDefault.gsmd)
    const [kvd,setKvd]=useState(set.settingsFilterDefault.kvd)
    const [ykvd,setYkvd]=useState(set.settingsFilterDefault.ykvd)
    const [pttd,setPttd]=useState(set.settingsFilterDefault.pttd)
    const [wifid,setWifid]=useState(set.settingsFilterDefault.wifid)
    //const [peleng,setPeleng]=useState(setting.settingsFilterDefault.)

    console.log(ir)


    const SaveSettings = async (e)=>{
        e.preventDefault();
        const data ={
            ir,
            th,
            gsm,
            kv,
            ykv,
            ptt,
            wifi 
        }
        console.log(data)
        dispatch(putSettingsFilter(data))
    }

    const SaveSettingsDefault =async (e)=>{
        e.preventDefault();
        const data ={
            ird,
            thd,
            gsmd,
            kvd,
            ykvd,
            pttd,
            wifid
        } 
        dispatch(putSettingsFilterDefault(data))
    }

  

    /*add ViewsFilterSystemS*/ 
    return(
    <div>
        {settings === 'datas' && 
           <ModalWindow>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Name</th>
                                    <th>Extencion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>  
                    <CancelButton>Ok</CancelButton>
                    <CancelButton onClick={()=>setSettings('')}>Cancel</CancelButton>
                  </ModalWindow>  
        }
        {settings === 'text' && 
           <ModalWindow>
                     <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Name</th>
                                    <th>Extencion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <CancelButton>Ok</CancelButton>
                    <CancelButton onClick={()=>setSettings('')}>Cancel</CancelButton>
                  </ModalWindow>  
        }
        {settings === 'talk' && 
           <ModalWindow>
                     <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Name</th>
                                    <th>Extencion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <CancelButton>Ok</CancelButton>
                    <CancelButton onClick={()=>setSettings('')}>Cancel</CancelButton>
                  </ModalWindow>  
        }

        {settings === 'peleng' && 
                <ModalWindow>
                            <div>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>N</th>
                                            <th>Name</th>
                                            <th>Extencion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td><input type='color'/> </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <CancelButton>Ok</CancelButton>
                            <CancelButton onClick={()=>setSettings('')}>Cancel</CancelButton>
                        </ModalWindow>  
                }
        {settings === 'prior' && 
           <ModalWindow>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <CancelButton>Ok</CancelButton>
                    <CancelButton onClick={()=>setSettings('')}>Cancel</CancelButton>
                  </ModalWindow>  
        }
        {settings === 'postreg' && 
           <ModalWindow>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <CancelButton>Ok</CancelButton>
                    <CancelButton onClick={()=>setSettings('')}>Cancel</CancelButton>
                  </ModalWindow>  
        }
        {settings === 'standart' && 
           <ModalWindow>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <CancelButton>Ok</CancelButton>
                    <CancelButton onClick={()=>setSettings('')}>Cancel</CancelButton>
                  </ModalWindow>  
        }
         {settings === 'cod' && 
           <ModalWindow>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <CancelButton>Ok</CancelButton>
                    <CancelButton onClick={()=>setSettings('')}>Cancel</CancelButton>
                  </ModalWindow>  
        }
        {settings === 'grz' && 
           <ModalWindow>
                     <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Name</th>
                                    <th>Extencion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div>
                    <CancelButton>Ok</CancelButton>
                    <CancelButton onClick={()=>setSettings('')}>Cancel</CancelButton>
                    </div>
                  </ModalWindow>  
        }
        {settings === 'lang' && 
           <ModalWindow>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>N</th>
                                    <th>Name</th>
                                    <th>Extencion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div>
                    <CancelButton>Ok</CancelButton>
                    <CancelButton onClick={()=>setSettings('')}>Cancel</CancelButton>
                    </div>
                  </ModalWindow>  
        }
        <CustomField>
                  <legend>Системы связи</legend>
                    <div>
                      <input type='checkbox' id='ir' checked={ir} onChange={()=>setIr(s=>!s)}/>
                      <label htmlFor="ir">Irridium</label>
                    </div>
                    
                    <div>
                      <input type='checkbox' id='th' checked={th} onChange={()=>setTh(s=>!s)}/>
                      <label htmlFor="th">Thuraya</label>
                    </div>
                   
                    <div>
                      <input type='checkbox' id='ptt' checked={ptt} onChange={()=>setPtt(s=>!s)}/>
                      <label htmlFor="ptt">PTT</label>
                    </div>
                    
                    <div>
                      <input type='checkbox' id='gsm' checked={gsm} onChange={()=>setGsm(s=>!s)}/>
                      <label htmlFor="gsm">GSM</label>
                    </div>
                    
                    <div>
                      <input type='checkbox' id='kv' checked={kv} onChange={()=>setKv(s=>!s)}/>
                      <label htmlFor="kv">KB</label>
                    </div>
                   
                    <div>
                      <input type='checkbox' id='ykv' checked={ykv} onChange={()=>setYkv(s=>!s)}/>
                      <label htmlFor="ykv">YKB</label>
                    </div>
                   
                    <div>
                      <input type='checkbox' id='wifi' checked={wifi} onChange={()=>setWifi(s=>!s)}/>
                      <label htmlFor="wifi">WIFI</label>
                    </div>
                    <div>
                    <ButtonSet onClick={SaveSettings}>Save</ButtonSet>
                    </div>
                </CustomField>

                <CustomField>
                  <legend>Система связи поумолчанию</legend>
                    <div>
                      <input type='checkbox' id='ird' checked={ird} onChange={()=>setIrd(s=>!s)}/>
                      <label htmlFor="ird">Irridium</label>
                    </div>
                    
                    <div>
                      <input type='checkbox' id='thd' checked={thd} onChange={()=>setThd(s=>!s)}/>
                      <label htmlFor="thd">Thuraya</label>
                    </div>

                    <div>
                      <input type='checkbox' id='pttd' checked={pttd} onChange={()=>setPttd(s=>!s)}/>
                      <label htmlFor="pttd">PTT</label>
                    </div>

                    <div>
                      <input type='checkbox' id='gsmd' checked={gsmd} onChange={()=>setGsmd(s=>!s)}/>
                      <label htmlFor="gsmd">GSM</label>
                    </div>

                    <div>
                      <input type='checkbox' id='kvd' checked={kvd} onChange={()=>setKvd(s=>!s)}/>
                      <label htmlFor="kvd">KB</label>
                    </div>

                    <div>
                      <input type='checkbox' id='ykvd' checked={ykvd} onChange={()=>setYkvd(s=>!s)}/>
                      <label htmlFor="ykvd">YKB</label>
                    </div>

                    <div>
                      <input type='checkbox' id='wifid' checked={wifid} onChange={()=>setWifid(s=>!s)}/>
                      <label htmlFor="wifid">WIFI</label>
                    </div>
                    <div>
                    <ButtonSet onClick={SaveSettingsDefault}>Save</ButtonSet>
                    </div>
                </CustomField>

                <DivLabel>
                  <label onClick={()=>setSettings('datas')}>форматы данных</label>
                </DivLabel>

                <DivLabel>
                  <label onClick={()=>setSettings('text')}>форматы текстового поиска</label>
                </DivLabel>

                <DivLabel>
                  <label onClick={()=>setSettings('talk')}>речевые форматы</label>
                </DivLabel>

                <DivLabel>
                  <label onClick={()=>setSettings('lang')}>список языков речи</label>
                </DivLabel>
                
                <DivLabel>
                  <label onClick={()=>setSettings('peleng')}>пеленг</label>
                </DivLabel>

                <DivLabel>
                  <label onClick={()=>setSettings('prior')}>приоритет обнаружения</label>
                </DivLabel>

                <DivLabel>
                  <label onClick={()=>setSettings('postreg')}>пост регистрации</label>
                </DivLabel>

                <DivLabel>
                  <label onClick={()=>setSettings('standart')}>Стандарты СС</label>
                </DivLabel>

                <DivLabel>
                  <label onClick={()=>setSettings('cod')}>Тип шифрования трафика</label>
                </DivLabel>

                <DivLabel>
                  <label onClick={()=>setSettings('grz')}>Типы ГРЗ</label>
                </DivLabel>
                <div>
                    
                    <ButtonSet>Default</ButtonSet>
                </div>
    </div>)
};
export default SettingsFilter

const DivLabel = styled.div`
    margin-top: 10px;
    text-align: left;
    padding-left: 5px;
    font-size:12pt;
    label:hover{
        background-color: rgba(136, 173, 218, 0.2);
        cursor:pointer;
        border-radius:12px;
    }
    `;  

const Table = styled.table`
    border-collapse: collapse;
    border-bottom: 1.5px solid #020069;
    padding: auto;
    font-size:11pt;
    margin:auto;
    th{
        font-weight: 400;
    }
    tbody:hover{background-color:rgba(12,114,234,0.2);}
    `;

const CancelButton =styled.button`
    margin: auto;
    color:white;
    
    background-color: #267bc5   ;
    cursor:pointer;
    border-radius:12px;
    width: 75px;
    height: 30px;
    
    `;    

const CustomField=styled.fieldset`
   
    display:inline-block;
    margin-top:5px;
`;

const ButtonSet = styled.button`
    width:110px;
    height: 30px;
    margin-top: 20px;
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

