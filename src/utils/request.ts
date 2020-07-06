import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios' // 适配ts 
import jsonp from 'jsonp'
// import env from '../api/env'
import {Request} from '../interface'
import { setCookie } from './cookie';
//! 创建请求实例
const ins: AxiosInstance = axios.create({
  // baseURL: env.dev,
  timeout: 4000
})

//! 拦截器

ins.interceptors.request.use(function (config:AxiosRequestConfig):AxiosRequestConfig {
  //! 给头部报文绑定token
  //! 去看借口文档，如果文档要求携带在请求头，那么你就把下面代码还原注释
  //! 如果token是作为参数的，那么下面这两行代码就不能还原
  // const token = getCookie('token')
  // config.headers.token = token 
  return config
},function (err:any):Promise<never> {
  return Promise.reject(err)
})

ins.interceptors.response.use(function(res:AxiosResponse<any>):AxiosResponse<any> {
  // console.log('res - interceptors',res)

  if(res.config.url == '/api/user/login' && res.status === 200 ){
    //这就是登录请求成功
    // 将userId  和  token  存入cookie
    setCookie('userId',res.data.userId,{maxAge: 7})
    setCookie('token',res.data.token,{maxAge: 7})
  }
  return res
},function (err: any): Promise<never> {
  return Promise.reject(err)
})

//!封装函数

const request:Request = options => {
  const {url,data,method='get',type='cors',headers={
    'Content-Type': 'application/x-www-form-urlencoded'
  }} = options 
  if ( type=== 'cors' ) {
    switch (method.toLowerCase()) {
      case 'get':
        return ins.get(url,{params: data })
        break;
      case 'post':
        switch (headers['Content-Type']) {
          case 'application/json':
            //json提交
            return ins.post(url,data,{headers})
            break;
          case 'application/x-www-form-urlencoded':
            //表单提交
            const p = new URLSearchParams()
            for (let key in data ){
              p.append(key,data[key])
            }
            return ins.post(url,p,{headers})
            break;
          case 'multipart/form-data':
            //文件提交
            break;
          default:
            break;
        }
        return ins.get(url,{params: data })
        break;
      case 'patch':
        return ins.patch(url,data)
        break;
      case 'put':
        return ins.put(url,data)
        break;
      case 'delete':
        return ins.delete(url,{data})
        break;
    
      default:
        return ins.get(url,{params: data,headers})
        break;
    }
  } else {
    //jsonp跨域 
    return new Promise((resolve,reject) => {
      jsonp(url,{
        param: `${JSON.stringify(data)}&callback`,
        timeout: 4000,
        prefix: '__jp',
        name: `__jp-${Date.now()}`
      },(err,docs) => {
        resolve(docs)
      })
    })
  }
}

export default request