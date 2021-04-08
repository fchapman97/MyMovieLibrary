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

/*
import './App.css';
import Login from './Login/Login';
import Movie from './Movie';
import Search from './Search';
import Header from './Header';
import Sort from './Sort';
*/
    
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/movies">Films</Link>
            </li>
            <li>
              <Link to="/actors">Acteurs</Link>
            </li>
            <li>
              <Link to="/directors">Producteur</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/movies">
            <MoviesList />
          </Route>
          <Route path="/movieDetails">
            <MovieDetails />
          </Route>
          <Route path="/actors">
            <ActorsList />
          </Route>
          <Route path="/actorDetails">
            <ActorDetails />
          </Route>
          <Route path="/directors">
            <DirectorsList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

  /*
  function App() {
    const [movies, setMovies] = useState([]);
    let filteredMovies = [];
    let sortedMovies = [];
    let searchField = 'Ironman';
    let sortField = 'aventure';

    fetch('https://my-json-server.typicode.com/fchapman97/MyMovieLibrary/movies')
    .then((response) => response.json())
    .then((json) => 
      //console.log(json)
      setMovies(json)
    );
      
    filteredMovies = movies.filter(movie =>(
      movie.title.toLowerCase().includes(searchField.toLowerCase())
    ));

    sortedMovies = movies.filter(movie =>(
      movie.genre.toString().toLowerCase().includes(sortField.toLowerCase())
    ));

    return (
      <div className="container">
        <Header />
        <Sort 
          handleChange={(e) => sortField = e.target.value}
        />
        <Search 
          placeholder="Search a movie"
          handleChange={(e) => searchField = e.target.value}
        />  
        <div id="moviesContainer">
          {
            movies.map(movie => (
              <Movie movie={movie}/>
            ))
          }
        </div>
      </div>
    )
  }  
  
  function AffichageListMovies(props) {
    return(
      <div className="moviesContainer">
          <Movie movie={props.listMovies}/>       
      </div>
    );
  }

  /*
  class App extends React.Component {
    constructor(){
      super();
      this.state = {
        movies:[],
        filteredMovies:[],
        sortedMovies:[],
        searchField:'',
        sortField:'aventure',
        isSorted:'false',
        newMovies: []
      }
    }
  
    render(){
      let token;
      const isSort = this.state.isSorted;

      // const dataMovies = [
      //   {id: 1, title: 'Titre 1', categorie:'Fantastique', desc: 'Desc 1'},
      //   {id: 2, title: 'Inception', categorie:'Action', desc: 'Desc 2'},
      //   {id: 3, title: 'Immitation game', categorie:'Aventure', desc: 'Desc 3'},
      //   {id: 4, title: 'Vikings', categorie:'Fantastique', desc: 'Desc 4'},
      //   {id: 5, title: 'Titre 5', categorie:'Romantique', desc: 'Desc 5'},
      //   {id: 6, title: 'Titre 6', categorie:'Fantastique', desc: 'Desc 6'},
      // ];
    
      // this.state.filteredMovies = dataMovies.filter(movie =>(
      //   movie.title.toLowerCase().includes(this.state.searchField.toLowerCase())
      // ))
      // this.state.sortedMovies = dataMovies.filter(movie =>(
      //   movie.categorie.toLowerCase().includes(this.state.sortField.toLowerCase())
      // ));

      fetch('https://my-json-server.typicode.com/fchapman97/MyMovieLibrary/movies')
      .then((response) => response.json())
      .then((json) => 
        //console.log(json)
        this.setState({newMovies: json})
      );
        
      this.state.filteredMovies = this.state.newMovies.filter(movie =>(
        movie.title.toLowerCase().includes(this.state.searchField.toLowerCase())
      ));

      this.state.sortedMovies = this.state.newMovies.filter(movie =>(
        movie.genre.toString().toLowerCase().includes(this.state.sortField.toLowerCase())
      ));

      if(token) {
        return <Login />
      } 
  
      return (
        <div className="container">
          <Header />
          <Sort 
            handleChange={(e) => this.setState({sortField:e.target.value})}
          />
          <Search 
            placeholder="Search a movie"
            handleChange={(e) => this.setState({searchField:e.target.value})}
          />  
          <AffichageListMovies listMovies={this.state.filteredMovies}/>
          {isSort
            ? <AffichageListMovies listMovies={this.state.sortedMovies}/>
            : <AffichageListMovies listMovies={this.state.filteredMovies}/>
          }
        </div>
      )
    }
  }
  
  function AffichageListMovies(props) {
    return(
      <div className="moviesContainer">
          <Movie data={props.listMovies}/>       
      </div>
    );
  }

  export default App;
  */