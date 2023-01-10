import styled from "styled-components";
import { useEffect, useState } from "react";
import AsideMenu from "../../../components/UI/AsideMenu/AsideMenu.tsx";

const HandbookSettings = () => {
  const [section, setSection] = useState('Источники геоинформации');

  useEffect(() => {
    console.log(navigator)
  }, [])

  return (
    <Body>
      <AsideMenu 
        names={['Источники геоинформации', 'Электронная карта', 'Вид', 'Настройки типов БД', 'Настройки базы данных']}
        section={section}
        setSection={setSection}
      />
      <div className="content">
        
      </div>
    </Body>
  )
}

export default HandbookSettings;

const Body = styled.div`
  display: flex;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 10px;  
  padding: 10px;
`;
