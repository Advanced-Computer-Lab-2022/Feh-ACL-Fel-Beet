import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const Exercise = () => {
  const location = useLocation();

  const [userChoices, setUserChoices] = React.useState(["", "", ""]);
  const [answersWrong, setAnswersWrong] = React.useState([false, false, false]);
  const exercise = location.state.data;
  console.log(exercise);
  React.useEffect(() => {
    console.log(answersWrong);
  }, [answersWrong]);

  const submitAnswers = () => {
    let score = 0;
    const temp = [false, false, false];
    for (let i = 0; i < 3; i++) {
      if (userChoices[i] == exercise.Questions[i].Answer) {
        score++;
      } else {
        temp[i] = true;
      }
    }
    setAnswersWrong(temp);
    alert("Your score is " + score + "/3");
  };

  //   useEffect(() => {
  //     axios
  //       .post("http://localhost:3000/GetExercise", {
  //         id: id,
  //       })
  //       .then((response) => {
  //         setExercise(response.data.exercise);
  //       });
  //   }, []);

  return (
    <div>
      <Stack marginTop={1} spacing={2}>
        <Typography variant="h6">{exercise.Questions[0].Question}</Typography>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Choose An Answer
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={userChoices[0]}
            onChange={(event) => {
              setUserChoices([
                event.target.value,
                userChoices[1],
                userChoices[2],
              ]);
            }}
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label={exercise.Questions[0].Choices[0]}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label={exercise.Questions[0].Choices[1]}
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label={exercise.Questions[0].Choices[2]}
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label={exercise.Questions[0].Choices[3]}
            />
          </RadioGroup>
        </FormControl>

        {answersWrong[0] ? (
          <Typography variant="h6" color="red">
            Wrong Answer, Correct Choice is{" "}
            {exercise.Questions[0].Choices[exercise.Questions[0].Answer - 1]}
          </Typography>
        ) : null}

        <Typography variant="h6">{exercise.Questions[1].Question}</Typography>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Choose An Answer
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={userChoices[1]}
            onChange={(event) =>
              setUserChoices([
                userChoices[0],
                event.target.value,
                userChoices[2],
              ])
            }
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label={exercise.Questions[1].Choices[0]}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label={exercise.Questions[1].Choices[1]}
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label={exercise.Questions[1].Choices[2]}
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label={exercise.Questions[1].Choices[3]}
            />
          </RadioGroup>
        </FormControl>
        {answersWrong[1] ? (
          <Typography variant="h6" color="red">
            Wrong Answer, Correct Choice is{" "}
            {exercise.Questions[1].Choices[exercise.Questions[1].Answer - 1]}
          </Typography>
        ) : null}

        <Typography variant="h6">{exercise.Questions[2].Question}</Typography>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Choose An Answer
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={userChoices[2]}
            onChange={(event) =>
              setUserChoices([
                userChoices[0],
                userChoices[1],
                event.target.value,
              ])
            }
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label={exercise.Questions[2].Choices[0]}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label={exercise.Questions[2].Choices[1]}
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label={exercise.Questions[2].Choices[2]}
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label={exercise.Questions[2].Choices[3]}
            />
          </RadioGroup>
        </FormControl>

        {answersWrong[2] ? (
          <Typography variant="h6" color="red">
            Wrong Answer, Correct Choice is{" "}
            {exercise.Questions[2].Choices[exercise.Questions[2].Answer - 1]}
          </Typography>
        ) : null}

        <Button onClick={submitAnswers}>Submit Answers</Button>
      </Stack>
    </div>
  );
};

export default Exercise;
