import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";

// components
import CourseDetails from "../components/CourseDetails";
import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import cookie from "react-cookies";

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

const Home = () => {
  const [courses, setCourses] = useState(null);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(50);
  const [subject, setSubject] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:4000/course/search", {
        searchItem: search,
        realRating: rating,
        maxPrice: price,
        subject: subject,
      })
      .then((res) => {
        setCourses(res.data);
      });
  }, [search, rating, price, subject]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("http://localhost:4000/course/allCourses");
      const json = await response.json();
      for (let i = 0; i < json.length; i++) {
        json[i].totalRating = json[i].Rating.totalRating;
        json[i].noOfRatings = json[i].Rating.noOfRatings;
      }

      if (response.ok) {
        setCourses(json);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="home">
      <div className="courses">
        {courses &&
          courses.map((course) => (
            <CourseDetails course={course} key={course._id} />
          ))}
      </div>
      <Stack direction={"column"}>
        <Search style={{ marginTop: "14%", marginRight: "20%" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <Slider
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Subject</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={subject}
            label="Subject"
            onChange={(e) => setSubject(e.target.value)}
          >
            <MenuItem value={"CS"}>CS</MenuItem>
            <MenuItem value={"Hardware"}>Hardware</MenuItem>
            <MenuItem value={"Math"}>Math</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </div>
  );
};

export default Home;
