import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import { mainBackground } from '../../../utils/stylesSettings';
import CatalogNavBar from '../components/HandbooksNavBar';
import HandbookSettings from '../components/HandbookSettings';

const CatalogImport = () => {
  // window.open("/post/maps");
  return (
    <>
      <Header/>
      <Main>
        <CatalogNavBar/>
        <HandbookSettings/>
      </Main>
    </>
  )
}

export default CatalogImport;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background: ${mainBackground};
`;
