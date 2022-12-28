import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import UserDetails from "../components/UserDetails.js";
import { useEffect, useState } from "react";
import { useCookies, Cookies, withCookies } from "react-cookie";
import axios from "axios";

const Navbar = () => {
  const [cookies, setCookie] = useCookies(["username"]);
  const [user, setUser] = useState("");

  useEffect(() => {
    let username = cookies.username;
    axios
      .post(
        "http://localhost:4000/individualTrainee/findTrainee",
        {
          Username: username,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      });
  });

  return (
    <header>
      <div className="container">
        <Link to="/">
          <Grid container justifyContent="left" padding={2}>
            <Grid item xs={4}>
              <h2 className="title">Saboora</h2>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Link>
        <UserDetails user={user}/>
      </div>
    </header>
  );
};

export default Navbar;
