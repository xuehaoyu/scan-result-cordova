const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/sheepApi', {
      target: 'https://cat-match.easygame2021.com/sheep',
      pathRewrite: {
        '^/sheepApi': ''
      },
      changeOrigin: true,
      secure: false
    })
  )
}
