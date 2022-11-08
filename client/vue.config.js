const path = require('path')

module.exports = {
  outputDir: path.join(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/calculator': {
        target: 'http://localhost:3000'
      }
    }
  }
}