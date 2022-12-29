import React from "react";
import { Stack } from "@mui/system";
import Task from "../../components/Task";
import { useQuery } from "@tanstack/react-query";
import { Tasks } from "../../data/data";
import { url } from "../../utility/url";
// import { fetchTasks, Tasks } from "../../data/data";
const MyTask = () => {
  return (
    <div>
      <h1>My Tasks</h1>
      <Stack spacing={4}>
        {tasks?.map((task, idx) => (
          <Task {...{ task, path: "" }} key={idx} />
        ))}
      </Stack>
    </div>
  );
};

export default MyTask;
