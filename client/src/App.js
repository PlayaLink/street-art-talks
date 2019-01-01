import React, { Component } from 'react';
import eaton_peace_by_piece from './img/eaton_peace_by_piece.jpg';
import el_mac_la_abuelita from './img/el_mac_la_abuelita.jpg';
import fairey_legislative_influence_for_sale from './img/fairey_legislative_influence_for_sale.jpg';
import hueman_bloom from './img/hueman_bloom.jpg';
import jr_wrinkles from './img/jr_wrinkles.jpg';
import martin_ivory from './img/martin_ivory.jpg';
import mikaelb_artshare from './img/mikaelb_artshare.jpg';
import nychos_hercules_hydra from './img/nychos_hercules_hydra.jpg';
import starfighter_fanakapan from './img/starfighter_fanakapan.jpg';
import twitchell_ruscha from './img/twitchell_ruscha.jpg';
import interview_placeholder from './audio/interview_placeholder.mp3';
import './App.scss';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import styled from 'styled-components';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowLeft);


const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 8rem;
  background: cornflowerblue;
  color: white;
  border: 2px solid gray;
  text-decoration: none ;
`;
const MuralList = () => (
  <div className="mural-list">
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/starfighter-fanakapan' }>
        <img className="image" src={ starfighter_fanakapan } />
        <div className="title">Two faces</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/shepard-fairey-legislative-influence-for-sale' }>
        <img src={ fairey_legislative_influence_for_sale } />
        <div>Legislative Influence For Sale</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/tristan-eaton-peace-by-piece' }>
        <img src={ eaton_peace_by_piece } />
        <div>Peace by Piece</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/el-mac-la-abuelita' }>
        <img src={ el_mac_la_abuelita } />
        <div>La Abuelita</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/hueman-bloom' }>
        <img src={ hueman_bloom } />
        <div>Bloom</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/jr-wrinkles-of-the-city' }>
        <img src={ jr_wrinkles } />
        <div>The Wrinkles of the City (series)</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link
        to={ process.env.PUBLIC_URL +
        '/damon-martin-every-piece-of-ivory-comes-from-a-dead-elephant' }>
        <img src={ martin_ivory } />
        <div>Every Piece of Ivory Comes From A Dead Elephant</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/mikael-b-artshare-la' }>
        <img src={ mikaelb_artshare } />
        <div>Artshare LA exterior</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/nychos-captain-hercules-fighting-hydra' }>
        <img src={ nychos_hercules_hydra } />
        <div>Captain Hercules Fighting Hydra</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/kent-twitchell-ed-ruscha-monument' }>
        <img src={ twitchell_ruscha } />
        <div>Ed Ruscha Monument</div>
      </Link>
    </div>
  </div>
);

const Home = () => (
  <div>
    <header className="homepage-header">
      { /*<img src={skyline} className="App-logo" alt="logo" />*/ }
      <h2 className="title">
        Street Art Talks
      </h2>
      <p>
        An audio tour of DTLA street art
      </p>
    </header>
    <MuralList />
  </div>
);

const MuralCard = (props) => (
  <div className="mural-card">
    <img src={ props.image } />
    <div className="header">
      <div className="title">{ props.title }</div>
      <div>By <span className="artist">{ props.artist }</span></div>
      <p className="location">{ props.location }</p>
    </div>
    <audio className="audio-controls" controls>
      <source src={ props.audio } type="audio/mpeg" />
    </audio>
    { props.description && (
      <div className="description">
        { ( typeof props.description === 'string') ? (
           props.description.split('\n').map((i, key) => {
            return <p key={ key }>{ i }</p>;
          })
        ) : props.description }
      </div>
    ) }

    { props.link && (
      <div className="link"><Button href={ props.link }>Learn More</Button></div>
    ) }

    <div className="back-button">
      <Link to={ process.env.PUBLIC_URL + '/' }><FontAwesomeIcon icon="arrow-left" />&nbsp; Home</Link>
    </div>
  </div>
);

class App extends Component {
  render () {
    console.log('process.env.PUBLIC_URL: ', process.env.PUBLIC_URL);
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path={ process.env.PUBLIC_URL + '/' } component={ Home } />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/starfighter-fanakapan' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist="Starfighter and Fanakapan"
                           image={ starfighter_fanakapan }
                           title="Two faces sharing an intimate moment."
                           location="4th and Merrick."
                           audio={ interview_placeholder }
                           description="Completed in early 2017, this is a collaboration between L.A.-based Christina Angelina (aka Starfighter) and British artist Fanakapan."
                           link="https://www.instagram.com/starfightera/?hl=en"
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/shepard-fairey-legislative-influence-for-sale' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist="Shepard Fairey"
                           image={ fairey_legislative_influence_for_sale }
                           title="Legislative Influence For Sale."
                           location="Alemeda St and Traction Ave."
                           audio={ interview_placeholder }
                           link="http://angelcitybrewery.com/brick-mortar-spraypaint-wheatpaste/"
                           description="This piece by Shepard Fairey was one of several commissioned by the Museum of Contemporary Art (MOCA) as part of the “Arts in the Streets” exhibit in 2011.
Perhaps best known for his “Andre the Giant has a Posse” pasteups and “Hope and Change” Obama posters of 2008, Fairey frequently utilizes satire to make political statements.
You can also see another one of his pieces by looking south towards 3rd street from the brewery, entitled “Peace Goddess.”
"
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/tristan-eaton-peace-by-piece' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist="Tristan Eaton"
                           image={ eaton_peace_by_piece }
                           title="Peace by Peace"
                           location="Container Yard, 4th and Clayton"
                           audio={ interview_placeholder }
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/el-mac-la-abuelita' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist="El Mac"
                           image={ el_mac_la_abuelita }
                           title="La Abuelita"
                           location="The American Hotel, Hewitt St"
                           description="The portrait is painted entirely with aerosol and fatcaps, and is based on photos I shot a few years ago of an artist named Martha Gorman Schultz. She is a Navajo blanket weaver from northern Arizona, and part of a respected family of weavers including her granddaughter, Melissa Cody.
I felt this painting of Martha could be an empowering representation of beauty not often depicted in public art or media. Beauty that is feminine, elderly, indigenous, loving and powerful.
The building this mural was painted on was constructed in 1901, and you can imagine how much Los Angeles history it's seen over the last hundred years or so.
This was an especially collaborative effort- Along with the work of Kofie and Nuke surrounding the figure, SKILL UTI painted the wall to the left, integrating an already existing piece by DASH 2000(Rest In Peace). SWAN provided ground support, along with CHEE, AISE, BLK, OFIER, SELEK, CALVYRUS and some other younger members of UTI crew, which has been painting these walls for the last few decades.
The portrait is painted entirely with aerosol and fatcaps, and is based on photos I shot a few years ago of an artist named Martha Gorman Schultz. She is a Navajo blanket weaver from northern Arizona, and part of a respected family of weavers including her granddaughter, Melissa Cody.
I felt this painting of Martha could be an empowering representation of beauty not often depicted in public art or media. Beauty that is feminine, elderly, indigenous, loving and powerful.
The building this mural was painted on was constructed in 1901, and you can imagine how much Los Angeles history it's seen over the last hundred years or so.
This was an especially collaborative effort- Along with the work of Kofie and Nuke surrounding the figure, SKILL UTI painted the wall to the left, integrating an already existing piece by DASH 2000(Rest In Peace). SWAN provided ground support, along with CHEE, AISE, BLK, OFIER, SELEK, CALVYRUS and some other younger members of UTI crew, which has been painting these walls for the last few decades."
                           audio={ interview_placeholder }
                           link="https://elmac.net/murals-outdoors/985"
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/hueman-bloom' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist="Hueman"
                           image={ hueman_bloom }
                           title="Bloom"
                           location="701 E 3rd Street"
                           audio={ interview_placeholder }
                           link="http://www.huemannature.com/hueman/"
                           description={[`This wall commemorates the late community advocate and manager of The American Hotel, Joel Bloom`, <p>To learn more about Bloom, checkout <a href='https://www.talesoftheamerican.com/'>this documentary</a> about the Arts District.</p>]}
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/jr-wrinkles-of-the-city' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist="JR"
                           image={ jr_wrinkles }
                           title="The Wrinkles of the City"
                           location="Angel City Brewery"
                           audio={ interview_placeholder }
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL +
              '/damon-martin-every-piece-of-ivory-comes-from-a-dead-elephant' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist="Damon Martin"
                           image={ martin_ivory }
                           title="Every Piece of Ivory Comes From A Dead Elephant"
                           location="Department of Public Social Services, 4th Street."
                           audio={ interview_placeholder }
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/mikael-b-artshare-la' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist="Mikael B"
                           image={ mikaelb_artshare }
                           title="Artshare LA"
                           location="801 E 4th Place"
                           audio={ interview_placeholder }
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/nychos-captain-hercules-fighting-hydra' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist="Nychos"
                           image={ nychos_hercules_hydra }
                           title="Captain Hercules Fighting Hydra"
                           location="Container Yard, 4th and Clayton"
                           audio={ interview_placeholder }
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/kent-twitchell-ed-ruscha-monument' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist="Kent Twitchell"
                           image={ twitchell_ruscha }
                           title="Ed Ruscha Monument"
                           location="The American Hotel, Hewitt St"
                           audio={ interview_placeholder }
                />
              ) }
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
