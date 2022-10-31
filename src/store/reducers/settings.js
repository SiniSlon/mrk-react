import { createSlice } from '@reduxjs/toolkit';
import store from '../store';

const initialState = {
  settings: {
    settingsMain: {
      sorttime: true,
      search: false,
      obr: false,
      obrIm: false,
      stat: true,
      coder: false,
      exp: false,
      keyw: true,
    },
    settingsSpr: {
      lspr: false,
      prab: false,
      prcr: false,
      imeiab: false,
      imeicr: false,
      imsiab: false,
      imsicr: false,
      ipab: true,
      ipcr: true,
      geoab: true,
      geocr: true,
      pl: true,
    },       
    settingsInfo: {
      infAb: true,
      infs: true,
      inft: true,
      infot: true,
      infspr: true,
    },        
    settingsFilter: {
      ir: true,
      th: false,
      gsm: false,
      kv: false,
      ykv: false,
      ptt: false,
      wifi: false,
    },    
    settingsFilterDefault:{
      ird: true,
      thd: false,
      gsmd: false,
      kvd: false,
      ykvd: false,
      pttd: false,
      wifid: false
    },
    settingsMap: {
      onMap: true,
      searchMap: true,
      def: true,
      dir: true,
      geo:'',
      mar:'',
      maxV:'35000',
      decV:'0',
      inV:'354',
      len:'10000',
      zoom:'',
      quan:'',
    },
    settingsServices: {
      exprt: true,
      adr:'192.168.000.000',
      rad:'',
      ip:'192.168.000.000',
      ipg:'',
      radIr:'',
    }    
  }
}
        
const settings = createSlice({
  name: 'settings',
  initialState,
  reducers:{
    putSettingsMain(state,action){
      state.settings.settingsMain= {...state.settings.settingsMain,...action.payload};
      console.log('Store settingsMain >> ', state.settings.settingsMain)
    },
    putSettingsSpr(state,action){
      state.settings.settingsSpr= {...state.settings.settingsSpr,...action.payload};
      console.log('Store settingsSpr >>', state.settingsSpr)
    },
    putSettingsInfo(state,action){
      state.settings.settingsInfo= {...state.settings.settingsInfo,...action.payload};
      console.log('Store settingsInfo >>', state.settings.settingsInfo)
    },
    putSettingsFilter(state,action){
      state.settings.settingsFilter={...state.settings.settingsFilter,...action.payload};
      console.log('Store settingsFilter >>', state.settings.settingsFilter)
    },
    putSettingsFilterDefault(state,action){
      state.settings.settingsFilterDefault={...state.settings.settingsFilterDefault,...action.payload};
      console.log('Store settingsFilterDefault >>', state.settings.settingsFilterDefault)
    },
    putSettingsServices(state,action){
      state.settings.settingsServices={...state.settings.settingsServices,...action.payload};
      console.log(state.settings.settingsServices)
    },
    putSettingsMap(state,action){
      state.settings.settingsMap={...state.settings.settingsMap,...action.payload};
      console.log(state.settings.settingsMap)
    },
    defaultSettings(state,action){
      state.settings = initialState;
    }
  },
});

  //  store.subscribe(console.log(settings))

export const { 
  putSettingsMain,
  putSettingsMap,
  putSettingsSpr,
  putSettingsServices,
  putSettingsInfo,
  putSettingsFilter,
  putSettingsFilterDefault,
  defaultSettings 
} = settings.actions;

export default settings.reducer;
