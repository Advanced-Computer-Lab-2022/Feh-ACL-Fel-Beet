import UserCreation from "../components/UserCreation";
import CourseCreation from "./CourseCreation";
import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar";

const Admin = () => {
  return (
    <div className="UserCreation">
      <Navbar />
      <UserCreation />
    </div>
  );
};

export default Admin;
