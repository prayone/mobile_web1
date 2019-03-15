import ajax from './ajax'
const inistall=Vue=>{
  if(inistall.installed){return}
  inistall.installed=true;
  Object.defineProperties(Vue.prototype,{
    $ajax:{
      get(){
        return ajax
      }
    }
  })
}
  export default inistall
