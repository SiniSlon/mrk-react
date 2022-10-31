import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Pagination, PaginationItem} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#a8a8a8',
      darker: '#053e85',
    },
    neutral: {
      main: '#c9c9c9',
      contrastText: '#000000',
      hover: 'red',
    },
  },
});

const PaginationBlock = ({ data, changePage, page, prefixUrl }) => {

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Pagination count={data} page={page} onChange={changePage} 
          size="large" 
          color='neutral'
          showFirstButton
          showLastButton
          renderItem={(item) => (
            <PaginationItem 
              component={Link}
              // to={`${fUrl}/${item.page}/${limit}`}
              // to = {`/${prefixUrl}/${item.page}`}
              to = {prefixUrl}
              {...item}
            />
          )}
        />               
      </Body>
    </ThemeProvider>
  )
}

export default PaginationBlock;

const Body = styled.div`
  display: flex;
  margin: 20px auto 10px;
  margin-top: auto;
  background-color: white;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
