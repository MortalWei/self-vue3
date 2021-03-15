const path = require("path");

module.exports = {
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