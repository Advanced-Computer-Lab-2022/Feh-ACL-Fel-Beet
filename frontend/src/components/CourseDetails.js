import React from "react";
import { useNavigate } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const navigate = useNavigate();
  return (
    <div className="course-details" style={{cursor:'pointer', marginLeft:'4%'}} onClick={() => navigate('../login')}>
      <h4>{course.Name}</h4>
      <p>
        <strong>Total Hours: </strong>
        {course.Hours}
      </p>
      <p>
        <strong>Total Rating: </strong>
        {course.totalRating}
      </p>
      <p>
        <strong>Number of Ratings: </strong>
        {course.noOfRatings}
      </p>
      <p>
        <strong>Price: </strong>
        {course.Price}
      </p>
    </div>
  );
};

export default CourseDetails;
