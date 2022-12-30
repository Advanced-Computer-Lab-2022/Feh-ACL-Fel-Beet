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
import Grid from "@mui/material/Grid";
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

const Home = () => {
  const [courses, setCourses] = useState(null);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(50);
  const [subject, setSubject] = useState("");

  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState(1);

  const myHeaders = new Headers();
  myHeaders.append("apikey", "O3O2B4qh5oNVmuBQLytmfHb4ZK2jaeWf");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${country}&from=EGP&amount=100`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setCurrency(result.info.rate))
      .catch((error) => console.log("error", error));
  }, [country]);

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
    <div>
      <Navbar />
      <Grid container spacing={6}>
        <Grid item className="courses" xs={8}>
          <h1 className="title"> All Courses </h1>
          {courses &&
            courses.map((course) => (
              <CourseDetails course={course} curr={currency} key={course._id} />
            ))}
        </Grid>
        <Grid item xs={3}>
          <Stack direction={"column"} spacing={3}>
            <h2>Filter Courses</h2>
            <h4>Search by name</h4>
            <Search style={{ marginTop: "5%", marginRight: "20%" }}>
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
            <h4>Select Rating</h4>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
            <h4>Select Price</h4>
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label1">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label1"
                id="demo-simple-select1"
                value={country}
                label="Country"
                onChange={(e) => setCountry(e.target.value)}
              >
                <MenuItem value={"USD"}>USA</MenuItem>
                <MenuItem value={"EGP"}>Egypt</MenuItem>
                <MenuItem value={"EUR"}>Europe</MenuItem>
                <MenuItem value={"CAD"}>Canada</MenuItem>
                <MenuItem value={"GBP"}>UK</MenuItem>
                <MenuItem value={"CNY"}>China</MenuItem>
                <MenuItem value={"JPY"}>Japan</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
