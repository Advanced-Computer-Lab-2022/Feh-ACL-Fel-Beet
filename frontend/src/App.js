import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CourseCreation from "./pages/CourseCreation";
import ViewCourse from "./pages/ViewCourse";
import Admin from "./pages/Admin";
import UserCreation from "./components/UserCreation";
import Profile from "./pages/Profile";
import InstructorCourses from "./pages/InstructorCourses";
import Appbar from "./components/Appbar";
import TermsAndConditions from "./pages/TermsAndConditions";
import TraineeTermsAndConditions from "./pages/TraineeTerms";
import Exercise from "./pages/SolveExercise";
import ChangePassword from "./pages/ChangePassword";
import Report from "./pages/Report";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar />
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
          <Route path="/profile" element={<Profile />} />
          <Route path="TermsAndConditions" element={<TermsAndConditions />} />
          <Route
            path="TraineeTermsAndConditions"
            element={<TraineeTermsAndConditions />}
          />
          <Route path="exercise" element={<Exercise />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
