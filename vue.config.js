const path = require("path");

module.exports = {
  devServer: {
    proxy: {
      "/hapi": {
        target: "http://127.0.0.1:10090", //域名
        changeOrigin: true, //是否跨域
        ws: false, //代理 websockets
        secure: true, //是否https
        pathRewrite: {
          "^/hapi": "/api"
        }
      },
      "sapi": {
        target: "http://127.0.0.1:10090", //域名
        changeOrigin: true, //是否跨域
        ws: true, //代理 websockets
        secure: true, //是否https
        pathRewrite: {
          "^/sapi": ""
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.join(__dirname, "./src/theme/index.less")}"`
          // hack: `true; @import "${themePath}"`
          // hack: `true; @import "${path.join(
          //   __dirname,
          //   "./src/assets/common/resetui.less"//这个import 的路径必须是绝对路径
          // )}";`
        }
      }
    }
  }
};