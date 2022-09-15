import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Update = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    title: "",
    release_date: "",
    cast: "",
    phone: "",
    director: "",
    producer: "",
    image_URL: ""
  });

  const { title, release_date, cast, director, producer, image_URL } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.title]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:9292/movies", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Movie</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter movie title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="releasedate"
              value={release_date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group m-2">
            <input
              type="test"
              className="form-control form-control-lg"
              placeholder="Enter "
              name="cast"
              value={cast}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter director "
              name="director"
              value={director}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group m-">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={producer}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="url"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={image_URL}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Update;