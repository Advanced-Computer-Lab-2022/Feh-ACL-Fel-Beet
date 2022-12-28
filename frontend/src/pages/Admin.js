import ManualAdditionForm from "../components/ManualUserAdditionForm";
import CourseCreation from "./CourseCreation";
import Grid from "@mui/material/Grid";


const Admin = () => {
  return (
    <div className="ManualAdditionForm">
      <Grid container spacing={5} margin-left={12} justifyContent="center">
        <Grid item xs={2}>
          <ManualAdditionForm type="admin" />
        </Grid>
        <Grid item xs={2}>
          <ManualAdditionForm type="instructor" />
        </Grid>
        <Grid item xs={2}>
          <ManualAdditionForm type="corporate trainee" />
        </Grid>
      </Grid>
      <CourseCreation />
    </div>
  );
};

export default Admin;
