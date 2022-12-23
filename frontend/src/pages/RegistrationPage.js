import Navbar from "../components/Navbar";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";

const RegistrationPage = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Gender, setGender] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("blah");

    axios
      .post(
        "http://localhost:4000/guest/signup",
        {
          Username: Username,
          Password: Password,
          Email: Email,
          FirstName: FirstName,
          LastName: LastName,
          Gender: Gender,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="RegistrationPage">
      <div className="RegistrationContent">
        <Stack direction={"column"} spacing={1} width={"50%"} margin={"20px"}>
          <TextField
            variant="outlined"
            label="Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          ></TextField>
          <TextField
            variant="outlined"
            label="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <TextField
            variant="outlined"
            label="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            variant="outlined"
            label="First Name"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></TextField>
          <TextField
            variant="outlined"
            label="Last Name"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          ></TextField>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setGender(e.target.value)}
              value={Gender}
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <Button variant={"contained"} onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default RegistrationPage;
