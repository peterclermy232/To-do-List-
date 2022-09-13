import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Movie({title, release_date, cast, director, producer, image_URL, setSelect}) {
    const [details, setDetails] = useState(true)
    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/moviePage`; 
        history.push(path);
    }

    function handleImageClick() {
        setSelect(title)
        routeChange()
    }


    const handleClick = ()=>{
        setDetails(!details)
    }


return(
    <li className="cards__item" >
        <div className="card" onClick={handleClick}>
            <img className="card_image" alt = {title} src = {image_URL} onClick = {handleImageClick}/>
            <div className="card__content">
                <div className="card__title">{title}</div>
                <p className="card__text">{details ? `director: ${director}\n producer: ${producer}` : cast}</p>
                <div className="card__detail">
                <p>release_date: {release_date}</p>
                </div>
            </div>
        </div>
    </li>
) 
}

export default Movie;