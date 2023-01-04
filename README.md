# Feh-ACL-Fel-Beet

### About:
This project was made to showcase our collaborative skills at using Git and Github, and develop our programming skills in web development

### Build status:
Alpha 0.1: The following features are missing from the build or need attending to:
- Instructors cannot be rated by users and cannot view those ratings
- Instructors cannot be reviewed by users and cannto view those reviews
- Instructors cannot view reviews and ratings on courses they teach
- Users can't sort courses by number of enrolled students when viewing all courses
- All courses can be accessed by all users without restrictions
- Trainees are unable to enter their credit card details to add credits to their online wallet
- Trainees are unable to purchase courses
- Instructors don't get paid for courses they teach
- Trainees can't see how much of a course they've completed
- Trainees can't take notes alongside a video they're watching for a course
- Trainees can't download their notes as PDF from the site
- Trainees don't receive a certificate for completing a course (by email or locally)
- Refund system is purely through the admin-based report system and isn't automated
- Trainees can't see courses they're enrolled in on their profile page
- Trainees can't see previously reported issues and their follow ups
- Admins can't see currently reported problems
- Admins can't resolve reported problems or follow up on them with the reporting user
- Admins can't view course requests from corporate trainees
- Admins can't grant corporate trainees access to specific courses
- Admins can't edit course details while courses are live
- Authentication rework is required: all users can access all content regardless of login status
- Registration text not preserved when visiting T&C page
- Not all currencies available on the web page
- Currency preferences not saved to user profile
- Country preferences not saved to user profile
- Password reset email system need implementation
- Color palette on site is inconsistent and needs revision


### Theme
This project is an online learning system, where users can log on and register for courses, as well as complete exercises for those courses. They can also receive a certificate when they complete the course. Instructors and corporate trainees can also use the platform, where corporate trainees complete courses preassigned to them, and instructors grade and assess trainees themselves.

### Overview
The platform was implemented with a typical frontend-backend architecture. The development roughly followed a collaborative Agile system, wherein requirements and user stories were completed incrementally.

### Objectives
- Learn how to use Github effectively to coordinate systems between developers
- Effectively construct an application usign MongoDB, Express, Node, and React
- Complete client specific requirements to finish a project

### Screenshots
- Login Page 
![Login Page](./usage%20images/Login.png)
- Home Page with All Courses View
 ![Home Page](./usage%20images/Home%20Page.png)
- Profile Page 
![Profile Page](./usage%20images/Profile%20View.png)
- Course Page
![Course Page](./usage%20images/Course.png)

### Code style
No specific code style was used, but there is a strong emphasis in the project on decent indentation and whitespaces; good commenting is also highly requested.

### Code Examples
#### Frontend 
- Main routing Code
```js
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
          <Route path="/traineeCourses" element={<MyCourses />} />
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
```
- Example of component: Password Changing
```js
export default function ChangePassword() {
  const [newPass, setNewPass] = React.useState("");
  const id = cookie.load("id");
  const navigate = useNavigate();

  function handleClick() {
    axios
      .post("http://localhost:4000/individualTrainee/edit", {
        id,
        Password: newPass,
      })
      .then(navigate("../home"));
  }

  return (
    <div>
      <Grid container justifyContent="center" padding={4}>
        <Stack
          direction={"column"}
          spacing={1}
          width={"30%"}
          justifyContent="center"
          marginTop={5}
        >
          <TextField
            label="New Password"
            type={"password"}
            onChange={e => setNewPass(e.target.value)}
          ></TextField>
          <Button variant="contained" onClick={handleClick}>
            Save
          </Button>
        </Stack>
      </Grid>
    </div>
  );
}
```
#### Backend

- Backend: Main routing function
```js
//ROUTES
const courseRoutes = require("./Routes/courseRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const instructorRoutes = require("./Routes/instructorRoutes");
const corporateTraineeRoutes = require("./Routes/corporateTraineeRoutes");
const individualTraineeRoutes = require("./Routes/individualTraineeRoutes");
const guestRoutes = require("./Routes/guestRoutes");
app.use("/course", courseRoutes);
app.use("/admin", adminRoutes);
app.use("/instructor", instructorRoutes);
app.use("/corporateTrainee", corporateTraineeRoutes);
app.use("/individualTrainee", individualTraineeRoutes);
app.use("/guest", guestRoutes);

//DB CONNECTION & LISTENING TO PORT
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log("Connected to MongoDB.");
    app.listen(port, () => {
      console.log("Listening on port", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
```

- Backend: User finding function
```js
const findUser = async (req, res) => {
  const { Username } = req.body;
  let userDetails = {};
  let type = {type: ""};
  if (await IndividualTrainee.findOne({ Username: Username })) {
    userDetails = await IndividualTrainee.findOne({ Username: Username });
  } else if (await CorporateTrainee.findOne({ Username: Username })) {
    userDetails = await CorporateTrainee.findOne({ Username: Username });
  } else if (await Instructor.findOne({ Username: Username })) {
    userDetails = await Instructor.findOne({ Username: Username });
  } else if (await Admin.findOne({ Username: Username })) {
    userDetails = await Admin.findOne({ Username: Username });
  } else {
    userDetails = {};
  }
  res.status(200).json(userDetails);
};

const setProblemStatus = async (req, res) => {};

module.exports = {
  addAdmin,
  addInstructor,
  addCorporateTrainee,
  setPromotion,
  viewReports,
  findUser,
};
```


### Usage Video
[![Watch the video](https://img.youtube.com/vi/5y7CAVE8IY0/hqdefault.jpg)](https://www.youtube.com/watch?v=5y7CAVE8IY0)

### Frontend Tools and Frameworks
##### [React:](https://opensource.fb.com/projects/react/)
React is a JavaScript library developed by Meta and designed for building single-page web apps UIs.
##### [MUI - Material UI:](https://mui.com/)
Material UI is a component library designed to be used with React which contains all manner of UI components.

### Backend Tools and Frameworks
##### [MongoDB:](https://www.mongodb.com/home)
MongoDB is a NoSQL distributed database designed to be used with distributed applications. It stores data in JSON-style objects which are convenient for usage with JS in the web app.
##### [Node.js:](https://nodejs.org/en/about/)
Node.js is an event-driven runtime for JavaScript that works to run scripts outside of a web application and helps manage connections in a scalable manner.
##### [Express.js:](https://nodejs.org/en/about/)
Express.js is a web framework designed to be used with Node to create web app servers. It comes with many useful features preinstalled and is very flexible and scalable.

### Installation
Users trying to contribute to the project should make sure to have NPM installed since the project uses Node, Mongoose, React, Axios, and other frameworks managed by NPM.

### API Reference
No external APIs were used. The project itself uses Mongoose to coordinate between the Node server and MongoDB, and Axios to help route from the React-based front end to the server.

### Tests
Testing was primarily done through Postman for backend functionalities related to the database. Some tests can be seen below:
- Testing login functionality:
![Login Test](https://user-images.githubusercontent.com/39414099/210558767-ddadeab6-89da-4c28-b211-d4f9aa446a0f.png)

- Testing signup functionality:
![Signup Test](https://user-images.githubusercontent.com/39414099/210560431-a31ea0f3-31cc-445a-8811-7e2b7be9597f.png)

- Testing admin's power to create new admins:
![Adming add in admin test](https://user-images.githubusercontent.com/39414099/210561217-3f79cad6-fafb-408b-9039-a21b9da14845.png)


### Development Roadmap
Typical development occurs on a sprint basis. At the beginning of each sprint, requirements are added to the to-do list and distributed to the developers that would be most useful in executing them. At the end of the sprint, completed requirements are assessed, and non-completed ones are pushed to the requirements for the next sprint.

### Principal Contributors
- Ziad Bahy:
- Omar Yehia:
- Yousef Korayem:
- Mohammed El Zalabany:
- Omar Farid:

### Additional Credits and Acknowledgements
- [MUI Docs: ](https://mui.com/material-ui/getting-started/overview/) The documentation for MUI was invaluable for this project.
- [React Docs: ](https://reactjs.org/docs/getting-started.html) Same as above but for React
- [Stack Overflow: ](https://stackoverflow.com/) The project would never have been completed if not for the support of thousands of devs helping out online.

### License
This project is licensed under the MIT license and was developed purely for educational purposes.
