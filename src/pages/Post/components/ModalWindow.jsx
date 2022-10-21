import styled from "styled-components";

const ModalWindow =({children}) =>{
    return(
        <Modals>
            <Content>
                {children}
            </Content>
        </Modals>
    )
}
export default ModalWindow

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