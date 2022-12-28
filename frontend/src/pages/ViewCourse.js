import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import CourseDetails from "../components/CourseDetails";
import Grid from "@mui/material/Grid";

export default function ViewCourse() {
  const location = useLocation();
  const course = location.state.data;

  const [courseData, setCourseData] = React.useState({});
  useEffect(() => {
    axios
      .post("http://localhost:4000/course/getCourse", { Name: course.Name })
      .then((res) => {
        setCourseData(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={4} className="course-information">
          <CourseDetails course={courseData} curr={1} key={courseData._id} />
        </Grid>
      </Grid>
      <ReactPlayer url={courseData.VideoUrl}></ReactPlayer>
    </div>
  );
}
