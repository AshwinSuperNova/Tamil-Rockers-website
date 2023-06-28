import './App.css'
import SearchIcon from './search.svg';
import { useState,useEffect } from 'react';
import MovieCard from './MovieCard';
const Api='https://www.omdbapi.com/?i=tt3896198&apikey=9a93a967';
const movie1={
  "Title": "The Amazing Spiderman 2 Webb Cut",
  "Year": "2021",
  "imdbID": "tt18351128",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
};
const App=() =>{
  const [movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState();
  const searchMovies=async (title)=>{
    const response=await fetch(`${Api}&s=${title}`);
    const data=await response.json();
    setMovies(data.Search);
  }



  useEffect(()=>{
    searchMovies('spiderman')
  },[]);
  return (
    <div className='app'>
      <h1>Tamil Rockers</h1>
      <div className='search'>
        <input 
        placeholder="search movies" 
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)} />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={()=>searchMovies(searchTerm)}

        />

      </div>
      {
        movies?.length >0 ? (
          <div className='container'>
            {movies.map((movie)=>(
        <MovieCard movie={movie}/>

            ))}
        </div>
        ) :(
          <div> 
            <h1>No Movies Found</h1>
          </div>
        )
      }
      
      </div>
    
  );
}
export default App;