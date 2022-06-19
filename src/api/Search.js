import request from '@/utils/request.js'

//热门关键字
export const hotSearch = () =>
  request({
    url: '/search/hot'
  })
export const searchResult = params =>
  request({
    url: '/cloudsearch',
    params
  })
