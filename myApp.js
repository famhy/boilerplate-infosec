const express = require('express');
const helmet = require("helmet");
const app = express();


app.use(helmet({
  xPoweredBy: false,
}));













































const api = require('./server.js');
console.log(api);

app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
module.exports = app;