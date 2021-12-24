const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true, credentials: true }));

app.get("/api", (req, res) => {
  res.cookie("cookie-name", "cookie-value", {
    path: "/",
    maxAge: 60000,
    secure: true,
    HttpOnly: true,
  });

  res.json({});
});

app.listen(6000, () => console.log("Example app listening on port 6000!"));
