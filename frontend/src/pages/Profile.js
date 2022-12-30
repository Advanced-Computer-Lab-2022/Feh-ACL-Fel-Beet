import { Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import cookie from "react-cookies";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [miniBiography, setMiniBiography] = useState("");

  const id = cookie.load("id");

  useEffect(() => {
    axios
      .post("http://localhost:4000/individualTrainee/profile", { id })
      .then((res) => {
        console.log(res);
        setUsername(res.data.Username);
        setFirstName(res.data.FirstName);
        setLastName(res.data.LastName);
        setEmail(res.data.Email);
        setGender(res.data.Gender);
        //setMiniBiography(res.miniBiography);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Navbar />
      <Typography variant="h4">Credentials</Typography>
      <Typography variant="body">Username:</Typography>
      <Typography variant="body">{username}</Typography>
      <br></br>
      <Typography variant="body">Email:</Typography>
      <Typography variant="body">{email}</Typography> <br></br>
      <br></br>
      <Typography variant="h4">Personal Information</Typography>
      <Typography variant="body">First Name:</Typography>
      <Typography variant="body">{firstName}</Typography>
      <br></br>
      <Typography variant="body">Last Name:</Typography>
      <Typography variant="body">{lastName}</Typography> <br></br>
      <Typography variant="body">Gender:</Typography>
      <Typography variant="body">{gender}</Typography>
      <br></br>
      <Typography variant="body">Mini Biography:</Typography>
      <Typography variant="body">{miniBiography}</Typography>
      <br></br>
      <Button variant="contained">Edit</Button>
    </div>
  );
}
