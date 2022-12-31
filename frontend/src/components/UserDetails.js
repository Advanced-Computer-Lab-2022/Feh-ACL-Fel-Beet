import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const UserDetails = ({ user }) => {
  const navigate = useNavigate();

  const logOut = () => {
    axios
      .get("http://localhost:4000/guest/logout")
      .then((res) => {
        console.log("logged out");
        console.log(res.data);
        Cookies.set("username", "");
      });
  };
  return (
    <div className="user-details" style={{ cursor: "pointer" }}>
      <Grid container alignItems="center" margin={1}>
        <Grid item xs={6} justifyContent="center">
          <Grid item xs={4} margin={1}>
            {user.FirstName} <span> </span> {user.LastName}
          </Grid>
          <Grid item xs={4} margin={1}>
            <strong>{user.Username}</strong>
          </Grid>
          <Grid item xs={4} margin={1}>
            <strong>Balance: </strong>
            {user.Wallet}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12} margin={1}>
            <Button variant="contained" color="error" onClick={logOut}>
              Log Out
            </Button>
          </Grid>
          <Grid item xs={12} margin={1}>
            <Link to="/home">
              <Button variant="contained">Go Home</Button>
            </Link>
          </Grid>
          <Grid item xs={12} margin={1}>
            <Link to="/myCourses">
              <Button variant="contained">My Courses</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserDetails;
