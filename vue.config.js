const webpack = require('webpack');
const path = require('path');
// vue.config.js
module.exports = {
  // 选项...
   configureWebpack: {//引入jquery
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  },

}