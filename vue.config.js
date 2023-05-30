/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {

  pages: {
    index: {
      entry: "src/pages/index/main.js",
      template: "public/client/index.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    //oibanoi
    oibanoi: {
      entry: "src/main.js",
      template: "public/index.html",
      title: "Admin",
      chunks: ["chunk-vendors", "chunk-common", "oibanoi"], //portal
    },
    daily: {
      entry: "src/dai-ly/main.js",
      template: "public/client/dai-ly.html",
      title: "Đại lý",
      chunks: ["chunk-vendors", "chunk-common", "daily"]
    },
    faqs: {
      entry: "src/faqs/main.js",
      template: "public/client/faqs.html",
      title: "Gatediamon faqs",
      chunks: ["chunk-vendors", "chunk-common", "faqs"]
    },
  },

  productionSourceMap: false,

  //cssSourceMap: false,
  // publicPath: '/',
  // transpileDependencies: [
  //   'vue-echarts',
  //   'resize-detector'
  // ],
  // configureWebpack: {
  //   // optimization: {
  //   //   splitChunks: {
  //   //     chunks: 'all'
  //   //   }
  //   // }
  //   devServer: {
  //     historyApiFallback: true
  //   }
  // }
}
