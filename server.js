var http = require('http');
var express = require('express');
var twilio = require('twilio');
const bodyParser = require('body-parser');
const path = require('path');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 1337;

app.post('/sms', function(req, res) {
  const incomingText = req.body.Body.toUpperCase().replace(/#/g, '');
  let response = '';
  let item = null;
  let link = null;
  switch (incomingText) {
    case 'FACES':
      item = 'Starfighter and Fanakapan';
      link = 'http://www.streetarttalks.com/starfighter-fanakapan';
      break;
    case 'INFLUENCE':
      item = 'Shepard Fairey';
      link = 'http://www.streetarttalks.com/shepard-fairey-legislative-influence-for-sale';
      break;
    case 'PEACE':
      item = 'Tristan Eaton';
      link = 'http://www.streetarttalks.com/tristan-eaton-peace-by-piece';
      break;
    case 'ABUELITA':
      item = 'El Mac';
      link = 'http://www.streetarttalks.com/el-mac-la-abuelita';
      break;
    case 'BLOOM':
      item = 'Hueman';
      link = 'http://www.streetarttalks.com/hueman-bloom';
      break;
    case 'WRINKLES':
      item = 'JR';
      link = 'http://www.streetarttalks.com/jr-wrinkles-of-the-city';
      break;
    case 'ELEPHANTS':
      item = 'Damon Martin';
      link = 'http://www.streetarttalks.com/damon-martin-every-piece-of-ivory-comes-from-a-dead-elephant';
      break;
    case 'ARTSHARE':
      item = 'Mikael B';
      link = 'http://www.streetarttalks.com/mikael-b-artshare-la';
      break;
    case 'HERCULES':
      item = 'Nychos';
      link = 'http://www.streetarttalks.com/nychos-captain-hercules-fighting-hydra';
      break;
    case 'RUSCHA':
      item = 'Kent Twitchell';
      link = 'http://www.streetarttalks.com/kent-twitchell-ed-ruscha-monument';
      break;
    default:
      break;
  }
  if (!link) {
    response = "For a full list of featured street art, visit StreetArtTalks.com"
  } else {
    response = `To learn more about this mural by ${item} visit ${link}`
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

http.createServer(app).listen(port, () => console.log(`Listening on port ${port}`));