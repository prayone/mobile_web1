import  api from "api/api"
export  const filSetHostUrl=(val)=>{
  if(/^http/.test(val)){
    return val
  }else{
    return api.domn+val
  }

}
export const filTime=(val,type)=>{

  const date=new Date();
  if(!val){
    console.log("转换时间时 传入时间是空")
    return val;
  }
  if(type==3){

    return val.toString().replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,'$1-$2-$3 $4:$5:$6');
  }
  date.setTime(val*1000)
  let hms=date.toString().match(/\d{2}:\d{2}:\d{2}/g)[0];
  let time=date.toLocaleDateString()+" "+ hms;
  switch (type) {
    case 1:   //年 月 日  时 分 秒
      return time.replace(/\/(\d+)\/(\d+)\ (\d+):(\d+):(\d+)/,'年$1月$2日 $3时$4分$5秒');
    case "yy-mm-dd":   //返回 年 月 日
        return date.toLocaleDateString();
    case "hh-mm-ss":
        return hms
    case "hh-mm":
      //console.log("hh--mmm",hms.replace(/:[^:]+$/,''));
      return hms.replace(/:[^:]+$/,'')
    default:
     return time
  }
}
export const changeBtnTxt=(val,data,time)=>{
  const d=new Date();
 // const time=d.getTime()/1000;
  if(time>data.end_time){
    return '看回放';
  }
 else if(time>=data.start_time-1800&&time<=data.end_time){
    return '看直播';
  }
 else if(time<=data.start_time){
    return "等待上课"
  }
  return val
}
export const filtMoney=(val,data)=>{
    if(val==0){
      return val
    }else {
      return val/100
    }
}

export  const setBgColor=(val,data,time)=>{
  const d=new Date();
  //const time=d.getTime()/1000;
  if(time>data.end_time){
    return{
      background:'#ff774d'
    }
  }
  else if(time>=data.start_time-1800&&time<=data.end_time){
    return val
  }
  else if(time<=data.start_time){
    return{
      background:'#ccc'
    }
  }
  return val
}
