
import {  useState } from "react";
function Login({ setUser}) {
    //let currentUsers;
    const [userName, setUserName] = useState("");
    const [myPassword, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [option, setOption] = useState("login")
    const [display, setOptionDisplay] = useState(false)
    //

    function handleUserName(event) {
        setUserName(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleAge(event) {
        setAge(event.target.value);
    }

    function handleOption(event) {
        setOption(event.target.value);
        if(event.target.value === "sign up"){
            setOptionDisplay(true)
        }
        else{
            setOptionDisplay(false)
        }
    }

      function handleSubmit(e) {
        e.preventDefault();
        if (option === "sign up") {
            console.log("sign up")
            const formData = {
            password: myPassword,
            name: userName,
            age: age
        };
        alert("submitted")

        fetch("http://localhost:9292/viewers", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
      })
      setUser(userName)}
      else{
        fetch("http://localhost:9292/viewers")
        .then(r=>r.json())
        .then(data=>{
        let isIncluded = false
        for(let x in data){
            console.log(data[x])
            if((data[x].name === userName)&&(data[x].password === myPassword)){
                isIncluded = true;
            }
        }
        if(isIncluded === true){
            setUser(userName)
            alert("Logged In Successfully")
        }
        else{
            alert("User Not Found")
        }
      })
      }}

      return(
        <div>
            <form onSubmit={handleSubmit}>
                <select
                    className="ui selection dropdown"
                    onChange={handleOption}
                    value = {option}>
                    <option value= "login">Login</option>
                    <option value = "sign up">Sign Up</option>
                </select>  
                <input type="text" placeholder = "UserName" onChange={handleUserName} value={userName} />
                <input type="text" placeholder = "Password" onChange={handlePassword} value={myPassword} />
                {display ? <input type="text" placeholder = "Age" onChange={handleAge} value={age} /> : null}
                <button type="submit">Submit</button>
            </form>
        </div>
      )
}

export default Login;