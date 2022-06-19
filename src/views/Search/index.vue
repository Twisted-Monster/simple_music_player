<template>
  <div>
    <van-search v-model="searchValue" shape="round" background="skyblue" placeholder="请输入搜索关键词" />
    <!-- 热门搜索 -->
    <div class="search_wrap" v-if="resultList.length == 0">
      <p class="hot_title">热门搜索</p>
      <ul class="hot_name_wrap">
        <li class="hot_item" v-for="(obj, index) in hotList" :key="index" @click="btn(obj.first)">
          {{ obj.first }}
        </li>
      </ul>
    </div>

    <!-- 搜索结果 -->
    <div class="search_wrap" v-else>
      <!-- 标题 -->
      <p class="hot_title">最佳匹配</p>
      <SongItem v-for="obj in resultList" :key="obj.id" :name="obj.name" :author="obj.ar[0].name" :id="obj.id"> </SongItem>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchResultAPI } from '@/api'
import SongItem from '@/components/SongItem'
export default {
  data() {
    return {
      searchValue: '',
      hotList: [],
      resultList: [],
      timer: null //用来保存定时器
    }
  },
  async created() {
    const res = await hotSearchAPI()
    this.hotList = res.data.result.hots
  },
  methods: {
    async btn(str) {
      this.searchValue = str
      const res = await searchResultAPI({
        type: 1,
        keywords: this.searchValue
      })
      this.resultList = res.data.result.songs
      setTimeout(() => {
        clearTimeout(this.timer)
      }) //防止下面的请求再次执行
    }
  },
  watch: {
    /* 防抖：n秒内最后执行一次(函数在n秒内再次执行，重新计时)*/
    /* 节流：间隔n秒执行一次 */
    searchValue(val) {
      clearTimeout(this.timer)
      if (val.length == 0) {
        return (this.resultList = [])
      }
      this.timer = setTimeout(async () => {
        const res = await searchResultAPI({
          type: 1,
          keywords: val
        })
        this.resultList = res.data.result.songs
      }, 500)
    }
  },
  components: {
    SongItem
  }
}
</script>

<style scoped>
/* 覆盖vant组件样式，除了可以用less文件以外，还可以找到类名直接覆盖 */
/* deep控制scoped加入的随意属性，加到选择器前面能确保选中组件内的标签名称 */
/deep/ .van-field__control {
  font-size: 14px !important;
}
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>
