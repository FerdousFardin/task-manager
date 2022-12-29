import { Stack } from "@mui/material";
import React from "react";
import Task from "../../components/Task";
// import { fetchTasks, Tasks } from "../../data/data";

const CompletedTask = () => {
  // const;
  return (
    <div>
      <h1>Completed Tasks</h1>
      <Stack spacing={4}>
        {tasks.map((task, idx) => (
          <Task {...{ task, path: "completed-task" }} key={idx} />
        ))}
      </Stack>
    </div>
  );
};

export default CompletedTask;
