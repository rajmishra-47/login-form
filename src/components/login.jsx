import React from 'react'
import { useState } from 'react'
import users from "./users.JSON";
export default function Login() {

    const [mail,setMail]=useState("");
    const [password,setPassword]=useState("");

    const a=(e)=>{

        setMail(e.target.value);
    }

    const b=(e)=>{

        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.users.find(
          (user) => user.username === mail && user.password === password
        );
        if (user) {
          console.log("Logged in successfully");
          
        } else {
          console.log("Invalid credentials");
        }
      };
  return (
    <div>
        <form  onSubmit={handleSubmit}> 
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"

      value={mail}

      onChange={a}
    />
    <small id="emailHelp" className="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
      value={password}
      onChange={b}
    />
  </div>
  {/* <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div> */}
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

    </div>
  )
}
