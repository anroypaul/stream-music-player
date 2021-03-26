const express = require("express");
const axios = require("axios");
const parseString = require("xml2js").parseString;
const cors = require("cors");

const app = express();
const port = 5000 || process.env.port;

app.use(express.json());
app.use(cors());
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

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
