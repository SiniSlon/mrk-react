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
                        <p>Delete label?</p>
                        <Buttons>Yes</Buttons>
                        <Buttons onClick={()=>setDelet('')}>No</Buttons>
                    </ContentDelete>
                </Modals>}
            {delet === 'labelm' && 
                <Modals>
                    <ContentDelete>
                        <p>Delete sample?</p>
                        <Buttons>Yes</Buttons>
                        <Buttons onClick={()=>setDelet('')}>No</Buttons>
                    </ContentDelete>
                </Modals>}
            {create === 'label' && 
                <Modals>
                    <ContentLabel>
                        <ContentIn>
                            <label>Name</label>
                            <input type='text' value={nameLabel} onChange={(e)=>setNameLabel(e.target.value)}/>
                        </ContentIn>
                        <ContentIn>
                            <label>Comment</label>
                            <input type='text' value={commentLabel} onChange={(e)=>setCommentLabel(e.target.value)}/>
                        </ContentIn>
                        <ContentIn>
                            <label>Color</label>
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
                            <label>Name</label>
                            <input type='text'/>
                        </ContentIn>
                        <ContentIn>
                            <label>Type</label>
                            <select>
                                <option></option>
                            </select>
                        </ContentIn>
                        <ContentIn>
                            <label>Number</label>
                            <input type='text'/>
                        </ContentIn>
                        <ContentIn>
                            <label>Labeled</label>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                            <input type='checkbox'/>
                        </ContentIn>
                        <ContentIn>
                            <label>Label</label>
                            <select>
                                <option></option>
                            </select>
                        </ContentIn>
                        <ContentIn>
                            <label>Name Abonent</label>
                            <input type='text'/>
                        </ContentIn>
                        <ContentIn>
                            <label>Comment Abonent</label>
                            <input type='text'/>
                        </ContentIn>
                        <Buttons>Create</Buttons>
                        <Buttons onClick={()=>setCreate('')}>Delete</Buttons>
                    </Content>
                </Modals>}

            {views === 'creates' &&
            <Menu >
                <div>
                    <div>
                        <Buttons onClick={()=>setCreate('label')}>Create</Buttons>
                        <Buttons onClick={()=>setDelet('label')}>Delete</Buttons>
                    </div>
                    <Table>
                        <HeadT>
                            <tr>
                                <td>Author</td>
                                <td>Name</td>
                                <td>Comment</td>
                                <td>Vision</td>
                                <td>Color</td>
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
                                <th>Author</th>
                                <th>Label</th>
                                <th>Type</th>
                                <th>Sample</th>
                                <th>Name sample</th>
                                <th>Name abonent</th>
                                <th>Comment</th>
                                <th>Metka</th>
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
    width:100%;
    grid-template-columns: repeat(2 1fr);
    grid-template-areas:
    "a b"
    "c c";
`;

const LabelsA = styled.div`
    grid-area: a;
    
    :hover{
        background-color: rgba(8, 79, 161,0.7);
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
        width   :100% ;
        color: white;
        border-radius: 5px;
    }
`;

const LabelsB = styled.div`
    grid-area: b; 
    color: white;
    height:30px;
    cursor:pointer;
    :hover{ 
        background-color: rgba(8, 79, 161,0.7);
    }
    .test{
        background-color: rgba(8, 79, 161,0.6);
        height:30px;
        width   :100% ;
        cursor:pointer;
        color: white;
        border-radius: 5px;;
    }
    .tests{
        background-color: rgb(8, 79, 161); 
        height:30px;
        cursor:pointer;
        width   :100% ;
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
    :hover{
        background-color: rgba(12,114,234,0.8);
    }
`;

const Table = styled.table`
    width:100%;
    border-collapse: collapse;
    text-align: center;
    th{
        font-weight: 300;
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