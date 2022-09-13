import { useEffect, useState } from "react";

function Profile({user}) {
    const [display, setDisplay] = useState(<h1>Not Logged In</h1>)
    useEffect(()=>{
       // let my_user;
       // let reviews;
       heeh
        let myReviews;
        fetch(`http://localhost:9292/viewers/${user}/reviews`)
        .then(r=>r.json())
        .then(data=>{
            myReviews = data.map((review)=>{
                let my_movie
                fetch(`http://localhost:9292/movies/${review.movie_id}`)
                .then(r=>r.json())
                .then(data=>{
                    my_movie = data.name
                })
                return <div>
                    <h3>{my_movie}</h3>
                    <p>{review.review}</p>
                    </div>
            });
            setDisplay(
                <div>
                <h1>Welcome {user}!</h1>
                <h2>Reviews:</h2>
                {myReviews}
                </div>
            )
        }
        )
    },[])

    return (
        <div>
            {display}
        </div>
    )
}

export default Profile;