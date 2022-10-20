import styled from "styled-components";
import { useState } from "react";


const Labels = () => {
    const [views,setViews]=useState('creates')
    
    return(
        <NavBarLabel>
            <LabelsSet onClick={()=>setViews('creates')}>Create labels</LabelsSet>
            <LabelsSet onClick={()=>setViews('uses')}>USe labels</LabelsSet>
            
            {views === 'creates' &&
            <form>
                <p>Create</p></form>}    
            {views ==='uses' &&
            <form><p>Uses</p></form>}    
            
        </NavBarLabel>
    )
}
export default Labels

const NavBarLabel = styled.div`
    display:flex;
    width: 100%;
    background-color: #00000050;
`;

const LabelsSet = styled.button`
    display:flex;
    width: 50%;
    background-color: #1f1fc9;
    color: white;
`;