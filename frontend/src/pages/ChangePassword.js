import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import Grid from "@mui/material/Grid";
import React from "react";
import axios from "axios";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const [newPass, setNewPass] = React.useState("");
  const id = cookie.load("id");
  const navigate = useNavigate();

  function handleClick() {
    axios
      .post("http://localhost:4000/individualTrainee/edit", {
        id,
        Password: newPass,
      })
      .then(navigate("../home"));
  }

  return (
    <div>
      <Grid container justifyContent="center" padding={4}>
        <Stack
          direction={"column"}
          spacing={1}
          width={"30%"}
          justifyContent="center"
          marginTop={5}
        >
          <TextField
            label="New Password"
            type={"password"}
            onChange={e => setNewPass(e.target.value)}
          ></TextField>
          <Button variant="contained" onClick={handleClick}>
            Save
          </Button>
        </Stack>
      </Grid>
    </div>
  );
}
