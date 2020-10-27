module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
        'methos': '@/methos'
      }
    }
  },
  //开启跨域代理
  devServer: {
    proxy: {
      '/api': {
        // 此处的写法，目的是为了 将 /api 替换成 https://m.jd.com/,如果没有设置地址的话默认请求target所设置的地址
        target: 'https://m.jd.com/',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
