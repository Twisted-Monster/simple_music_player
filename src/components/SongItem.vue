<template>
  <div>
    <van-cell :title="name" :label="author + '  ' + name" center>
      <!-- 使用right-icon插槽定义右侧图标 -->
      <template #right-icon>
        <van-icon name="play-circle-o" size="0.6rem" @touchstart="playFn" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    name: String, //歌名
    author: String, //作者
    id: Number
  },
  methods: {
    playFn() {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style></style>
