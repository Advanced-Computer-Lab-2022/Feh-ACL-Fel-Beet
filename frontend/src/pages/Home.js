import { useEffect, useState } from "react"

// components
import CourseDetails from "../components/CourseDetails"
import ManualAdditionForm from "../components/ManualUserAdditionForm"
import CourseCreation from "../components/CourseCreation"

const Home = () => {
  const [courses, setCourses] = useState(null)
    
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:4000/course/allCourses')
      const json = await response.json()
      for(let i = 0; i < json.length; i++){
        json[i].totalRating = json[i].Rating.totalRating;
        json[i].noOfRatings = json[i].Rating.noOfRatings;
      }

      if (response.ok) {
        setCourses(json)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="home">
      <div className="courses">
        <p>Courses</p>
        {courses && courses.map((course) => (
          <CourseDetails course={course} key={course._id} />
        ))}
      </div>
      <div className="ManualAdditionForm">
          <ManualAdditionForm type="admin"/>
          <ManualAdditionForm type="instructor"/>
          <ManualAdditionForm type="corporate trainee"/>
          <CourseCreation />
      </div>
    </div>
  )
}

export default Home