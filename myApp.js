const express = require('express');
const helmet = require("helmet");
const app = express();


app.use(helmet());
 app.use(helmet.hidePoweredBy({
  setTo: "PHP 4.2.0",
}))

app.use(helmet.frameguard({action: 'deny'}))
app.use(helmet.xssFilter())
app.use(helmet.noSniff())








































module.exports = app;
const api = require('./server.js');
console.log(api);

app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get("/test", function (request, response) {
  response.send("Test");
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
