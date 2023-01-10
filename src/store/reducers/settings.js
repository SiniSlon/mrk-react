import { createSlice } from '@reduxjs/toolkit';

export const defaultSettings = {
  common: {
    sortByTime: true,
    sessionSearch: false,
    handleSpeech: true,
    handleImage: false,
    statistic: true,
    coder: false,
    exportSession: true,
    keyWord: false,
    language:'rus',
  },
  filter: {
    irridium: true,
    thuraya: false,
    gsm: false,
    kv: false,
    ukv: false,
    ptt: false,
    wifi: false,
  }, 
  information: {
    abonent: true,
    session: true,
    textSearch: true,
    reports: true,
    database: true,
  }, 
  catalog: {
    localInfo: false,
    codeAbonent: false,
    codeCorresp: false,
    imeiAbonent: false,
    imeiCorresp: false,
    imsiAbonent: false,
    imsiCorresp: false,
    ipAbonent: true,
    ipCorresp: true,
    geoAbonent: true,
    geoCorresp: true,
    player: true,
  }
}

const initialState = {
  common: {
    sortByTime: true,
    sessionSearch: false,
    handleSpeech: false,
    handleImage: false,
    statistic: true,
    coder: false,
    exportSession: false,
    keyWord: true,
    language:'rus',
  },
  filter: {
    irridium: true,
    thuraya: true,
    gsm: true,
    kv: true,
    ukv: true,
    ptt: true,
    wifi: true,
  },    
  filterDefault: {
    irridiumDefault: false,
    thurayaDefault: false,
    gsmDefault: false,
    kvDefault: false,
    ukvDefault: false,
    pttDefault: false,
    wifiDefault: false,
  }, 
  information: {
    abonent: true,
    session: true,
    textSearch: true,
    reports: true,
    database: true,
  },        
  catalog: {
    localInfo: false,
    codeAbonent: false,
    codeCorresp: false,
    imeiAbonent: false,
    imeiCorresp: false,
    imsiAbonent: false,
    imsiCorresp: false,
    ipAbonent: true,
    ipCorresp: true,
    geoAbonent: true,
    geoCorresp: true,
    player: true,
  },       
  map: {
    mapModule: true,
    mapType: 'osm',
    addressGeocode: '',
    addressRoute: '',
    searchByTitle: true,
    timingAdvance: true,
    maxRadiusGSM: '111000',
    insideRadiusGSM: '35000',
    outsideRadiusGSM: '101010',
    lenPeling: '354',
    zoom: '12',
    sessions: '1',
    sourceIrridium: true,
    preventLocation: true,  
  },
  services: {
    exportSession: true,
    addressExport: 'http://192.168.36.35/exporter/services/ExporterService?wsdl',
    addressSputnuka: '',
    ipNominatium: '127.0.0.1',
    ipPologon: '',
    rayIrridium: true,
  }    
}
        
const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    putSettingsCommon(state, action) {
      state.common = {...state.common, ...action.payload};
      console.log('Store settings common >> ', state.common)
    },

    putSettingsFilter(state, action) {
      state.filter = {...state.filter, ...action.payload};
      console.log('Store settings filter >> ', state.filter)
    },

    putSettingsFilterDefault(state, action) {
      state.filterDefault = {...state.filterDefault, ...action.payload};
      console.log('Store settings filter >> ', state.filterDefault)
    },

    putSettingsInfo(state, action) {
      state.information = {...state.information, ...action.payload};
      console.log('Store settings information >> ', state.information)
    },

    putSettingsCatalog(state, action) {
      state.catalog = {...state.catalog, ...action.payload};
      console.log('Store settings catalog >> ', state.catalog)
    },

    putSettingsMap(state, action) {
      state.map = {...state.map, ...action.payload};
      console.log('Store settings map >> ', state.map)
    },

    putSettingsServices(state, action) {
      state.services = {...state.services, ...action.payload};
      console.log('Store settings services >> ', state.services)
    },
  },
});

export const { 
  putSettingsCommon,
  putSettingsFilter,
  putSettingsFilterDefault,
  putSettingsInfo,
  putSettingsCatalog,
  putSettingsMap,
  putSettingsServices,
} = settings.actions;

export default settings.reducer;
