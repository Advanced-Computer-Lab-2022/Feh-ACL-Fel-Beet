import { Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import cookie from "react-cookies";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import FormLabel from "@mui/material/FormLabel";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [miniBiography, setMiniBiography] = useState("");
  const [password, setPassword] = useState("");
  const [wallet, setWallet] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const id = cookie.load("id");
  const type = cookie.load("type");

  useEffect(() => {
    if (type == "Indiviual Trainee") {
      axios
        .post("http://localhost:4000/individualTrainee/profile", { id })
        .then(res => {
          console.log(res);
          setUsername(res.data.Username);
          setFirstName(res.data.FirstName);
          setLastName(res.data.LastName);
          setEmail(res.data.Email);
          setGender(res.data.Gender);
          setWallet(res.data.Wallet);
        })
        .catch(e => console.log(e));
    } else if (type == "Instructor") {
      axios
        .post("http://localhost:4000/instructor/profile", { id })
        .then(res => {
          console.log(res);
          setUsername(res.data.Username);
          setFirstName(res.data.FirstName);
          setLastName(res.data.LastName);
          setEmail(res.data.Email);
          setGender(res.data.Gender);
          setMiniBiography(res.miniBiography);
          setWallet(res.data.Wallet);
        })
        .catch(e => console.log(e));
    }
  }, []);

  async function handleEdit(e) {
    if (type == "Indiviual Trainee") {
      await axios
        .post("http://localhost:4000/individualTrainee/edit", {
          id,
          Username: username,
          Password: password,
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Gender: gender,
        })
        .then(res => {
          console.log(res);
          setIsEditing(!isEditing);
        });
    }
    if (type == "Instructor") {
      await axios
        .post("http://localhost:4000/instructor/edit", {
          id,
          Username: username,
          Password: password,
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Gender: gender,
          miniBiography: miniBiography,
        })
        .then(res => {
          console.log(res);
          setIsEditing(!isEditing);
        });
    }
  }

  return (
    <Stack spacing={3} margin={5}>
      {isEditing ? (
        <>
          <TextField
            label={"Email"}
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></TextField>
          <TextField
            label={"Password"}
            type={"password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></TextField>
          <TextField
            label={"First Name"}
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          ></TextField>
          <TextField
            label={"Last Name"}
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          ></TextField>
          <TextField
            multiline
            label={"Mini Biography"}
            value={miniBiography}
            onChange={e => setMiniBiography(e.target.value)}
          ></TextField>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={e => {
                setGender(e.target.value);
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <Button variant="contained" onClick={handleEdit}>
            Save
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h4">Credentials</Typography>
          <Stack direction={"row"} spacing={1}>
            <Typography variant="body">Username:</Typography>
            <Typography variant="body">{username}</Typography>
          </Stack>

          <Stack direction={"row"} spacing={1}>
            <Typography variant="body">Email:</Typography>
            <Typography variant="body">{email}</Typography>
          </Stack>

          <Typography variant="h4">Personal Information</Typography>
          <Stack direction={"row"} spacing={1}>
            <Typography variant="body">First Name:</Typography>
            <Typography variant="body">{firstName}</Typography>
          </Stack>

          <Stack direction={"row"} spacing={1}>
            <Typography variant="body">Last Name:</Typography>
            <Typography variant="body">{lastName}</Typography>
          </Stack>

          <Stack direction={"row"} spacing={1}>
            <Typography variant="body">Gender:</Typography>
            <Typography variant="body">{gender}</Typography>
          </Stack>

          <Stack direction={"row"} spacing={1}>
            <Typography variant="body">Mini Biography:</Typography>
            <Typography variant="body">{miniBiography}</Typography>
          </Stack>

          <Stack direction={"row"} spacing={1}>
            <Typography variant="body">Wallet:</Typography>
            <Typography variant="body">{wallet}</Typography>
          </Stack>
          <Button
            onClick={() => {
              setIsEditing(!isEditing);
            }}
            variant="contained"
          >
            Edit
          </Button>
        </>
      )}
    </Stack>
  );
}
