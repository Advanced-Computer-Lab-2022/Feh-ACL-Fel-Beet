const CourseDetails = ({ course }) => {

    return (
      <div className="course-details">
        <h4>{course.Name}</h4>
        <p><strong>Total Hours: </strong>{course.Hours}</p>
        <p><strong>Total Rating: </strong>{course.totalRating}</p>
        <p><strong>Number of Ratings: </strong>{course.noOfRatings}</p>
        <p><strong>Price: </strong>{course.Price}</p>
        <p>{course.createdAt}</p>
      </div>
    )
  }
  
  export default CourseDetails