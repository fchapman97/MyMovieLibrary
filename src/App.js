  import React,{useEffect, useState} from 'react';
  import './App.css';
  import Login from './Login/Login';
  import Movie from './Movie';
  import Search from './Search';
  import Header from './Header';
  import Sort from './Sort';
  import { render } from '@testing-library/react';
  
  class App extends React.Component {
    constructor(){
      super();
      this.handleSortChange = this.handleSortChange.bind(this);
      this.state = {
        movies:[],
        filteredMovies:[],
        sortedMovies:[],
        searchField:'',
        sortField:'aventure',
        isSorted:'false',
      }
    }
  
    handleSortChange(field) {
      this.setState({sortField: field});
    }
  
    render(){
      let token;
      const isSort = this.state.isSorted;
      const dataMovies = [
        {id: 1, title: 'Titre 1', categorie:'Fantastique', desc: 'Desc 1'},
        {id: 2, title: 'Inception', categorie:'Action', desc: 'Desc 2'},
        {id: 3, title: 'Immitation game', categorie:'Aventure', desc: 'Desc 3'},
        {id: 4, title: 'Vikings', categorie:'Fantastique', desc: 'Desc 4'},
        {id: 5, title: 'Titre 5', categorie:'Romantique', desc: 'Desc 5'},
        {id: 6, title: 'Titre 6', categorie:'Fantastique', desc: 'Desc 6'},
      ];
    
      this.state.filteredMovies = dataMovies.filter(movie =>(
        movie.title.toLowerCase().includes(this.state.searchField.toLowerCase())
      ))
  
      this.state.sortedMovies = dataMovies.filter(movie =>(
        movie.categorie.toLowerCase().includes(this.state.sortField.toLowerCase())
      ))
  
      if(!token) {
        return <Login />
      } 
  
      return (
        <div className="container">
          <Header />
          <Sort onSortChange={this.handleSortChange}/>
          <Search 
            placeholder="Search a movie"
            handleChange={(e) => this.setState({searchField:e.target.value})}/>  
            <AffichageMovies listMovies={this.state.filteredMovies}/>
            {isSort
              ? <AffichageMovies listMovies={this.state.sortedMovies}/>
              : <AffichageMovies listMovies={this.state.filteredMovies}/>
            }
        </div>
      )
    }
  }
  
  function AffichageMovies(props) {
    return(
      <div className="moviesContainer">
          <Movie data={props.listMovies}/>       
      </div>
    );
  }
  
  export default App;