const CourseDetails = ({ course }) => {

    return (
      <div className="course-details">
        <h4>{course.Name}</h4>
        <p><strong>Total Hours: </strong>{course.Hours}</p>
        <p><strong>Rating: </strong>{course.Rating}</p>
        <p><strong>Price: </strong>{course.Price}</p>
        <p>{course.createdAt}</p>
      </div>
    )
  }
  
  export default CourseDetails