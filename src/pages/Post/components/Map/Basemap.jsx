import styled from "styled-components"

const Basemap = (props) => {
    
  return (
    <Body>
      <select value={props.mapType} onChange={(e) => props.setMapType(e.target.value)}>
        <option value='osm'>OSM</option>
        <option value='googleSt'>Google</option>
        <option value='googleGeo'>Google Geo</option>
        <option value='googleSputnik'>Google Sputnik</option>
      </select>
    </Body>
  )
}

export default Basemap; 

const Body = styled.div`
  position: absolute;
  top: 12px;
  right: 70px;
  z-index: 1000;
  height: auto;
  width: auto;
  border-radius: 4px;
  background-color: white;

  select {
    font-size: 16px;
    border-radius: 4px;
    padding: 2px;
  }
`;