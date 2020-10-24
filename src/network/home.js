// 对首页所有的网络请求进行管理
import { request } from "./request";

export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}
