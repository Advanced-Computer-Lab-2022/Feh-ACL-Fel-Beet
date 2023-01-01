import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";

// components
import CourseDetails from "../components/CourseDetails";
import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgb(230,230,230)",
  "&:hover": {
    backgroundColor: "rgb(220,220,220)",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const MyCourses = () => {
  const [user, setUser] = useState(null);
  const [instructorCourses, setInstructorCourses] = useState([]);
  const [instructorCoursesFinal, setInstructorCoursesFinal] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState();

  const fetchUser = (username) => {
    setLoading(true);
    axios
      .post(
        "http://localhost:4000/admin/findUser",
        {
          Username: username,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
        setLoading(false);
      });
  };

const fetchCourses = async () => {
    fetchUser(Cookies.get("username"))
    setInstructorCourses(user.courses);
    const response = await fetch("http://localhost:4000/course/allCourses");
    const json = await response.json();
    let finalCourses = [];
    for (let i = 0; i < json.length; i++) {
        for(let j =0; j < instructorCourses.length; j++){
            if(instructorCourses[j].Name == json[i].Name){
                finalCourses.append(json[i]);
            }
        }
    }
    if (response.ok) {
        setInstructorCoursesFinal(finalCourses);
    }
};

useEffect(() => {
    fetchCourses();
    setCurrency(Cookies.get("currency"));
}, []);

  return (
    <div>
      <Grid container margin={2}>
        <Grid item className="courses" xs={8}>
          <h1 className="title"> Currently Teaching: </h1>
          {instructorCoursesFinal &&
            instructorCoursesFinal.map((course) => (
              <CourseDetails course={course} curr={currency} key={course._id} />
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default MyCourses;
