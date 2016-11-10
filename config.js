const path = require('path')

module.exports = {
  src: path.resolve(__dirname, 'src'),
  build: {
    index: path.resolve(__dirname, 'assets/index.html'),
    assetsRoot: path.resolve(__dirname, 'assets'),
    assetsSubDirectory: 'inspection',
    assetsPublicPath: '/',
    productionSourceMap: false
  },
  dev: {
    host: '0.0.0.0',
    publichost: '192.168.99.162',
    port: 8080,
    proxyTable: {
      '/api/*': 'http://162.243.117.34'
    }
  }
}
