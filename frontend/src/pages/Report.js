import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import cookie from "react-cookies";

export default function Report() {
  const [type, setType] = React.useState("");
  const [body, setBody] = React.useState("");

  const id = cookie.load("id");

  function handleClick() {
    axios
      .post("http://localhost:4000/instructor/report", {
        id,
        Type: type,
        Body: body,
      })
      .then(alert("Report Issued!"));
  }

  return (
    <div>
      <Grid container justifyContent="center">
        <Stack
          direction={"column"}
          spacing={1}
          width={"50%"}
          justifyContent="center"
          marginTop={5}
        >
          <h2>Report a Problem</h2>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type of Issue</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Type of Issue"
              onChange={e => setType(e.target.value)}
            >
              <MenuItem value={"Financial"}>Financial</MenuItem>
              <MenuItem value={"Technical"}>Technical</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            multiline
            label="Description"
            variant="outlined"
            onChange={e => setBody(e.target.value)}
          ></TextField>
          <Button variant="contained" onClick={handleClick}>
            Report
          </Button>
        </Stack>
      </Grid>
    </div>
  );
}
