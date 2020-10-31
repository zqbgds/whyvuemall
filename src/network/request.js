import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/mn',
    timeout: 5000
  })

  // axios的拦截器
  instance.interceptors.request.use(config => {
    return config
  },err => {
    // 请求失败在这里执行
    console.log(err)
  })

  return instance(config)
}
