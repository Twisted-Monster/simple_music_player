<template>
  <div>
    <p class="title">推荐歌单</p>
    <div>
      <van-row type="flex" justify="space-around">
        <van-col span="7" v-for="obj in recommendList" :key="obj.id">
          <van-image width="100%" height="3rem" :src="obj.picUrl" />
          <p class="song_name">{{ obj.name }}</p>
        </van-col>
      </van-row>
    </div>
    <!-- ------------------------------------------------------------------- -->
    <p class="title">最新的音乐</p>
    <SongItem v-for="obj in hotList" :key="obj.id" :name="obj.name" :author="obj.song.artists[0].name" :id="obj.id"> </SongItem>
  </div>
</template>

<script>
import { recommendMusicAPI, hotMusicAPI } from '@/api'
import SongItem from '@/components/SongItem'
export default {
  async created() {
    const res = await recommendMusicAPI({ limit: 6 })
    this.recommendList = res.data.result
    const songRes = await hotMusicAPI({ limit: 6 })
    this.hotList = songRes.data.result
  },
  data() {
    return {
      recommendList: [], //推荐音乐
      hotList: [] //最新音乐
    }
  },
  components: {
    SongItem
  }
}
</script>

<style scoped lang="less">
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
