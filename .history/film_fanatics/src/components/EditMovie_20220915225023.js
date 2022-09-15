import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditMovie = () => {
    let history = useHistory();
    const { id } = useParams();
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

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003//${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data);
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={title}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={release_date}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={cast}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={director}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
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
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default EditMovie;
