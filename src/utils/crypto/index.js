import crypto from './crypto'
const inistall=Vue=>{
  if(inistall.installed){return}
  inistall.installed=true;
  Object.defineProperties(Vue.prototype,{
    $crypto:{
      get(){
        return crypto
      }
    }
  })
}
export default inistall
