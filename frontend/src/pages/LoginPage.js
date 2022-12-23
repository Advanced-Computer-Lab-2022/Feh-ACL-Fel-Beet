import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
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
          navigate("../home");
        }
      });
  }

  return (
    <div>
      <div className="LoginPage">
        <div className="LoginContent">
          <Stack direction={"column"} spacing={1} width={"50%"} margin={"20px"}>
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
              Login
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
