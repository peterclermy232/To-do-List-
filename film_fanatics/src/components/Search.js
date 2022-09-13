import {useState} from 'react'
import Movie from './Movie'


function Search({movies}) {
    const [search,setSearch ] = useState("")
   
 
    
    console.log(movies)
    const filterMovieLists = movies.filter((list)=>{
        return (
            list.title.toLowerCase().includes(search.toLowerCase())
        )
    })


    const movieList = filterMovieLists.map((movie)=>{
        return (
        <Movie title = {movie.title}  release_date = {movie.release_date} cast = {movie.cast} director = {movie.director}  producer = {movie.producer} image_URL = {movie.image_URL} key = {movie.id}/> 
        )}
                )

    function handleSearch(event){
        setSearch(event.target.value)
    }

  

    return (
        <div>
            <div>
                <lable>Search</lable>
                <input  type="text" onChange={handleSearch} value={search}/>
            </div>
            <div>
            <ul className="cards">
                {movieList}
            </ul>
            </div>
        </div>
    )
}

export default Search;