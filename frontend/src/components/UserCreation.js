import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

function UserCreation() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { Username, Password };

    let response;

    switch (type) {
      case "admin":
        response = await fetch("http://localhost:4000/admin/createAdmin", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
        break;
      case "instructor":
        response = await fetch("http://localhost:4000/admin/createInstructor", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
        break;
      case "corporate trainee":
        response = await fetch("http://localhost:4000/admin/createCorporate", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
        break;
    }

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setUsername("");
      setPassword("");
      setError(null);
      console.log(type + " added");
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={5}>
        <Stack direction={"column"} spacing={1} margin={"20px"}>
          <Typography variant="h4">Create a New User</Typography>
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Select Type of User
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="type"
              value={type}
              label="Type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"instructor"}>Instructor</MenuItem>
              <MenuItem value={"corporate"}>Corporate Trainee</MenuItem>
            </Select>
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
              Add
            </Button>
          </FormControl>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default UserCreation;
