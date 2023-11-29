const { log } = require("console");
const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=london&appid=e4dfc3c2b0280dc506c41728b05445b0&units=metric";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write(
        "<h1>the temperature in london is " + temp + " degrees celcius.</h1>"
      );
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
