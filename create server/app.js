const http = require("http");
const fs = require("fs");
const path = require("path");
const { dir } = require("console");
const dirPath = path.join(__dirname, "/templates");

const file2Send = fs.readFileSync(`${dirPath}/page.html`);

const server = http.createServer(function (req, res) {
  console.log(req);
  res.setHeader("Content-Type", "text/html");
  res.end(file2Send);
});

server.listen(3000);
