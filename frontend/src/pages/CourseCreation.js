import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import axios from "axios";
import cookie from "react-cookies";
import AddExercise from "../components/AddExercise";
import React from "react";
import { Link } from "@mui/material";
import { Checkbox, FormGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

function CourseCreation() {
  const [Name, setName] = useState("");
  const [Subject, setSubject] = useState("");
  const [Price, setPrice] = useState("");
  const [videoPreview, setVideoPreview] = useState("");
  const [courseOutline, setCourseOutline] = useState("");
  const [promotion, setPromotion] = useState(1);
  const [promotionDate, setPromotionDate] = useState("");

  const [questionsE1, setQuestionsE1] = React.useState(["", "", ""]);
  const [choices1E1, setChoices1E1] = React.useState(["", "", "", "", ""]);
  const [choices2E1, setChoices2E1] = React.useState(["", "", "", "", ""]);
  const [choices3E1, setChoices3E1] = React.useState(["", "", "", "", ""]);
  const [correctChoicesE1, setCorrectChoicesE1] = React.useState(["", "", ""]);

  const [questionsE2, setQuestionsE2] = React.useState(["", "", ""]);
  const [choices1E2, setChoices1E2] = React.useState(["", "", "", "", ""]);
  const [choices2E2, setChoices2E2] = React.useState(["", "", "", "", ""]);
  const [choices3E2, setChoices3E2] = React.useState(["", "", "", "", ""]);
  const [correctChoicesE2, setCorrectChoicesE2] = React.useState(["", "", ""]);

  const [questionsE3, setQuestionsE3] = React.useState(["", "", ""]);
  const [choices1E3, setChoices1E3] = React.useState(["", "", "", "", ""]);
  const [choices2E3, setChoices2E3] = React.useState(["", "", "", "", ""]);
  const [choices3E3, setChoices3E3] = React.useState(["", "", "", "", ""]);
  const [correctChoicesE3, setCorrectChoicesE3] = React.useState(["", "", ""]);

  const [error, setError] = useState("");

  const [subtitleTitle1, setSubtitleTitle1] = useState("");
  const [subtitleTitle2, setSubtitleTitle2] = useState("");
  const [subtitleTitle3, setSubtitleTitle3] = useState("");

  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");

  const [videoUrl1, setVideoUrl1] = useState("");
  const [videoUrl2, setVideoUrl2] = useState("");
  const [videoUrl3, setVideoUrl3] = useState("");

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const id = cookie.load("id");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subtitle1 = {
      Title: subtitleTitle1,
      Hours: "",
      Description: description1,
      VideoUrl: videoUrl1,
      Exercise: {
        Name: "",
        Questions: [
          {
            Question: questionsE1[0],
            Choices: choices1E1[0],
            Answer: correctChoicesE1[0],
          },
          {
            Question: questionsE1[1],
            Choices: choices2E1,
            Answer: correctChoicesE1[1],
          },
          {
            Question: questionsE1[2],
            Choices: choices3E1,
            Answer: correctChoicesE1[2],
          },
        ],
      },
    };

    const subtitle2 = {
      Title: subtitleTitle2,
      Hours: "",
      Description: description2,
      VideoUrl: videoUrl2,
      Exercise: {
        Name: "",
        Questions: [
          {
            Question: questionsE2[0],
            Choices: choices1E2,
            Answer: correctChoicesE2[0],
          },
          {
            Question: questionsE2[1],
            Choices: choices2E2,
            Answer: correctChoicesE2[1],
          },
          {
            Question: questionsE2[2],
            Choices: choices3E2,
            Answer: correctChoicesE2[2],
          },
        ],
      },
    };

    const subtitle3 = {
      Title: subtitleTitle3,
      Hours: "",
      Description: description3,
      VideoUrl: videoUrl3,
      Exercise: {
        Name: "",
        Questions: [
          {
            Question: questionsE3[0],
            Choices: choices1E3,
            Answer: correctChoicesE3[0],
          },
          {
            Question: questionsE3[1],
            Choices: choices2E3,
            Answer: correctChoicesE3[1],
          },
          {
            Question: questionsE3[2],
            Choices: choices3E3,
            Answer: correctChoicesE3[2],
          },
        ],
      },
    };

    axios
      .post("http://localhost:4000/course/create", {
        Name: Name,
        VideoUrl: videoPreview,
        Subject: Subject,
        Price: Price,
        promotion: promotion,
        endDate: promotionDate,
        shortSummary: courseOutline,
        id: id,
        Subtitles: [subtitle1, subtitle2, subtitle3],
      })
      .then((res) => {
        alert("Course added successfully!");
      });
  };

  return (
    <div>
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
          <Stack direction={"row"} spacing={2}>
            <Typography>Promotion</Typography>
            <TextField
              type="text"
              onChange={(e) => setPromotion(e.target.value)}
            ></TextField>
            <Typography>End Date</Typography>
            <TextField
              type="date"
              onChange={(e) => setPromotionDate(e.target.value)}
            ></TextField>
          </Stack>
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

          <Typography>Subtitle 1</Typography>
          <Stack spacing={2}>
            <Typography>Title</Typography>
            <TextField
              type="text"
              onChange={(e) => {
                setSubtitleTitle1(e.target.value);
              }}
              //setSubtitles(current => [...current, 'Carl']);
              value={subtitleTitle1}
            ></TextField>
            <Typography>Description</Typography>
            <TextField
              multiline
              value={description1}
              onChange={(e) => setDescription1(e.target.value)}
            ></TextField>
            <Typography>Video Preview Link</Typography>
            <TextField
              value={videoUrl1}
              onChange={(e) => setVideoUrl1(e.target.value)}
            ></TextField>
            <Button
              variant="contained"
              onClick={() => {
                setOpen1(true);
              }}
            >
              Add Exercise
            </Button>
          </Stack>

          <Typography>Subtitle 2</Typography>
          <Stack spacing={2}>
            <Typography>Title</Typography>
            <TextField
              type="text"
              onChange={(e) => {
                setSubtitleTitle2(e.target.value);
              }}
              value={subtitleTitle2}
            ></TextField>
            <Typography>Description</Typography>
            <TextField
              multiline
              value={description2}
              onChange={(e) => setDescription2(e.target.value)}
            ></TextField>
            <Typography>Video Preview Link</Typography>
            <TextField
              value={videoUrl2}
              onChange={(e) => setVideoUrl2(e.target.value)}
            ></TextField>
            <Button
              variant="contained"
              onClick={() => {
                setOpen2(true);
              }}
            >
              Add Exercise
            </Button>
          </Stack>

          <Typography>Subtitle 3</Typography>
          <Stack spacing={2}>
            <Typography>Title</Typography>
            <TextField
              type="text"
              onChange={(e) => {
                setSubtitleTitle3(e.target.value);
              }}
              //setSubtitles(current => [...current, 'Carl']);
              value={subtitleTitle3}
            ></TextField>
            <Typography>Description</Typography>
            <TextField
              multiline
              value={description3}
              onChange={(e) => setDescription3(e.target.value)}
            ></TextField>
            <Typography>Video Preview Link</Typography>
            <TextField
              value={videoUrl3}
              onChange={(e) => setVideoUrl3(e.target.value)}
            ></TextField>
            <Button
              variant="contained"
              onClick={() => {
                setOpen3(true);
              }}
            >
              Add Exercise
            </Button>
          </Stack>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <div>
                  <span>I accept the </span>
                  <Link href="/TermsAndConditions">terms of use</Link>
                  <span> and </span>
                  <Link href="/TermsAndConditions">privacy policy</Link>
                </div>
              }
            />
          </FormGroup>

          <Button onClick={handleSubmit} variant="contained">
            Add Course
          </Button>
        </Stack>
        <AddExercise
          open={open1}
          setOpen={setOpen1}
          questions={questionsE1}
          setQuestions={setQuestionsE1}
          choices1={choices1E1}
          setChoices1={setChoices1E1}
          choices2={choices2E1}
          setChoices2={setChoices2E1}
          choices3={choices3E1}
          setChoices3={setChoices3E1}
          correctChoices={correctChoicesE1}
          setCorrectChoices={setCorrectChoicesE1}
        />
        <AddExercise
          open={open2}
          setOpen={setOpen2}
          questions={questionsE2}
          setQuestions={setQuestionsE2}
          choices1={choices1E2}
          setChoices1={setChoices1E2}
          choices2={choices2E2}
          setChoices2={setChoices2E2}
          choices3={choices3E2}
          setChoices3={setChoices3E2}
          correctChoices={correctChoicesE2}
          setCorrectChoices={setCorrectChoicesE2}
        />
        <AddExercise
          open={open3}
          setOpen={setOpen3}
          questions={questionsE3}
          setQuestions={setQuestionsE3}
          choices1={choices1E3}
          setChoices1={setChoices1E3}
          choices2={choices2E3}
          setChoices2={setChoices2E3}
          choices3={choices3E3}
          setChoices3={setChoices3E3}
          correctChoices={correctChoicesE3}
          setCorrectChoices={setCorrectChoicesE3}
        />
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default CourseCreation;
