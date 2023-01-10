import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Catalog = ({ to, ...props }) => {

  return (
    <Body>
      <nav>
        {/* <NavLink to={to} className={active ? 'button active' : 'button'}/> */}
      </nav>
    </Body>
  )
}

export default Catalog;

const Body = styled.div`
  display: flex;
`;
