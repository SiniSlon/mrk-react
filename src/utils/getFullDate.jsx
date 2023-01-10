
const addZero = (item) => {
  if(item < 10) {
    item = '0' + item
  }
  return item
}


const getFullDate = () => {
    const date = addZero(new Date().getDate())
    const month = addZero(new Date().getMonth())
    const year = new Date().getFullYear()
    const hours = addZero(new Date().getHours())
    const minutes = addZero(new Date().getMinutes())
    const secunds = addZero(new Date().getSeconds())
    const fullDate = date + '-' + month + '-' + year + ' ' + hours + ':' + minutes + ':' +  secunds + ' ';
    return fullDate;
}

export default getFullDate;

