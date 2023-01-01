import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { useEffect } from "react";

export default function LoginPage() {
  const [Username, setUsername] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {console.log(cookie.load('id'))}, [])

  function handleSubmit(e) {
    axios
      .post("http://localhost:4000/guest/login", {
        Username: Username,
        Password: Password,
      })
      .then((res) => {
        if (res.data) {
          cookie.save("username", res.data.username, { path: "/" });
          cookie.save("id", res.data.id, { path: "/" });
          cookie.save("type", res.data.type, { path: "/" });
          cookie.save("currency", 1);
          console.log(res.data);
          console.log(res.data.type);
          if(res.data.type === "Individual Trainee" || res.data.type==="Corporate Trainee"){
            navigate("../home");
          }
          if(res.data.type==="Instructor"){
            navigate("../instructorHome");
          }
          if(res.data.type==="Admin"){
            navigate("../adminHome");
          }
        }
      });
  }

  return (
    <div>
      <div className="LoginPage">
        <div className="LoginContent">
          <Grid container justifyContent="center">
            <Grid item xs={4} justifyContent="center">
              <Box className="title">
                  <h1>Log In</h1>
              </Box>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" padding={4}>
            <Grid item xs={6}>
              <Stack direction={"column"} spacing={1} width={"100%"} justifyContent="center">
                <TextField
                  variant="outlined"
                  label="Username"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                ></TextField>
                <TextField
                  variant="outlined"
                  type={"password"}
                  label="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                ></TextField>
                <Button variant="contained" onClick={handleSubmit}>
                  Log In
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
