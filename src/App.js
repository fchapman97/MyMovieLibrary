import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ActorsList from './ActorsList';
import ActorDetails from './ActorDetails';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';
import DirectorsList from './DirectorsList';
import DirectorDetails from './DirectorDetails';
import WritersList from './WritersList';
import WriterDetails from './WriterDetails';
import UpdateMovie from './UpdateMovie';
import PeopleEditPage from './PeopleEditPage';
import PeopleDeletePage from './PeopleDeletePage';
import MovieDeletePage from './MovieDeletePage';
import PeopleAddPage from './PeopleAddPage';
import MovieAddPage from './MovieAddPage';
import Accueil from './Accueil';
import Header from './Header';

import './App.css';
    
function App(props) {
  return (
    <div>
      <Header />
      <div className="routerContainer">
        <Router>              
            <nav>
              <div className="linksContainer">
                {/* <div className="divLink">
                  <Link to="/">Accueil</Link>
                </div>                 */}
                <div className="divLink">
                  <Link to="/movies">Films</Link>
                </div>
                <div className="divLink">
                  <Link to="/actors">Acteurs</Link>
                </div>
                <div className="divLink">
                  <Link to="/directors">Producteur</Link>
                </div>
                <div className="divLink">
                  <Link to="/writers">Scénariste</Link>
                </div>
              </div>
            </nav>       
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/movies"><MoviesList /></Route>
              <Route path="/movieDetails"><MovieDetails /></Route>
              <Route path="/actors"><ActorsList /></Route>
              <Route path="/actorDetails"><ActorDetails /></Route>
              <Route path="/directors"><DirectorsList /></Route>
              <Route path="/directorDetails"><DirectorDetails /></Route>
              <Route path="/writers"><WritersList /></Route>
              <Route path="/writerDetails"><WriterDetails /></Route>
              <Route path="/updateMovie"><UpdateMovie /></Route>
              <Route path="/addMovie"><MovieAddPage /></Route>
              <Route path="/deleteMovie"><MovieDeletePage /></Route>              
              <Route path="/updatePeople"><PeopleEditPage /></Route>
              <Route path="/addPeople"><PeopleAddPage /></Route>
              <Route path="/deletePeople"><PeopleDeletePage /></Route>
              {/* <Route path="/"><Accueil /></Route> */}
            </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;