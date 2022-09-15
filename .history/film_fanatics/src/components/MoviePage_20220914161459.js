import {useEffect, useState} from 'react'
function MoviePage() {

    const [reviews, setReviews] = useState([]);
    const [updatedR, setUpdatedR] = useState(true)

    const [newReviews, setNewReviews] = useState("");
    const [name, setName] = useState("")

    useEffect(() => {
        fetch(`http://localhost:9292/reviews`)
          .then((r) => r.json())
          .then((movieReviews) => 
          setReviews(movieReviews));
      }, []);

 
      useEffect(() => {
        fetch(`http://localhost:9292/reviews`)
          .then((r) => r.json())
          .then((movieReviews) => 
          setReviews(movieReviews));
      }, [updatedR]);
 

    const newReview = {
        name:name,
        review:newReviews
    }
   
    function handleSubmit(e) {
   
      
        fetch("http://localhost:9292/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReview),
        })
          .then((r) => r.json())
          .then((newReviews) => {
              console.log(newReviews)
              setReviews([newReviews, ...reviews])
          })
    }

    
      
    function handleDeleteClick(e){
       
        fetch(`http://localhost:9292/reviews/${e.target.value}`, {
            method: "DELETE",
        })
        setUpdatedR(!updatedR)
    }
        const listReview = reviews.map((review)=>{
            return (
                <div >
                <div className="testimonials">
                  <div className="testimonial-heading"> 
                  </div>
                  <div className="testimonial-box-container" >
                      <div className ="testimonial-box">
                        <div className="box-top">
                            <div className="profile">
                                <div classNam="profile-img">
                                    <img src="https://i.otto.de/i/otto/eaee3906-06f9-5f39-89e1-19837c7f1135?$responsive_ft2$"/>
                                </div>
                                <div className="name-user"> 
                                    <span>{review.name}</span>
                                </div>
                            </div>
                            <div className="reviews">
                                <i className ="fas fa-star">"{review.review}"  </i> 
                            </div>
                        
                        </div>
                        <div >
                        <button value={review.id} onClick={handleDeleteClick} >delete</button>
                        </div>
                      </div>
                     
                  </div>
            
            {/* <button value={review.id} onClick={handleEditClick}>edit</button> */}
            </div>
            </div>
            )
        }) 

       
    return (
        <div>
            <div>
            <div >
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={name}
                        onChange ={(e) => setName(e.target.value)} className="searchTermName"/>
                    </div>
                    <div>
                        <label>Review:</label>
                        <input type="text" placeholder="any comments" value={newReviews} onChange ={(e) => setNewReviews(e.target.value)}className="searchTermReview"/>
                        <input type="submit" />
                    </div>
                </form>
            </div>
            <div className="testimonialsss">
                {listReview}
            </div>
            </div>
        </div>
    )

}

export default MoviePage;


    // function handleEditClick(e){
    //     e.preventDefault();

    //     fetch(`http://localhost:9292/reviews/${e.target.value}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body:JSON.stringify(newReview)
    //     })
    //     .then((r) =>r.json())
    //     .then((editReview) => setReviews(editReview))
    // }