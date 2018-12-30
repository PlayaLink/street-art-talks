var http = require('http');
var express = require('express');
var twilio = require('twilio');
const bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 1337;

app.post('/sms', function(req, res) {
  const incomingText = req.body.Body.toUpperCase();
  let response = '';
  let item = null;
  let link = null;
  switch (incomingText) {
    case 'FACES':
      item = 'Two Faces Embracing';
      link = 'https://playalink.github.io/street-art-talks/angelina-christina';
      break;
    case 'INFLUENCE':
      item = 'Legislative Influence For Sale';
      link = 'https://playalink.github.io/street-art-talks/shepard-fairey-reagan';
      break;
    default:
      break;
  }
  if (!link) {
    response = "For a full list of featured street art, visit https://playalink.github.io/street-art-talks/"
  } else {
    response = `Learn more about ${item} by visiting ${link}`
  }
  var twiml = new twilio.twiml.MessagingResponse();
  twiml.message(response);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

http.createServer(app).listen(port, function () {
  console.log("Express server listening on port 1337");
});