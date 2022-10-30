const CourseDetails = ({ course }) => {

    return (
      <div className="course-details">
        <h4>{course.Name}</h4>
        "omarf ljkhdfg"
        <p><strong>Total Hours: </strong>{course.Hours}</p>
        <p><strong>Rating: </strong>{course.Rating}</p>
        <p>{course.createdAt}</p>
      </div>
    )
  }
  
  export default CourseDetails