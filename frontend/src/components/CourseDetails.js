import React from "react";
import { useNavigate } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const navigate = useNavigate();
  return (
    <div
      className="course-details"
      style={{ cursor: "pointer", marginLeft: "4%" }}
      onClick={() =>
        navigate("../viewCourse", {
          state: {
            data: course,
          },
        })
      }
    >
      <h4>{course.Name}</h4>
      <p>
        <strong>Total Hours: </strong>
        {course.Hours}
      </p>
      <p>
        <strong>Total Rating: </strong>
        {course.Rating}
      </p>
      <p>
        <strong>Number of Enrolled Students: </strong>
        {course.noOfEnrolled}
      </p>
      <p>
        <strong>Price: </strong>
        {course.Price}
      </p>
    </div>
  );
};

export default CourseDetails;
