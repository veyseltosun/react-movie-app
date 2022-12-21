import React, { useEffect, useState } from 'react'
// import axios from 'axios';


const IMG_API = "https://image.tmdb.org/t/p/w1280";
const Main = () => {

  const [movies, setMovies] = useState(0);

  // const getMovies =  () => {
    
  //  axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aa915d26c9bf8c48e9e32224094ff621&page=1")
  //   .then((response) => {
  //     console.log(response.data.results);
  //     setMovies(response.data.results)
  //   })
  // }

  const getMovies = async () => {
    await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aa915d26c9bf8c48e9e32224094ff621&page=1")
      .then((respond) => respond.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results)
      })
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (


    <div>

      {movies?.map((movie) => {
        const { id, poster_path, title, vote_average, overview } = movie;
        return (

          <div key={id}>

            <img src={poster_path ? (IMG_API + poster_path) : "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"} alt={title} />

            <h2>{title}</h2>
            <p>{vote_average}</p>
            <p>{overview}</p>


          </div>
        )
      })}



        <button onClick={() => getMovies()}> get movie</button>
    </div>
  )
}

export default Main