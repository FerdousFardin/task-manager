import React from "react";
import { Link } from "react-router-dom";
import { Button, Paper, Stack, styled } from "@mui/material";
import Comment from "./Comment";

const Task: React.FC = ({ task, path, handlers }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const getActionButtons = () => {
    if (path) {
      return task.isCompleted ? (
        <>
          <Stack
            spacing={2}
            direction={"row"}
            sx={{
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#8bc34a",
                color: "white",
                px: "1rem",
              }}
            >
              Completed
            </Paper>
            <Button
              onClick={() => handlers?.handleDelete(task?._id)}
              variant="contained"
            >
              Delete
            </Button>
          </Stack>
          <Comment {...{ serverUrl: "" }} />
        </>
      ) : (
        <Link to={"/"}>Not Completed</Link>
      );
    } else {
      return task.isCompleted ? (
        <Link to={"/completed-task"}>Completed</Link>
      ) : (
        <Stack
          spacing={2}
          direction={"row"}
          sx={{
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => handlers?.handleFinish(task?._id)}
            variant="contained"
          >
            Finish
          </Button>
          <Button
            onClick={() => handlers?.handleDelete(task?._id)}
            variant="contained"
          >
            Delete
          </Button>
        </Stack>
      );
    }
  };

  return (
    <>
      <Item>
        {task.task}
        <br />
        {task.user}
        <br />
        {getActionButtons()}
      </Item>
    </>
  );
};

export default Task;
