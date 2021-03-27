const express = require("express");
const axios = require("axios");
const parseString = require("xml2js").parseString;
const cors = require("cors");
const http = require("http");
const request = require("request");

const port = process.env.PORT || 5000;

const API_STREAM_LINK = "http://air.aristocrats.fm:8000/live2";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.static("public"));

app.get("/current-track", async (req, res) => {
  await axios
    .get(`https://aristocrats.fm/service/nowplaying-aristocrats8.xml`, {
      params: { t: Date.now() },
      // crossdomain: true,
    })
    .then((response) => {
      parseString(
        response.data,
        { explicitArray: false, mergeAttrs: true },
        (err, result) => {
          if (err) console.log(err);
          res.send(result);
        }
      );
    });

  //   res.sendStatus(200);
});

app.get("/audio-stream", (req, res) => {
  // await axios
  //   .get(API_STREAM_LINK, {
  //     responseType: "arraybuffer",
  //     headers: {
  //       "Content-Type": "audio/mpeg",
  //     },
  //   })
  //   .then((response) => {
  //     response.data.pipe(res);
  //   });
  let streamUrl = API_STREAM_LINK;

  request.get(API_STREAM_LINK, (error, resp) => {
    console.log(resp);
    if (resp.statusCode == 302) {
      streamUrl = resp.headers.location;
    }
  });

  res.set("Content-Type", "audio/mpeg");
  req.pipe(request.get(streamUrl)).pipe(res);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
