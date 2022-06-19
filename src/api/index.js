//统一出口
import { recommendMusic, hotMusic } from '@/api/Home'
export const recommendMusicAPI = recommendMusic
export const hotMusicAPI = hotMusic
import { hotSearch, searchResult } from '@/api/Search'
export const hotSearchAPI = hotSearch
export const searchResultAPI = searchResult
import { getSongById, getLyricById } from '@/api/Play'
export const getSongByIdAPI = getSongById //获取歌曲详情
export const getLyricByIdAPI = getLyricById //获取歌词
