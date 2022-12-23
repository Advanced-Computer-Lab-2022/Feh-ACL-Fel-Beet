import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import axios from "axios";
import cookie from "react-cookies";
//cookie.save("username", username, { path: "/" });
//cookie.load("username"),
function CourseCreation() {
  const [Name, setName] = useState("");
  const [Subject, setSubject] = useState("");
  const [Price, setPrice] = useState("");
  const [videoPreview, setVideoPreview] = useState("");
  const [courseOutline, setCourseOutline] = useState("");

  //const [Subs, setSubs] = useState("");
  const [error, setError] = useState("");
  const id = cookie.load("id");
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/course/create", {
        Name: Name,
        VideoUrl: videoPreview,
        Subject: Subject,
        Price: Price,
        shortSummary: courseOutline,
        id: id
      })
      .then((res) => {
        alert("Course added successfully!");
      });
  };

  return (
    <form className="courseCreationForm" onSubmit={handleSubmit}>
      <Stack
        width={"75%"}
        marginLeft="auto"
        marginRight="auto"
        marginBottom={2}
        spacing={1.5}
      >
        <h3>Create a New Course</h3>
        <Typography>Name </Typography>
        <TextField
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={Name}
        ></TextField>
        <Typography>Subject </Typography>
        <TextField
          type="text"
          onChange={(e) => setSubject(e.target.value)}
          value={Subject}
        ></TextField>
        <Typography>Price </Typography>
        <TextField
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={Price}
        ></TextField>

        <Typography>Course Outline</Typography>
        <TextField
          multiline
          rows={4}
          type="text"
          onChange={(e) => setCourseOutline(e.target.value)}
          value={courseOutline}
        ></TextField>

        <Typography>Video Preview Link</Typography>
        <TextField
          type="text"
          onChange={(e) => setVideoPreview(e.target.value)}
          value={videoPreview}
        ></TextField>

        {/* <Typography>
          Subs{" "}
        </Typography>
        <TextField
          type="text"
          onChange={(e) => setSubs(e.target.value)}
          value={Subs}
        ></TextField> */}

        <Button onClick={handleSubmit} variant="contained">
          Add Course{" "}
        </Button>
      </Stack>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default CourseCreation;
