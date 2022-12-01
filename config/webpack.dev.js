const { merge } = require('webpack-merge');
const path = require('path');
const common = require("./webpack.common.js")
module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: "development",
  devServer: {
      // contentBase: path.resolve(__dirname, '..'),
      host: "localhost",
      port: 11000,
      liveReload: true,
    //   proxy: [{
    //       context: pathname => pathname.indexOf('/node_modules/@fui/core/dist/resources') !== -1,
    //       pathRewrite: (path, req) => path.replace('/node_modules/@fui/core/dist/resources?path=/com/fr/web/ui', '/node_modules/@fui/core/dist'),
    //       target: 'http://localhost:11000',
    //   }, {
    //       context: (pathname, req) => req.url.startsWith('/webroot'),
    //       target: 'http://localhost:8075',
    //   }],
  },
})