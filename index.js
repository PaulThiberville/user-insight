const express = require("express");
const useragent = require("express-useragent");
const geoip = require("geoip-lite");
const uap = require("ua-parser-js");
const app = express();
const port = 3000;

app.use(useragent.express());

app.set("trust proxy", true);

app.get("/", (req, res) => {
  const ip = req.ip;
  const geo = geoip.lookup(ip);
  const country = geo ? geo.country : "Unknown";
  const isMobile = req.useragent.isMobile;
  const ua = uap(req.headers["user-agent"]);
  res.json({ ip, country, isMobile, userAgent: ua });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
