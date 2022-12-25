import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CourseCreation from "./pages/CourseCreation";
import ViewCourse from "./pages/ViewCourse";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration-page" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add-course" element={<CourseCreation />} />
          <Route path='/viewCourse' element={<ViewCourse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
