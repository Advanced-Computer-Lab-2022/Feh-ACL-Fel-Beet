const Admin = () => {
  return (
    <div className="ManualAdditionForm">
      <ManualAdditionForm type="admin" />
      <ManualAdditionForm type="instructor" />
      <ManualAdditionForm type="corporate trainee" />
      <CourseCreation />
    </div>
  );
};

export default Admin;
