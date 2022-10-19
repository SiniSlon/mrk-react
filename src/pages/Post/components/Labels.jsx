import styled from "styled-components";
import { useState } from "react";


const Labels = () => {
    return(
        <NavBarLabel>
            <p>1</p>
            <p>2</p>
        </NavBarLabel>
    )
}
export default Labels

const NavBarLabel = styled.div`
    display:flex;
    width: 100%;
    background-color: #00000050;
`;