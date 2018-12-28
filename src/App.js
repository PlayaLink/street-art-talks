import React, { Component } from 'react';
import skyline from './img/arts-district-dtla-skyline.jpg';
import angelinaChristina1 from './img/angelina-christina-1.jpg';
import angelinaChristina1_audio from './audio/AngelinaChristina1.mp3'
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const MuralList = () => (
  <div>
    <Link to="/angelina-christina">
      <img src={angelinaChristina1} />
      <span>Two faces</span>
    </Link>
  </div>
)

const Home = () => (
  <div>
    <header className="App-header">
      {/*<img src={skyline} className="App-logo" alt="logo" />*/}
      <h2 className="page-title">
        Street Art Talks
      </h2>
      <p>
        An audio tour of DTLA's arts district
      </p>
    </header>
    <MuralList/>
  </div>
)

const MuralDetail = (props) => (
  <div>
    <img src={props.image}/>
    <div>{props.title}</div>
    <div>{props.location}</div>
    <div>Artist: {props.name}</div>
    <audio controls>
      <source src={props.audio} type="audio/mpeg" />
    </audio>
    <div>
      <Link to="/">Go back</Link>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}/>
            <Route
              exact
              path='/angelina-christina'
              render={(props) => (
                <MuralDetail {...props}
                             name="Angelina Christina"
                             image={angelinaChristina1}
                             title="Two faces embracing."
                             location="4th and Merrick."
                             audio={angelinaChristina1_audio}
                />
              )}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
