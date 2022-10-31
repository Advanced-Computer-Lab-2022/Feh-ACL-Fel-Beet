import { useEffect, useState } from "react"

// components
import CourseDetails from "../components/CourseDetails.js"
import ManualAdditionForm from "../components/ManualUserAdditionForm.js"
import CourseCreation from "../components/CourseCreation.js"

const Home = () => {
  const [courses, setCourses] = useState(null)
    
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:5000/allCourses')
      
      const json = await response.json()
      console.log(response)

      if (response.ok) {
        setCourses(json)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="home">
      <div className="courses">
        blah aw ay haga
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