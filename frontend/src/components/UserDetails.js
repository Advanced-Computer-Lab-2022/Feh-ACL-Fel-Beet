import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button";
import axios from "axios"
import { Link } from "react-router-dom";

const UserDetails = ({ user }) => {
  const navigate = useNavigate();

  const logOut = () => {
    axios.get("http://localhost:4000/guest/logout").then(console.log("logged out"));
  }
  return (
    <div className="user-details" style={{ cursor: "pointer" }}>
      <Grid container>
        <Grid item xs={6} justifyContent="center">
          <Grid item xs={4} margin={1}>
            {user.FirstName} <span> </span> {user.LastName}
          </Grid>
          <Grid item xs={4} margin={1}>
          <strong>{user.Username}</strong>
          </Grid>
          <Grid item xs={4} margin={1}>
          <strong>Balance: </strong>{user.Wallet}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12} margin={1}>
            <Button variant="contained" onClick={logOut}>
                    Log Out
            </Button>
          </Grid>
          <Grid item xs={12} margin={1}>
            <Link to="/home">
            <Button variant="contained">
                    Go Home
            </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      
    </div>
  );
};

export default UserDetails;
