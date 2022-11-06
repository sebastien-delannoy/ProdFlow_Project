var express = require("express");
//const router = express.Router();
var cors = require("cors");
let dbutil = require("./db_utils");

var app = express();
app.use(cors());

app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
});

app.use(express.json());
app.use(express.static("public"));

let conn = dbutil.getConnection("Localhost", "root", "12345678", "Prodflow");

app.get("/data", function (req, res) {
  dbutil.getSite(conn, (err, mdata) => {
    if (err) {
      return;
    }

    res.json(mdata);
  });
});

app.get("/lines", function (req, res) {
  dbutil.getLine(conn, (err, data_line) => {
    if (err) {
      return;
    }

    res.json(data_line);
  });
});

// app.post("/registersite", (req, res) => {
//   let { s_num, s_name, adr, town, zip_code, country } = req.body;

//   let dataToinsert = {
//     s_num: s_num,
//     s_name: s_name,
//     adr: adr,
//     town: town,
//     zip_code: zip_code,
//     country: country,
//   };

//   // dbutil.RegisterSite(conn, dataToinsert, (err, data) => {
//   //   return;
//   // });
// });

var server = app.listen(3015, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
