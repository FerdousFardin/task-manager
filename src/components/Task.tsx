import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { Tasks } from "../data/data";
import TaskCard from "./TaskCard";
interface handlers {
  handleDelete?: Function;
  handleFinish?: Function;
}
interface Props {
  task?: Tasks;
  path?: string;
  handlers?: handlers;
}
const Task: React.FC = ({ task, path, handlers }: Props) => {
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  const getActionButtons = () => {
    if (path) {
      return <TaskCard {...{ task }} />;
    } else {
      return task?.isCompleted ? (
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
            // onClick={() => handlers?.handleFinish(task?._id)}
            variant="contained"
          >
            Finish
          </Button>
          <Button
            // onClick={() => handlers?.handleDelete(task?._id)}
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
      <>{getActionButtons()}</>
    </>
  );
};

export default Task;
