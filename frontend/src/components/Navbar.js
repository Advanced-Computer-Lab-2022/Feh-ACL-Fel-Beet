import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import UserDetails from "../components/UserDetails.js";
import { useEffect, useState } from "react";
import { useCookies, withCookies } from "react-cookie";
import axios from "axios";
import Cookies from "js-cookie";

const Navbar = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUser(Cookies.get("username"));
  }, []);

  const fetchUser = (username) => {
    setLoading(true);
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
        setLoading(false);
      });
  };

  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <Grid container justifyContent="left" padding={2} alignItems="center">
            <Grid item xs={4}>
              <h2 className="title">Saboora</h2>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}><UserDetails user={user}/></Grid>
          </Grid>
        </Link>
        
      </div>
    </header>
  );
};

export default Navbar;
