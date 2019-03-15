import axios from 'axios';
import * as AT from 'str/index';
import crypto from 'util/crypto/crypto';
import router from"@/router/index"
export default function ajax(options) {
  let token=''
  const userInfo=localStorage.getItem(AT.USERINFO);
  if(userInfo){
    token=JSON.parse(crypto.decode(userInfo,AT.CRYPTOKEY));
  }
  const promise= new Promise((resolve,reject)=>{
      const instanc=axios.create({
        baseURL:'',
        method:"GET", //默认get
        headers:{
          authorization:token.token
          //authorization:'sc1=578CE720675983D35B66423FC0802091F0D53168akp%2fNAfnBpPCiGYJIlVm71grYhuuIFjj8FCIl9%2bS%2bxYnBhHegD8idmOitVLX6h7yEuLokoIIkWfDhCYLpXEGO%2bJ0ybS43r3Uq1AAKQQCmDCEffULuiBJSmyqmTe%2fGWCfAcsa1Yy2sFvjz5ARfQuznoaDsSbnmMCktXjG5fZy3LWkS6OA'
        },      //请求头信
        data:{},
        timeout:5000,   //超时时间
       // withCredentials:true,   //携带凭证,
        responseType:"json",
        /*transformRequest:[function (data) {//在请求之前对数据更改
          return data
        }],*/
        transformResponse:[function (data) { //允许在then/catch之前响应数据进行更改
            return data;
        }]
      })
      instanc.interceptors.request.use(function (config) {
          //实现全局 loading 显示loading
          return config
      },function (err) {
          return Promise.reject(err);
      })
      instanc.interceptors.response.use(function (response) {
        if(localStorage.getItem('jxj')){
          console.log(response)
        }
        if(!response.data){
          alert("登录过期，请重新登录！");
          store.dispatch('exitLogin');
          router.push({path:'/login'});
          return {};
        }
        else if(response.data.status==-1){
          alert("登录过期，请重新登录！")
          store.dispatch('exitLogin');
          localStorage.removeItem(AT.USERINFO);
          router.push({path:'/login'});
          return {};
        }
        else{
          return response.data
        }

      },function (err) {
        return false
        //console.log("异常 关闭Loading图标")
      })
      instanc(options).then(res=>{
        resolve(res);
        return false;
      }).catch(err=>{
        reject(err);
      })
  })
  promise.then(res=>{
    options.success(res)
  }).catch(err=>{
    options.error(err);
  })
}
