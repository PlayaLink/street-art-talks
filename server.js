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
      item = 'this mural by Starfighter and Fanakapan';
      link = 'http://www.streetarttalks.com/starfighter-fanakapan';
      break;
    case 'INFLUENCE':
      item = 'Legislative Influence For Sale';
      link = 'http://www.streetarttalks.com/shepard-fairey-legislative-influence-for-sale';
      break;
    case 'PEACE':
      item = 'Peace by piece';
      link = 'http://www.streetarttalks.com/tristan-eaton-peace-by-piece';
      break;
    case 'ABUELITA':
      item = 'La Abuelita';
      link = 'http://www.streetarttalks.com/el-mac-la-abuelita';
      break;
    case 'BLOOM':
      item = 'Bloom';
      link = 'http://www.streetarttalks.com/hueman-bloom';
      break;
    case 'WRINKLES':
      item = 'Wrinkles of the City';
      link = 'http://www.streetarttalks.com/jr-wrinkles-of-the-city';
      break;
    case 'ELEPHANTS':
      item = 'Every Piece of Ivory Comes From A Dead Elephant';
      link = 'http://www.streetarttalks.com/damon-martin-every-piece-of-ivory-comes-from-a-dead-elephant';
      break;
    case 'ARTSHARE':
      item = 'ArtShare LA façade';
      link = 'http://www.streetarttalks.com/mikael-b-artshare-la';
      break;
    case 'HERCULES':
      item = 'Captain Hercules Fighting Hydra';
      link = 'http://www.streetarttalks.com/nychos-captain-hercules-fighting-hydra';
      break;
    case 'RUSCHA':
      item = 'Ed Ruscha Monument';
      link = 'http://www.streetarttalks.com/kent-twitchell-ed-ruscha-monument';
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

http.createServer(app).listen(port, () => console.log(`Listening on port ${port}`));