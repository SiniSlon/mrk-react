export const handleClearFormat = (props) => {
  props.setFormatData([]);
}

export const handleFormTxt = (props) => {
  if (props.formatData.includes('txt')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('txt');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'txt'])
  }
}

export const handleFormHtm = (props) => {
  if (props.formatData.includes('htm')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('htm');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'htm'])
  }
}

export const handleFormHtmlx = (props) => {
  if (props.formatData.includes('htmlx')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('htmlx');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'htmlx'])
  }
}

export const handleFormRft = (props) => {
  if (props.formatData.includes('rtf')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('rtf');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'rtf'])
  }
}

export const handleFormOdt = (props) => {
  if (props.formatData.includes('odt')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('odt');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'odt'])
  }
}

export const handleFormXml = (props) => {
  if (props.formatData.includes('xml')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('xml');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'xml'])
  }
}

export const handleFormEml = (props) => {
  if (props.formatData.includes('eml')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('eml');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'eml'])
  }
}

export const handleFormGsm = (props) => {
  if (props.formatData.includes('gsm')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('gsm');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'gsm'])
  }
}
export const handleFormIbs = (props) => {
  if (props.formatData.includes('ibs')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('ibs');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'ibs'])
  }
}

export const handleFormAlaw = (props) => {
  if (props.formatData.includes('alaw')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('alaw');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'alaw'])
  }
}

export const handleFormUlaw = (props) => {
  if (props.formatData.includes('ulaw')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('ulaw');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'ulaw'])
  }
}

export const handleFormSgn = (props) => {
  if (props.formatData.includes('sgn')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('sgn');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'sgn'])
  }
}

export const handleFormCdma = (props) => {
  if (props.formatData.includes('cdma')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('cdma');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'cdma'])
  }
}

export const handleFormEdem = (props) => {
  if (props.formatData.includes('edem')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('edem');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'edem'])
  }
}

export const handleFormDect = (props) => {
  if (props.formatData.includes('dect')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('dect');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'dect'])
  }
}

export const handleFormWav = (props) => {
  if (props.formatData.includes('wav')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('wav');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'wav'])
  }
}

export const handleFormQcelp8 = (props) => {
  if (props.formatData.includes('qcelp8')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('qcelp8');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'qcelp8'])
  }
}

export const handleFormPcm = (props) => {
  if (props.formatData.includes('pcm')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('pcm');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'pcm'])
  }
}

export const handleFormMp3 = (props) => {
  if (props.formatData.includes('mp3')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('mp3');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'mp3'])
  }
}

export const handleFormAmbe4k8 = (props) => {
  if (props.formatData.includes('ambe4k8')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('ambe4k8');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'ambe4k8'])
  }
}

export const handleFormAmbe4kplus = (props) => {
  if (props.formatData.includes('ambe4kplus')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('ambe4kplus');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'ambe4kplus'])
  }
}

export const handleFormMpg = (props) => {
  if (props.formatData.includes('mpg')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('mpg');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'mpg'])
  }
}

export const handleFormMpeg = (props) => {
  if (props.formatData.includes('mpeg')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('mpeg');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'mpeg'])
  }
}

export const handleFormFlv = (props) => {
  if (props.formatData.includes('flv')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('flv');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'flv'])
  }
}

export const handleFormBz2 = (props) => {
  if (props.formatData.includes('bz2')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('bz2');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'bz2'])
  }
}

export const handleFormJava = (props) => {
  if (props.formatData.includes('java')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('java');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'java'])
  }
}

export const handleFormExe = (props) => {
  if (props.formatData.includes('exe')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('exe');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'exe'])
  }
}

export const handleFormSwf= (props) => {
  if (props.formatData.includes('swf')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('swf');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'swf'])
  }
}

export const handleFormBin = (props) => {
  if (props.formatData.includes('bin')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('bin');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'bin'])
  }
}

export const handleFormZip = (props) => {
  if (props.formatData.includes('zip')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('zip');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'zip'])
  }
}

export const handleFormRar = (props) => {
  if (props.formatData.includes('rar')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('rar');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'rar'])
  }
}

export const handleFormTar= (props) => {
  if (props.formatData.includes('tar')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('tar');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'tar'])
  }
}

export const handleFormGzip = (props) => {
  if (props.formatData.includes('gzip')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('gzip');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'gzip'])
  }
}

export const handleForm7z = (props) => {
  if (props.formatData.includes('7z')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('7z');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, '7z'])
  }
}

export const handleFormPdf = (props) => {
  if (props.formatData.includes('pdf')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('pdf');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'pdf'])
  }
}

export const handleFormPptx = (props) => {
  if (props.formatData.includes('pptx')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('pptx');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'pptx'])
  }
}

export const handleFormPpt = (props) => {
  if (props.formatData.includes('ppt')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('ppt');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'ppt'])
  }
}

export const handleFormPs = (props) => {
  if (props.formatData.includes('ps')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('ps');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'ps'])
  }
}

export const handleFormXlsx = (props) => {
  if (props.formatData.includes('xlsx')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('xlsx');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'xlsx'])
  }
}

export const handleFormXls = (props) => {
  if (props.formatData.includes('xls')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('xls');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'xls'])
  }
}

export const handleFormDocx = (props) => {
  if (props.formatData.includes('docx')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('docx');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'docx'])
  }
}

export const handleFormDoc = (props) => {
  if (props.formatData.includes('doc')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('doc');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'doc'])
  }
}
export const handleFormFax = (props) => {
  if (props.formatData.includes('fax')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('fax');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'fax'])
  }
}

export const handleFormTiff = (props) => {
  if (props.formatData.includes('tiff')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('tiff');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'tiff'])
  }
}

export const handleFormBmp = (props) => {
  if (props.formatData.includes('bmp')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('bmp');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'bmp'])
  }
}

export const handleFormGif = (props) => {
  if (props.formatData.includes('gif')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('gif');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'gif'])
  }
}

export const handleFormPng= (props) => {
  if (props.formatData.includes('png')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('png');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'png'])
  }
}

export const handleFormJpeg = (props) => {
  if (props.formatData.includes('jpeg')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('jpeg');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'jpeg'])
  }
}

export const handleFormThuraya = (props) => {
  if (props.formatData.includes('thuraya')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('thuraya');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'thuraya'])
  }
}

export const handleFormG722 = (props) => {
  if (props.formatData.includes('g722')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('g722');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'g722'])
  }
}

export const handleFormG723 = (props) => {
  if (props.formatData.includes('g723')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('g723');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'g723'])
  }
}

export const handleFormG729 = (props) => {
  if (props.formatData.includes('g729')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('g729');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'g729'])
  }
}

export const handleFormOgg = (props) => {
  if (props.formatData.includes('ogg')) {
    const temp = [...props.formatData];
    const index = temp.indexOf('ogg');
    temp.splice(index, 1)
    props.setFormatData(temp)
  } else {
    props.setFormatData(s => [...s, 'ogg'])
  }
}

