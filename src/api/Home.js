import request from '@/utils/request.js'

//封装网络请求方法
//推荐音乐
export const recommendMusic = params =>
  request({
    url: '/personalized',
    params
  })

//最新音乐
export const hotMusic = params =>
  request({
    url: '/personalized/newsong',
    params
  })
