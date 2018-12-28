import React, { Component } from 'react';
import skyline from './img/arts-district-dtla-skyline.jpg';
import angelinaChristina1 from './img/angelina-christina-1.jpg';
import angelinaChristina1_audio from './audio/AngelinaChristina1.mp3'
import shepard_fairey_reagan_img from './img/shepard-fairey-reagan.jpg';
import shepard_fairey_reagan_audio from './audio/shepard_fairey_reagan.mp3';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const MuralList = () => (
  <div>
    <div className="mural-card">
      <Link to={process.env.PUBLIC_URL + '/angelina-christina'}>
        <img src={angelinaChristina1} />
        <div>Two faces</div>
      </Link>
    </div>
    <div className="mural-card">
      <Link to={process.env.PUBLIC_URL + '/shepard-fairey-reagan'}>
        <img src={shepard_fairey_reagan_img} />
        <div>Legislative Influence For Sale</div>
      </Link>
    </div>
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
        An audio tour of DTLA street art
      </p>
    </header>
    <MuralList/>
  </div>
)

const MuralCard = (props) => (
  <div>
    <img src={props.image}/>
    <div>{props.title}</div>
    <div>{props.location}</div>
    <div>Artist: {props.name}</div>
    <audio controls>
      <source src={props.audio} type="audio/mpeg" />
    </audio>
    <div>
      <Link to={process.env.PUBLIC_URL + '/'}>Go back</Link>
    </div>
  </div>
)

class App extends Component {
  render() {
    console.log("process.env.PUBLIC_URL: ", process.env.PUBLIC_URL);
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/angelina-christina'}
              render={(props) => (
                <MuralCard {...props}
                             name="Angelina Christina"
                             image={angelinaChristina1}
                             title="Two faces embracing."
                             location="4th and Merrick."
                             audio={angelinaChristina1_audio}
                />
              )}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/shepard-fairey-reagan'}
              render={(props) => (
                <MuralCard {...props}
                             name="Shepard Fairey"
                             image={shepard_fairey_reagan_img}
                             title="Legislative Influence For Sale."
                             location="Alemeda St and Traction Ave."
                             audio={shepard_fairey_reagan_audio}
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
