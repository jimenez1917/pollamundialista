const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://pollamundialista17.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
