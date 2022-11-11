import styled from "styled-components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { putSettingsServices } from "../../../../store/reducers/settings";
import { mainButtonsHoverColor, mainButtonsColor, mainFontFamily } from '../../../../utils/stylesSettings'

const SettingsServices = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settingsSlice.services);

  const [exportSession, setExportSession] = useState(settings.exportSession);
  const [addressExport, setAddressExport] = useState(settings.addressExport);
  const [addressSputnuka, setAddressSputnuka] = useState(settings.addressSputnuka);
  const [ipNominatium, setIpNominatium] = useState(settings.ipNominatium);
  const [ipPologon, setIpPologon] = useState(settings.ipPologon);
  const [rayIrridium, setRayIrridium] = useState(settings.rayIrridium)

  const SaveSettings = async(e) => {
    e.preventDefault();
    const data = {
      exportSession,
      addressExport,
      addressSputnuka,
      ipNominatium,
      ipPologon,
      rayIrridium,
    }
    dispatch(putSettingsServices(data))
  }

  return (
    <Section>
      <WrapperInput>
        <label htmlFor='exportSession'>Разрешить экспорт сеансов в формат IBS</label>
        <input id='exportSession' type='checkbox' checked={exportSession} onChange={() => setExportSession(s => !s)}/>
      </WrapperInput>
      <WrapperInput>
        <label>Адрес сервиса экспорта в IBS</label>
        <input type='text' onChange={(e) => setAddressExport(e.target.value)} value={addressExport}/>
      </WrapperInput>
      <WrapperInput>
        <label>Адрес сервиса лучей спутника</label>
        <input type='text' onChange={(e) => setAddressSputnuka(e.target.value)} value={addressSputnuka}/>
      </WrapperInput>
      <WrapperInput>
        <label>IP-адрес сервиса Nominatim</label>
        <input type='text' onChange={(e) => setIpNominatium(e.target.value)} value={ipNominatium}/>
      </WrapperInput>
      <WrapperInput>
        <label>IP-адрес сервиса генерации полигонов</label>
        <input type='text' onChange={(e) => setIpPologon(e.target.value)} value={ipPologon}/>
      </WrapperInput>
      <WrapperInput>
        <label htmlFor='radIr'>Разрешить отображать лучи Irridium</label>
        <input id='radIr' type='checkbox' checked={rayIrridium} onChange={()=>setRayIrridium(s => !s)}/>
      </WrapperInput>

      <div>
        <ButtonSet onClick={SaveSettings}>Сохранить</ButtonSet>
        {/* <ButtonSet>По умолчанию</ButtonSet> */}
      </div>
    </Section>
  )
}
export default SettingsServices;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  font-family: ${mainFontFamily};
`;

const WrapperInput = styled.div`
  display: flex;
  width: 700px;  
  justify-content: space-between;
  margin: 10px 0 0 0;

  label {
    cursor: pointer;
  }
`;

const ButtonSet = styled.button`
  padding: 10px 20px;
  margin: 40px 40px 30px 0;
  background-color: ${mainButtonsColor};
  border-radius: 5px;
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;

  :hover {
    cursor:pointer;
    background-color: ${mainButtonsHoverColor};
    color:white;
  }
`;