import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import UserDetails from "../components/UserDetails.js";
import { useEffect, useState } from "react";
import { useCookies, withCookies } from "react-cookie";
import axios from "axios";
import Cookies from "js-cookie";
import { Button } from "@mui/material";

const Navbar = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchUser(Cookies.get("username"));
    setType(Cookies.get("type"));
  }, []);

  const fetchUser = (username) => {
    setLoading(true);
    axios
      .post(
        "http://localhost:4000/admin/findUser",
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
        <Grid container justifyContent="center" padding={0} alignItems="center">
          <Link to="/home">
            <Grid item xs={4}>
              <h2 className="title">Saboora</h2>
            </Grid>
          </Link>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}>
            <UserDetails user={user} type={type}/>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default Navbar;
