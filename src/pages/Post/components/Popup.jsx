import styled from "styled-components";


const Popup =({style})=>{
    return(
        <PopupMenu >
            <p>{style}</p>
        </PopupMenu>
    )
}

export default Popup


const PopupMenu = styled.div `
    position:fixed;
    width:200px;
    height:55px;
    border-radius: 5px;
    padding-left: 10px;
    animation-name: go;
    animation-duration: 7s;
    
    @keyframes go{
        from 
            {left:10px;
            top:900px;
            border-color:red;
            background-color:lightgray;}
        to {
            left:10px;
            border-color:yellow;
            background-color:gray;
            top:800px;}
      
      }

    `;