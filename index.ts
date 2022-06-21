import express from "express";
import * as path from "path";

const app = express();
const expressStaticPath = "frontend/build";

app.use(express.static(path.resolve(expressStaticPath)));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(expressStaticPath, "index.html"));
});

app.listen(3333);
