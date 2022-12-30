import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CourseCreation from "./pages/CourseCreation";
import ViewCourse from "./pages/ViewCourse";
import Admin from "./pages/Admin";
import UserCreation from "./components/UserCreation";
import Profile from "./pages/Profile";
import MyCourses from "./pages/MyCourses";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myCourses" element={<InstructorCourses />} />
          <Route path="/registration-page" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add-course" element={<CourseCreation />} />
          <Route path="/viewCourse" element={<ViewCourse />} />
          <Route path="/addUser" element={<UserCreation />} />
          <Route path="/adminHome" element={<Admin />} />
          <Route path="/traineeCourses" element={<MyCourses />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
