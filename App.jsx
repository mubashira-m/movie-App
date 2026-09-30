import { useState } from "react"; import "./App.css";

import "./App.css";
function App() { 
  
 const [movieName, setMovieName] = useState(""); 
 const [genre, setGenre] = useState("");
 
 const [movies, setMovies] = useState([]);
  
const addMovie = () =>
   { if (movieName === "" || genre === "") 
  {
     alert("Please enter movie name and genre"); 
    return; }
  const newMovie = { id: movies.length+1, 
    name: movieName,
     genre: genre, 
     favorite: false };

  setMovies([...movies, newMovie]);
  
setMovieName(""); 
setGenre(""); 

};

const isFavorite = (id) => { 
  const updatedMovies = movies.map((movie) => {
   if (movie.id === id) {
     return { ...movie, favorite: !movie.favorite };
     } 
  return movie;
 });

setMovies(updatedMovies); 
};
return(
  <div className="app"> 
  <h1>Movie Collection</h1>
   
   <div className="form"> 
    <input 
    type="text" 
    placeholder="Movie Name"
     value={movieName} 
     onChange={(e) => setMovieName(e.target.value)} /> 
     <input 
     type="text" 
     placeholder="Genre" 
     value={genre} onChange={(e) => 
     setGenre(e.target.value)} /> 
     <button 
     onClick={addMovie}> Add Movie
      </button> </div> 
      
      <div className="movie-list">
         {movies.map((movie) => ( 
          <div className="movie-card" key={movie.id}> 
          <h2>{movie.name}</h2> <p>Genre: {movie.genre}</p> <p> Status:{" "} 
            <strong> {movie.favorite ? "Favorite" : "Not Favorite"} </strong>
            
             </p> <button onClick={() => isFavorite(movie.id)} >
               {movie.favorite ? "Not Favorite" : "Favorite"}
                </button> 
                </div> ))}
                 </div>
                </div> )}; 

export default App;