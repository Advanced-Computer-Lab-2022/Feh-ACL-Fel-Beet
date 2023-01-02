import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { useEffect } from "react";
import { Checkbox, FormGroup } from "@mui/material";
import { Link } from "@mui/material";

const RegistrationPage = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Gender, setGender] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cookie.load("id"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

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
        setError(JSON.stringify(res.data));
        if (res.data == "User Created!") {
          console.log("here");
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
      });
  };

  return (
    <div className="RegistrationPage">
      <div className="RegistrationContent">
        <Grid container justifyContent="center">
          <Grid item xs={4} justifyContent="center">
            <Box className="title">
              <h1>Create an Account</h1>
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={5}>
            <Stack direction={"column"} spacing={1} margin={"20px"}>
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
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
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
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <div>
                      <span>I accept the </span>
                      <Link href="/TraineeTermsAndConditions">
                        terms of use
                      </Link>
                      <span> and </span>
                      <Link href="/TraineeTermsAndConditions">
                        privacy policy
                      </Link>
                    </div>
                  }
                />
              </FormGroup>
              <Button variant={"contained"} onClick={handleSubmit}>
                Submit
              </Button>
              <Box className="title" justifyContent="center">
                <h4>{error}</h4>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RegistrationPage;
