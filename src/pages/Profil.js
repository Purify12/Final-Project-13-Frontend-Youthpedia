import React from 'react'
import { Form, Button } from "react-bootstrap";
import Img from "../pic/profile.jpg"
function Profil() {
    return (
        <div>
            <h1>My Profile</h1>
            <div className="row p-4">
                    <div class="col-md-6 pl-4">
                        <Form onSubmit="">
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            value="name"
                            //   onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <p> </p>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            value="email"
                            //   onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <p> </p>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            value="password"
                            //   onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <p> </p>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value="confirmPassword"
                            //   onChange={(e) => setConfirmPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <p> </p>
                        {/* <Form.Group controlId="pic">
                            <Form.Label>Change Profile Picture</Form.Label>
                            <Form.File
                            //   onChange={(e) => postDetails(e.target.files[0])}
                            id="custom-file"
                            type="image/png"
                            label="Upload Profile Picture"
                            custom
                            />
                        </Form.Group> */}
                        <Button type="submit" varient="primary">
                            Update
                        </Button>
                        </Form>
                    </div>
                    <div class="col-md-6"
                        style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                    >
                        <img className="profilePic" width="50%" height="auto" src={Img} alt="profilePic"  />
                    </div>
            </div>
        </div>     
    )
}

export default Profil
