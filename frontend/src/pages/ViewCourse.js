import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import CourseDetails from "../components/CourseDetails";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import cookie from "react-cookies";

export default function ViewCourse() {
  const location = useLocation();
  const course = location.state.data;
  const navigate = useNavigate();
  const [courseData, setCourseData] = React.useState({});
  const [video, setVideo] = React.useState(course.VideoUrl);
  const [rating, setRating] = React.useState(0);
  const [reviewTitle, setReviewTitle] = React.useState("");
  const [reviewDescription, setReviewDescription] = React.useState("");

  const [ratingCourse, setRatingCourse] = React.useState(0);
  const [reviewTitleCourse, setReviewTitleCourse] = React.useState("");
  const [reviewDescriptionCourse, setReviewDescriptionCourse] =
    React.useState("");

  const traineeId = cookie.load("id");

  useEffect(() => {
    axios
      .post("http://localhost:4000/course/getCourse", { Name: course.Name })
      .then((res) => {
        setCourseData(res.data);
        console.log(res.data);
      });
  }, []);

  function handleSubtitleClick(idx) {
    setVideo(course.Subtitles[idx].VideoUrl);
  }

  async function handleInstructorReview() {
    await axios
      .post("http://localhost:4000/individualTrainee/rateInstructor", {
        traineeId,
        username: course.Professor,
        Rating: rating,
        Title: reviewTitle,
        Body: reviewDescription,
      })
      .then((res) => {
        alert("Review posted");
      });
  }

  async function handleCourseReview() {
    await axios
      .post("http://localhost:4000/individualTrainee/rateCourse", {
        traineeId,
        courseName: course.Name,
        Rating: ratingCourse,
        Title: reviewTitleCourse,
        Body: reviewDescriptionCourse,
      })
      .then((res) => {
        alert("Review posted");
      });
  }

  return (
    <div style={{ margin: "20px" }}>
      <Grid container>
        <Grid item xs={4} className="course-information">
          <CourseDetails course={courseData} curr={1} key={courseData._id} />
        </Grid>
      </Grid>
      <Typography component="legend">Rate Course</Typography>

      <div>
        <ReactPlayer url={video}></ReactPlayer>
      </div>
      {course.Subtitles &&
        course.Subtitles.map((subtitle, idx) => (
          <List>
            <ListItemText>{subtitle.Title}</ListItemText>
            <ListItemButton
              onClick={() => {
                handleSubtitleClick(idx);
              }}
            >
              {subtitle.Description}
            </ListItemButton>
            <Button
              onClick={() =>
                navigate("/exercise", {
                  state: {
                    data: subtitle.Exercise,
                  },
                })
              }
              variant={"contained"}
            >
              Solve Exercise
            </Button>
          </List>
        ))}
      <Stack spacing={2} marginTop={7}>
        <Typography component="legend">Rate Instructor</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <TextField
          label={"Review Title"}
          value={reviewTitle}
          onChange={(e) => {
            setReviewTitle(e.target.value);
          }}
        />
        <TextField
          multiline
          label={"Review Description"}
          value={reviewDescription}
          onChange={(e) => {
            setReviewDescription(e.target.value);
          }}
          rows={4}
        />
        <Button variant={"contained"} onClick={handleInstructorReview}>
          Submit Review
        </Button>

        <Typography component="legend">Rate Course</Typography>
        <Rating
          name="simple-controlled"
          value={ratingCourse}
          onChange={(event, newValue) => {
            setRatingCourse(newValue);
          }}
        />
        <TextField
          label={"Review Title"}
          value={reviewTitleCourse}
          onChange={(e) => {
            setReviewTitleCourse(e.target.value);
          }}
        />
        <TextField
          multiline
          label={"Review Description"}
          value={reviewDescriptionCourse}
          onChange={(e) => {
            setReviewDescriptionCourse(e.target.value);
          }}
          rows={4}
        />
        <Button variant={"contained"} onClick={handleCourseReview}>
          Submit Review
        </Button>
      </Stack>
    </div>
  );
}
