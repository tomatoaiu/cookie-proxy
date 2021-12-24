const path = require("path");
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const options = function (target) {
  return {
    target,
    changeOrigin: true,
    cookieDomainRewrite: "localhost",
    onError: function onError(err, req, res) {
      console.error(err);
    },
  };
};

const proxy = createProxyMiddleware(
  options("https://8d15-124-195-153-220.ngrok.io")
);
app.use(["/api"], proxy);
app.use(
  "/client-view",
  express.static(path.join(__dirname, "public/index.html"))
);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`\app listening at http://localhost:${PORT}\n`);
});
