import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'


const axios = require("axios");

function Form() {
  var [username, setUsername] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  function submitForm(e) {
    e.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (username !== "" || email !== "" || password !== "") {
      if (re.test(String(email).toLowerCase())) {
        axios
          .post("/user", {
            username: username,
            email: email,
            password: password,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        alert("Please enter a valid Email Address");
      }
    } else {
      alert("Please Enter all fields");
    }
  }
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="p-3 mb-2 bg-primary text-white">User Form</h2>
          <Form onSubmit={submitForm}>
           
/*
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ENTER USERNAME</Form.Label>
              <Form.Control type="email" placeholder="Enter email"   onChange=
              {(e) => {
                setUsername(e.target.value);
              }}/>
             
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ENTER USERNAME</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
              
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  onChange=
              {(e) => {
                setPassword(e.target.value);
              }}/>
              
            </Form.Group>
            <br />
            <Button variant="success"
            onChange={(e)=>{setPassword(e.target.value)}}>Success</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Form;
