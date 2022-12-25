import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import ReactPlayer from "react-player";

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
      <ReactPlayer url={courseData.VideoUrl}></ReactPlayer>
      <h4>{courseData.Name}</h4>
      <p>
        <strong>Total Hours: </strong>
        {courseData.Hours}
      </p>
      <p>
        <strong>Total Rating: </strong>
        {courseData.Rating}
      </p>
      <p>
        <strong>Number of Enrolled Students: </strong>
        {courseData.noOfEnrolled}
      </p>
      <p>
        <strong>Price: </strong>
        {courseData.Price}
      </p>
    </div>
  );
}
