import moment from "moment";

export const getListWeek = (eventDate, layout, isOnchange) => {
  let listWeet = [];
  let dateNow = moment(new Date()).format("DD/MM/yyyy");
  for (let index = 0; index < 5; index++) {
    //chỉ cộng bắt đầu từ ngày thứ 2
    let convertDatetime =  index == 0 ? new Date(eventDate).getDate() : new Date(eventDate).getDate() + 1 ;
    let setDate = eventDate.setDate(convertDatetime)

    let day = {
      dateNew: setDate,
      rank: layout == 1 ? getDayAPP(new Date(setDate).getDay()) : getDayPC(new Date(setDate).getDay()),
      date: moment(setDate).format("DD/MM"),
      isCheck: checkOnchange(dateNow,eventDate,isOnchange,index)
    };

    listWeet.push(day);  
  }
  return listWeet;
};

export const checkOnchange = (dateNow, date, isOnchange, index) => {
  if(isOnchange && index == 0){
    return true;
  } else {
    if(dateNow == (moment(date).format("DD/MM/yyyy")) && isOnchange == false){
      return true
    }
    return false
  }
};


export const getDayAPP = (day) => {
  switch (day) {
    case 0:
      return "CN";
    case 1:
      return "T2";
    case 2:
      return "T3";
    case 3:
      return "T4";
    case 4:
      return "T5";
    case 5:
      return "T6";
    case 6:
      return "T7";
    default:
      break;
  }
};

export const getDayPC = (day) => {
  switch (day) {
    case 0:
      return "Chủ Nhật";
    case 1:
      return "Thứ 2";
    case 2:
      return "Thứ 3";
    case 3:
      return "Thứ 4";
    case 4:
      return "Thứ 5";
    case 5:
      return "Thứ 6";
    case 6:
      return "Thứ 7";
    default:
      break;
  }
};
