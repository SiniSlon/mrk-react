import styled from "styled-components";
import { useState } from "react";
import ModalWindow from './ModalWindow'

const SettingsFilter = () => {
    const [settings,setSettings] = useState('')
    const [ir,setIr]=useState(false)
    const [th,setTh]=useState(false)
    const [gsm,setGsm]=useState(false)
    const [kv,setKv]=useState(false)
    const [ykv,setYkv]=useState(false)
    const [ptt,setPtt]=useState(false)
    const [wifi,setWifi]=useState(false)
    const [ird,setIrd]=useState(false)
    const [thd,setThd]=useState(false)
    const [gsmd,setGsmd]=useState(false)
    const [kvd,setKvd]=useState(false)
    const [ykvd,setYkvd]=useState(false)
    const [pttd,setPttd]=useState(false)
    const [wifid,setWifid]=useState(false)
    
    const FilterDefault = async ()=>{
        const dataFilter ={
            iridium: ird,
            thuraya: thd,
            ptt: pttd,
            gsm: gsmd,
            kv: kvd,
            ukv: ykvd,
            wifi: wifid
        }
        console.log(dataFilter)
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
                    <button onClick={()=>setSettings('')}>Cancel</button>
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
                    <button onClick={()=>setSettings('')}>Cancel</button>
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
                    <button onClick={()=>setSettings('')}>Cancel</button>
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
                    <button onClick={()=>setSettings('')}>Cancel</button>
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
                    <button onClick={()=>setSettings('')}>Cancel</button>
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
                    <button onClick={()=>setSettings('')}>Cancel</button>
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
                    <button onClick={()=>setSettings('')}>Cancel</button>
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
                    <button onClick={()=>setSettings('')}>Cancel</button>
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
                    <CancelButton onClick={()=>setSettings('')}>Cancel</CancelButton>
                  </ModalWindow>  
        }
        <fieldset>
                  <legend>Системы связи</legend>
                    <div>
                      <label>Irridium</label>
                      <input type='checkbox' value={ir} onChange={()=>setIr(s=>!s)}/>
                    </div>
                    
                    <div>
                      <label>Thuraya</label>
                      <input type='checkbox' value={th} onChange={()=>setTh(s=>!s)}/>
                    </div>
                   
                    <div>
                      <label>PTT</label>
                      <input type='checkbox' value={ptt} onChange={()=>setPtt(s=>!s)}/>
                    </div>
                    
                    <div>
                      <label>GSM</label>
                      <input type='checkbox' value={gsm} onChange={()=>setGsm(s=>!s)}/>
                    </div>
                    
                    <div>
                      <label>KB</label>
                      <input type='checkbox' value={kv} onChange={()=>setKv(s=>!s)}/>
                    </div>
                   
                    <div>
                      <label>YKB</label>
                      <input type='checkbox' value={ykv} onChange={()=>setYkv(s=>!s)}/>
                    </div>
                   
                    <div>
                      <label>WIFI</label>
                      <input type='checkbox' value={wifi} onChange={()=>setWifi(s=>!s)}/>
                    </div>
                    <CancelButton>Make</CancelButton>
                </fieldset>

                <fieldset>
                  <legend>Система связи поумолчанию</legend>
                    <div>
                      <label>Irridium</label>
                      <input type='checkbox' value={ird} onChange={()=>setIrd(s=>!s)}/>
                    </div>
                    
                    <div>
                      <label>Thuraya</label>
                      <input type='checkbox' value={thd} onChange={()=>setThd(s=>!s)}/>
                    </div>

                    <div>
                      <label>PTT</label>
                      <input type='checkbox' value={pttd} onChange={()=>setPttd(s=>!s)}/>
                    </div>

                    <div>
                      <label>GSM</label>
                      <input type='checkbox' value={gsmd} onChange={()=>setGsmd(s=>!s)}/>
                    </div>

                    <div>
                      <label>KB</label>
                      <input type='checkbox' value={kvd} onChange={()=>setKvd(s=>!s)}/>
                    </div>

                    <div>
                      <label>YKB</label>
                      <input type='checkbox' value={ykvd} onChange={()=>setYkvd(s=>!s)}/>
                    </div>

                    <div>
                      <label>WIFI</label>
                      <input type='checkbox' value={wifid} onChange={()=>setWifid(s=>!s)}/>
                    </div>
                    <CancelButton onClick={FilterDefault}>Make</CancelButton>
                </fieldset>

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
    </div>)
};
export default SettingsFilter

const DivLabel = styled.div`
    margin-bottom: 5px;
    text-align: right;
    label:hover{
        background-color: rgba(8, 79, 161,0.2);
        cursor:pointer;
        border-radius:12px;
    }
    `;  

const Table = styled.table`
    border-collapse: collapse;
    border-bottom: 1.5px solid #020069;
    padding: auto;
    thead{
        background-color: rgba(12,114,234,0.8);
        
    }
    th{
        font-weight: 200;
    }
    tbody{background-color:rgba(12,114,234,0.2);}
    `;

const CancelButton =styled.button`
    margin-top: 20px;
    color:white;
    background-color: #020069;
    cursor:pointer;
    border-radius:12px;
    `;    
