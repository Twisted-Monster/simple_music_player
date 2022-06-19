const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const lesspath = path.resolve(__dirname + '/src/styles/cover.less')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint校验
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${lesspath}";`
          }
        }
      }
    }
  }
})
