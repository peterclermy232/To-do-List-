import Movie from './Movie'
import {useEffect, useState} from 'react'

function MovieList({setSelect, movies}) {

    const [displayData, setDisplay] = useState(false)

    
    useEffect(()=>{
        setDisplay(
            movies.map((movie)=>{
                return <Movie title = {movie.title} setSelect = {setSelect} release_date = {movie.release_date} cast = {movie.cast} director = {movie.director}  producer = {movie.producer} image_URL = {movie.image_URL} key = {movie.id}/> 
                                }
                        )
                    )
    }, [movies])

    //

    return (
        <div>
            <ul className="cards">
                {displayData}
            </ul>
        </div>
    )
}

export default MovieList;