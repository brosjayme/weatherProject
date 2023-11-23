const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=4329872576d743ebd8695e9f1c8a324e";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      console.log(data);
    });
  });

  res.send("server is up and running");
});
