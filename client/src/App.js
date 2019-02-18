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
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
        <div className="title">#FACES</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/shepard-fairey-legislative-influence-for-sale' }>
        <img src={ fairey_legislative_influence_for_sale } />
        <div>#INFLUENCE</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/tristan-eaton-peace-by-piece' }>
        <img src={ eaton_peace_by_piece } />
        <div>#PEACE</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/el-mac-la-abuelita' }>
        <img src={ el_mac_la_abuelita } />
        <div>#ABUELITA</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/hueman-bloom' }>
        <img src={ hueman_bloom } />
        <div>#BLOOM</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/jr-wrinkles-of-the-city' }>
        <img src={ jr_wrinkles } />
        <div>#WRINKLES</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link
        to={ process.env.PUBLIC_URL +
        '/damon-martin-every-piece-of-ivory-comes-from-a-dead-elephant' }>
        <img src={ martin_ivory } />
        <div>#IVORY</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/mikael-b-artshare-la' }>
        <img src={ mikaelb_artshare } />
        <div>#ARTSHARE</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/nychos-captain-hercules-fighting-hydra' }>
        <img src={ nychos_hercules_hydra } />
        <div>#HERCULES</div>
      </Link>
    </div>
    <div className="mural-tile">
      <Link to={ process.env.PUBLIC_URL + '/kent-twitchell-ed-ruscha-monument' }>
        <img src={ twitchell_ruscha } />
        <div>#RUSCHA</div>
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
      <p className="instructions">
        <div>Text the #CODE</div>
        <div>to (351)-666-6721</div>
        <div>to learn more about each mural</div>
      </p>
    </header>
    <MuralList />
  </div>
);

const MuralCard = (props) => (
  <div className="mural-card">
    <img src={ props.image } />
    <div className="header">
      {props.title  && (
        <div className="title">{ props.title }</div>
       )}
      <div>By <span className="artist">{ props.artist }</span></div>
      <p className="location">{ props.location }</p>
    </div>
    {/*<audio className="audio-controls" controls>*/}
      {/*<source src={ props.audio } type="audio/mpeg" />*/}
    {/*</audio>*/}
    { props.description && (
      <div className="description">
        { (typeof props.description === 'string') ? (
          props.description.split('\n').map((i, key) => {
            return <p key={ key }>{ i }</p>;
          })
        ) : props.description }
      </div>
    ) }

    { props.link && (
      <div className="link"><Button href={ props.link }>Learn More</Button></div>
    ) }

    { props.source && (
      <div className="link">Source: <a style={ { color: 'cornflowerblue' } }>{ props.source }</a>
      </div>
    ) }

    <div className="back-button">
      <Link
        to={ process.env.PUBLIC_URL + '/' }><FontAwesomeIcon icon="arrow-left" />&nbsp; Home</Link>
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
                           artist={ [
                             <a href="https://www.instagram.com/starfightera/?hl=en/">Starfighter</a>,
                             ' & ',
                             <a href="https://www.instagram.com/fanakapan/?hl=en">Fanakapan</a> ] }

                           image={ starfighter_fanakapan }
                           location="4th and Merrick."
                           audio={ interview_placeholder }
                           description="Completed in early 2017, this mural is a collaboration between L.A.-based Christina Angelina (aka Starfighter) and British artist Fanakapan."
                           source="https://www.discoverlosangeles.com/blog/walking-tour-street-art-arts-district"
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/shepard-fairey-legislative-influence-for-sale' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist={ [
                             <a href="https://www.instagram.com/obeygiant/?hl=en">Shepard
                               Fairey</a> ] }
                           image={ fairey_legislative_influence_for_sale }
                           title="Legislative Influence For Sale."
                           location="Alemeda St and Traction Ave."
                           audio={ interview_placeholder }
                           source="http://angelcitybrewery.com/brick-mortar-spraypaint-wheatpaste/"
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
                           artist={ [
                             <a href="https://www.instagram.com/tristaneaton/?hl=en">Tristan Eaton</a> ] }
                           image={ eaton_peace_by_piece }
                           title="Peace by Peace"
                           location="Container Yard, 4th and Clayton"
                           audio={ interview_placeholder }
                           description="Completed in early 2015, this mural addresses the conflicts and debate around gun violence and gun control in the United States."
                           source="https://tristaneaton.com/#/peace-by-piece/"
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/el-mac-la-abuelita' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist={ [
                             <a href="https://www.instagram.com/mac_arte/?hl=en">Starfighter</a> ] }
                           image={ el_mac_la_abuelita }
                           title="La Abuelita"
                           location="The American Hotel, Hewitt St"
                           description="“The portrait is painted entirely with aerosol and fatcaps, and is based on photos I shot a few years ago of an artist named Martha Gorman Schultz. She is a Navajo blanket weaver from northern Arizona, and part of a respected family of weavers including her granddaughter, Melissa Cody.
I felt this painting of Martha could be an empowering representation of beauty not often depicted in public art or media. Beauty that is feminine, elderly, indigenous, loving and powerful.
The building this mural was painted on was constructed in 1901, and you can imagine how much Los Angeles history it's seen over the last hundred years or so.
This was an especially collaborative effort- Along with the work of Kofie and Nuke surrounding the figure, SKILL UTI painted the wall to the left, integrating an already existing piece by DASH 2000(Rest In Peace). SWAN provided ground support, along with CHEE, AISE, BLK, OFIER, SELEK, CALVYRUS and some other younger members of UTI crew, which has been painting these walls for the last few decades.
The portrait is painted entirely with aerosol and fatcaps, and is based on photos I shot a few years ago of an artist named Martha Gorman Schultz. She is a Navajo blanket weaver from northern Arizona, and part of a respected family of weavers including her granddaughter, Melissa Cody.
I felt this painting of Martha could be an empowering representation of beauty not often depicted in public art or media. Beauty that is feminine, elderly, indigenous, loving and powerful.
The building this mural was painted on was constructed in 1901, and you can imagine how much Los Angeles history it's seen over the last hundred years or so.
This was an especially collaborative effort- Along with the work of Kofie and Nuke surrounding the figure, SKILL UTI painted the wall to the left, integrating an already existing piece by DASH 2000(Rest In Peace). SWAN provided ground support, along with CHEE, AISE, BLK, OFIER, SELEK, CALVYRUS and some other younger members of UTI crew, which has been painting these walls for the last few decades.”  – El Mac"
                           audio={ interview_placeholder }
                           source="https://elmac.net/murals-outdoors/985"
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/hueman-bloom' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist={ [
                             <a href="https://www.instagram.com/hueman_/?hl=en">Hueman</a> ] }
                           image={ hueman_bloom }
                           title="Bloom"
                           location="701 E 3rd Street"
                           audio={ interview_placeholder }
                           link="http://www.huemannature.com/hueman/"
                           description={ [
                             `This wall commemorates the late community advocate and resident of The American Hotel, Joel Bloom`,
                             <p>To learn more about Bloom,
                               checkout <a href="https://www.talesoftheamerican.com/">this
                                 documentary</a> about The American Hotel and Al's Bar, two of the most famous local haunts in the Arts District.</p> ] }
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/jr-wrinkles-of-the-city' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist={ [ <a href="https://www.instagram.com/jr/?hl=en">JR</a> ] }
                           image={ jr_wrinkles }
                           title="The Wrinkles of the City"
                           location="Angel City Brewery"
                           audio={ interview_placeholder }
                           description="Wrinkles of the City is a multi-city project highlighting the elderly and, by extension, the history of a city.
Los Angeles is quite a new city, the second largest in the United States. Following Cartagena and Shanghai, JR wants to bring his Wrinkles of the City project to Los Angeles in 2011. This time, the purpose of the project isn't to meet witnesses of the changes that have occurred in the city or in their own lives.
Los Angeles is the place where the Hollywood myth was born, with its stars system, the glamour and the beauty being part of the identity of the city. For this project, JR wishes to oppose the wrinkles of old people living in LA and the marks of their past with the image of perfection or regenerated beauty in the XXIst century. For instance, in Southern California, plastic surgery is no longer a luxury but a lifestyle. It is now socially accepted, above all cultural and social barriers."
                           source="https://www.jr-art.net/projects/the-wrinkles-of-the-city-los-angeles"
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL +
              '/damon-martin-every-piece-of-ivory-comes-from-a-dead-elephant' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist={ [
                             <a href="https://www.facebook.com/Damon.Martin.Art/">Damon
                               Martin</a> ] }
                           image={ martin_ivory }
                           title="Every Piece of Ivory Comes From A Dead Elephant"
                           location="Department of Public Social Services, 4th Street."
                           audio={ interview_placeholder }
                           description="Damon Martin's mural depicts an elephant family in Martin’s signature “Razzle Dazzle” style. It is painted on the rear wall of the parking lot for the Department of Public Social Services on East Third Street in the heart of LA’s Arts District.
Martin was inspired to create the work after learning of efforts to protect elephants. He proposed to use street art to advance the ivory campaign which calls on people to join the Elephant March and to say no to ivory.
“Elephants on the ground are in crisis,” said Martin. “I hope that my work draws attention to the plight of the world’s elephants and motivates people to take action in a unique way.”
The elephant family is also symbolic of the services provided by the DPSS for the people of LA County."
                           source="https://www.lacountyarts.org/civicart/objects-1/info/145"
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/mikael-b-artshare-la' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist={ [
                             <a href="https://www.instagram.com/mikaelbrandrup/?hl=en">Mikael
                               B</a> ] }
                           image={ mikaelb_artshare }
                           title="Artshare LA"
                           location="801 E 4th Place"
                           audio={ interview_placeholder }
                           source="http://www.isupportstreetart.com/art-share-la-opens-new-chapter-mural-artist-mikael-b/"
                           description="“When I grew up in Denmark, my biggest inspiration was the graffiti and street art of Los Angeles. Moving to LA 4 years ago was one of my biggest decisions in my life and a dream coming true. And as fate would have it, one of my first gigs after moving to the city was doing live painting at one of @artshare_la ’s events.
Here just a few years later, my vision was selected to lead the institution into its next stage of rebranding. With “VIVID RHYTHMS” I want to share my passion, my dream, the belief that anything is possible. Take chances, create your own positive flow and rhythm and attract the things into your life you dream of.”  – Mikael B
"
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/nychos-captain-hercules-fighting-hydra' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist={ [
                             <a href="https://www.instagram.com/nychos/?hl=en">Nychos</a> ] }
                           image={ nychos_hercules_hydra }
                           title="Captain Hercules Fighting Hydra"
                           location="Container Yard, 4th and Clayton"
                           audio={ interview_placeholder }
                           description="This mural shows the fight between Captain Hercules and Hydra, and is a fusion of two stories: One goes back to the greek mythology, where Hercules is given the task to kill Hydra, a nine headed snake that grows two new heads for every decapitated one. The other story refers to a comic book published by none other than Marvel, where Captain America fights the identically named terrorist organization Hydra.
When merging these two plots, Nychos creates the story of Captain Hercules, who is battling a multi-headed snake and its skeleton.
Covered with the translucent skin of a lion and equipped with the attributes of both heroes – Hercules’ spear and Captain America’s shield – Nychos’ character appears on multiple layers, visually as well as substantially."
                           source="https://rabbiteyemovement.at/pow-wow-long-beach-2015-murals-exhibitions-movie-premiere/"
                />
              ) }
            />
            <Route
              exact
              path={ process.env.PUBLIC_URL + '/kent-twitchell-ed-ruscha-monument' }
              render={ (props) => (
                <MuralCard { ...props }
                           artist={ [ <a href="http://www.kenttwitchell.org/">Kent Twitchell</a> ] }
                           image={ twitchell_ruscha }
                           title="Ed Ruscha Monument"
                           location="The American Hotel, Hewitt St"
                           audio={ interview_placeholder }
                           source="https://www.discoverlosangeles.com/blog/walking-tour-street-art-arts-district"
                           description="Kent Twitchell is a legend in the L.A. mural scene. He's been painting across the city for decades, and as one would imagine, some of his most beloved pieces have been erased over the years.
That was the case for his original portrait of the artist Ed Ruscha. Fortunately, Twitchell had the chance to do an updated version of Ed Ruscha Monument on the side of the American Hotel in the Arts District.
The piece is 30 feet tall, but its position amidst the other local buildings makes it a bit difficult to see at street level. If you try to get up close, you might miss it, so take a long glance at the corner of Traction."
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
