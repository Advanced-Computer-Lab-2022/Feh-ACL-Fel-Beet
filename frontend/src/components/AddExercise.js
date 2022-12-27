import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const AddExercise = (props) => {
  const { open, setOpen } = props;

  const questions = props.questions;
  const setQuestions = props.setQuestions;
  const choices1 = props.choices1;
  const setChoices1 = props.setChoices1;
  const choices2 = props.choices2;
  const setChoices2 = props.setChoices2;
  const choices3 = props.choices3;
  const setChoices3 = props.setChoices3;
  const correctChoices = props.correctChoices;
  const setCorrectChoices = props.setCorrectChoices;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        PaperProps={{
          sx: {
            width: "30%",
            height: "100%",
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Create Exercise</DialogTitle>
        <DialogContent>
          <Stack marginTop={1} spacing={2}>
            <TextField
              sx={{ width: "80%" }}
              onChange={(event) =>
                setQuestions([
                  event.target.value,
                  questions[1],
                  questions[2],
                ])
              }
              label={"Question 1"}
              value={questions[0]}
            />

            <Stack marginTop={1} spacing={2} display={"flex"}>
              <TextField
                style={{ marginLeft: "10%", width: "70%" }}
                label={"Choice 1"}
                value={choices1[0]}
                onChange={(event) =>
                  setChoices1([
                    event.target.value,
                    choices1[1],
                    choices1[2],
                    choices1[3],
                  ])
                }
              />
              <TextField
                style={{ marginLeft: "10%", width: "70%" }}
                label={"Choice 2"}
                value={choices1[1]}
                onChange={(event) =>
                  setChoices1([
                    choices1[0],
                    event.target.value,
                    choices1[2],
                    choices1[3],
                  ])
                }
              />
              <TextField
                style={{ marginLeft: "10%", width: "70%" }}
                label={"Choice 3"}
                value={choices1[2]}
                onChange={(event) =>
                  setChoices1([
                    choices1[0],
                    choices1[1],
                    event.target.value,
                    choices1[3],
                  ])
                }
              />
              <TextField
                style={{ marginLeft: "10%", width: "70%" }}
                label={"Choice 4"}
                value={choices1[3]}
                onChange={(event) =>
                  setChoices1([
                    choices1[0],
                    choices1[1],
                    choices1[2],
                    event.target.value,
                  ])
                }
              />
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Correct Choice
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={correctChoices[0]}
                  onChange={(event) =>
                    setCorrectChoices([
                      event.target.value,
                      correctChoices[1],
                      correctChoices[2],
                    ])
                  }
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Choice 1"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Choice 2"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Choice 3"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="Choice 4"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>

            <TextField
              sx={{ width: "80%" }}
              onChange={(event) =>
                setQuestions([
                  questions[0],
                  event.target.value,
                  questions[2],
                ])
              }
              label={"Question 2"}
              value={questions[1]}
            />

            <Stack marginTop={1} spacing={2} display={"flex"}>
              <TextField
                style={{ marginLeft: "10%", width: "70%" }}
                label={"Choice 1"}
                value={choices2[0]}
                onChange={(event) =>
                  setChoices2([
                    event.target.value,
                    choices2[1],
                    choices2[2],
                    choices2[3],
                  ])
                }
              />
              <TextField
                style={{ marginLeft: "10%", width: "70%" }}
                label={"Choice 2"}
                value={choices2[1]}
                onChange={(event) =>
                  setChoices2([
                    choices2[0],
                    event.target.value,
                    choices2[2],
                    choices2[3],
                  ])
                }
              />
              <TextField
                style={{ marginLeft: "10%", width: "70%" }}
                label={"Choice 3"}
                value={choices2[2]}
                onChange={(event) =>
                  setChoices2([
                    choices2[0],
                    choices2[1],
                    event.target.value,
                    choices2[3],
                  ])
                }
              />
              <TextField
                style={{ marginLeft: "10%", width: "70%" }}
                label={"Choice 4"}
                value={choices2[3]}
                onChange={(event) =>
                  setChoices2([
                    choices2[0],
                    choices2[1],
                    choices2[2],
                    event.target.value,
                  ])
                }
              />
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Correct Choice
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={correctChoices[1]}
                  onChange={(event) =>
                    setCorrectChoices([
                      correctChoices[0],
                      event.target.value,
                      correctChoices[2],
                    ])
                  }
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Choice 1"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Choice 2"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Choice 3"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="Choice 4"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>

            <TextField
              sx={{ width: "80%" }}
              onChange={(event) =>
                setQuestions([
                  questions[0],
                  questions[1],
                  event.target.value,
                ])
              }
              label={"Question 3"}
              value={questions[2]}
            />

            <Stack marginTop={1} spacing={2} display={"flex"}>
              <TextField
                style={{ marginLeft: "10%", width: "70%" }}
                label={"Choice 1"}
                value={choices3[0]}
                onChange={(event) =>
                  setChoices3([
                    event.target.value,
                    choices3[1],
                    choices3[2],
                    choices3[3],
                  ])
                }
              />
              <TextField
                style={{ marginLeft: "10%", width: "70%" }}
                label={"Choice 2"}
                value={choices3[1]}
                onChange={(event) =>
                  setChoices3([
                    choices3[0],
                    event.target.value,
                    choices3[2],
                    choices3[3],
                  ])
                }
              />
              <TextField
                style={{ marginLeft: "10%", width: "70%" }}
                label={"Choice 3"}
                value={choices3[2]}
                onChange={(event) =>
                  setChoices3([
                    choices3[0],
                    choices3[1],
                    event.target.value,
                    choices3[3],
                  ])
                }
              />
              <TextField
                style={{ marginLeft: "10%", width: "70%" }}
                label={"Choice 4"}
                value={choices3[3]}
                onChange={(event) =>
                  setChoices3([
                    choices3[0],
                    choices3[1],
                    choices3[2],
                    event.target.value,
                  ])
                }
              />
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Correct Choice
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={correctChoices[2]}
                  onChange={(event) =>
                    setCorrectChoices([
                      correctChoices[0],
                      correctChoices[1],
                      event.target.value,
                    ])
                  }
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Choice 1"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Choice 2"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Choice 3"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="Choice 4"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddExercise;
