import styled from "styled-components";
import { useState } from "react";


const Labels = () => {
    const [views,setViews]=useState('creates')
    const [create,setCreate]=useState('')
    const [delet,setDelet]=useState('')
    const [nameLabel,setNameLabel]=useState('')
    const [commentLabel,setCommentLabel]=useState('')
    const [colorLabel,setColorLabel]=useState('')

    const CreateLabel = async () =>{
        const data ={
            name :nameLabel,
            colors:colorLabel,
            comment:commentLabel
        }
        console.log('Test',data)
    }
   
    return(
        <NavBarLabel>
            <LabelsA >
                <button onClick={()=>setViews('creates')} className={views ==='creates'? 'test':'tests'}>Create labels</button>
            </LabelsA>
            <LabelsB >
                <button onClick={()=>setViews('uses')} className={views ==='uses'? 'test':'tests'}>Manage labels</button>
            </LabelsB>
            {delet === 'label' && 
                <Modals>
                    <ContentDelete>
                        <p>Удалить метку?</p>
                        <Buttons>Да</Buttons>
                        <Buttons onClick={()=>setDelet('')}>Нет</Buttons>
                    </ContentDelete>
                </Modals>}
            {delet === 'labelm' && 
                <Modals>
                    <ContentDelete>
                        <p>Удалить шаблон метки</p>
                        <Buttons>Да</Buttons>
                        <Buttons onClick={()=>setDelet('')}>Нет</Buttons>
                    </ContentDelete>
                </Modals>}
            {create === 'label' && 
                <Modals>
                    <ContentLabel>
                        <ContentIn>
                            <label>Название</label>
                            <input type='text' value={nameLabel} onChange={(e)=>setNameLabel(e.target.value)}/>
                        </ContentIn>
                        <ContentIn>
                            <label>Комментарий</label>
                            <input type='text' value={commentLabel} onChange={(e)=>setCommentLabel(e.target.value)}/>
                        </ContentIn>
                        <ContentIn>
                            <label>Цвет</label>
                            <input type='color' value={colorLabel} onChange={(e)=>setColorLabel(e.target.value)}/>
                        </ContentIn>
                        <Buttons onClick={CreateLabel}>Save</Buttons>
                        <Buttons onClick={()=>setCreate('')}>Cancel</Buttons>
                    </ContentLabel>
                </Modals>}
            {create === 'labelm' && 
                <Modals>
                    <Content>
                        <ContentIn>
                            <label>Название</label>
                            <input type='text'/>
                        </ContentIn>
                        <ContentIn>
                            <label>Тип</label>
                            <select>
                                <option></option>
                            </select>
                        </ContentIn>
                        <ContentIn>
                            <label>Номер приоритета</label>
                            <input type='text'/>
                        </ContentIn>
                        <ContentIn>
                            <label>Отмеченно</label>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </ContentIn>
                        <ContentIn>
                            <label>Метка</label>
                            <select>
                                <option></option>
                            </select>
                        </ContentIn>
                        <ContentIn>
                            <label>Имя</label>
                            <input type='text'/>
                        </ContentIn>
                        <ContentIn>
                            <label>Комментарий</label>
                            <input type='text'/>
                        </ContentIn>
                        <Buttons>Создать</Buttons>
                        <Buttons onClick={()=>setCreate('')}>Удалить</Buttons>
                    </Content>
                </Modals>}

            {views === 'creates' &&
            <Menu >
                <div>
                    <div>
                        <Buttons onClick={()=>setCreate('label')}>Создать</Buttons>
                        <Buttons onClick={()=>setDelet('label')}>Удалить</Buttons>
                    </div>
                    <Table>
                        <HeadT>
                            <tr>
                                <th>Автор</th>
                                <th>Название</th>
                                <th>Комментарий</th>
                                <th>Отображение</th>
                                <th>Цвет</th>
                            </tr>
                        </HeadT>
                        <BodyT>
                            <tr>
                                <td>test</td>
                                <td>Label1</td>
                                <td>Commentss</td>
                                <td>Local</td>
                                <td>green</td>
                            </tr>
                        </BodyT>
                    </Table>
                </div>
            </Menu>}    
            
            {views ==='uses' &&
            <Menu>
                <div>
                    <div>
                        <Buttons onClick={()=>setCreate('labelm')}>Create</Buttons>
                        <Buttons onClick={()=>setDelet('labelm')}>Delete</Buttons>
                    </div>
                    <Table>
                        <HeadT>
                            <tr>
                                <th>Автор</th>
                                <th>Метка</th>
                                <th>Тип</th>
                                <th>Шаблон метки</th>
                                <th>Название шаблона метки</th>
                                <th>Имя абонента</th>
                                <th>Комментарий</th>
                                <th>Обозначение</th>
                            </tr>
                        </HeadT>
                        <BodyT>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                            </tr>
                        </BodyT>
                    </Table>
                </div>
            </Menu>}    
        </NavBarLabel>
    )
}
export default Labels

const NavBarLabel = styled.div`
    display:grid;
    padding-top:10px;
    width:100%;
    grid-template-columns: repeat(2 1fr);
    grid-template-areas:
    "a b"
    "c c";
`;

const LabelsA = styled.div`
    grid-area: a;
  button{
		border:none;
	}
  :hover{
		background-color: rgba(8, 79, 161,0.7);
		border-radius: 5px;
  }
  .test{
		background-color: rgba(8, 79, 161,0.6);
		height:30px;
		width   :100% ;
		cursor:pointer;
		color: white;
		border-radius: 5px;
    }
	.tests{
		background-color: rgb(8, 79, 161); 
		height:30px;
		cursor:pointer;
		width   :100%  ;
		color: white;
		border-radius: 5px;
    }
`;

const LabelsB = styled.div`
    grid-area: b; 
    color: white;
    height:30px;
  button{
		border:none;}
  	cursor:pointer;
  :hover{ 
		background-color: rgba(8, 79, 161,0.7);
		border-radius: 5px;
    }
	.test{
		background-color: rgba(8, 79, 161,0.6);
		height:30px;
		width   :100%  ;
		cursor:pointer;
		color: white;
		border-radius: 5px;
    }
	.tests{
		background-color: rgb(8, 79, 161); 
		height:30px;
		cursor:pointer;
		width   :100%  ;
		color: white;
		border-radius: 5px;
    }
`;

const Menu = styled.div`
    grid-area: c;
    width:100%;
`;

const Buttons = styled.button`
    width: 30%;
    background-color: rgb(12,114,234);
    color:white;
    cursor:pointer;
    margin-top: 10px;
    margin-right: 5px;;
    border:none;
    border-radius: 5px;
  :hover{
    background-color: rgba(12,114,234,0.8);
    }
`;

const Table = styled.table`
    width:100%;
    margin-top: 20px;
    border-collapse: collapse;
    text-align: center;
	th{
		font-weight: 700;
	}
  tbody :hover{
		background-color: #aad1ff;
		cursor:pointer;
    }
`;

const HeadT = styled.thead`
    border-bottom: 1.5px solid #020069;
    font-weight: 300;
`; 

const BodyT = styled.tbody`
    border-bottom: 1.5px solid #020069;;
    height:50%;
    overflow-y: scroll;
`; 

const Modals = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top:0;
    left:0;
    display: flex;
    align-items:center;
    justify-content: center;
    opacity:1;
    pointer-events: all;
    transition: 0.5s;
    `;

const Content =styled.div`
    padding: 20px;
    border-radius: 12px;
    background-color:white;
    height:35%;
    width:20%;
    font-size: 11pt;
    `;    

const ContentLabel =styled.div`
    height:20%;
    width:12%;
    padding: 20px;
    border-radius: 12px;
    background-color:white;
    font-size: 11pt;
    `;

const ContentIn = styled.div`
    padding:10px;
  label {
    padding-right:10px;
    }
    `;

const ContentDelete =styled.div`
    height:12%;
    width:10%;
    padding: 20px;
    border-radius: 12px;
    background-color:white;
    font-size: 11pt;
`;