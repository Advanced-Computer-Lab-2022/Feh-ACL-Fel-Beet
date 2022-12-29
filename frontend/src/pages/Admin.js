import UserCreation from "../components/UserCreation";
import CourseCreation from "./CourseCreation";
import Grid from "@mui/material/Grid";


const Admin = () => {
  return (
    <div className="UserCreation">
      <Grid container spacing={5} margin-left={12} justifyContent="center">
        <Grid item xs={2}>
          <UserCreation type="admin" />
        </Grid>
        <Grid item xs={2}>
          <UserCreation type="instructor" />
        </Grid>
        <Grid item xs={2}>
          <UserCreation type="corporate trainee" />
        </Grid>
      </Grid>
      <CourseCreation />
    </div>
  );
};

export default Admin;
