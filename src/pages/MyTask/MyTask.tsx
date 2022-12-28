import { Stack } from "@mui/system";
import Task from "../../components/Task";
import { tasks } from "../../data/data";

const MyTask = () => {
  return (
    <div>
      <h1>My Tasks</h1>
      <Stack spacing={4}>
        {tasks.map((task, idx) => (
          <Task {...{ task, path: "" }} key={idx} />
        ))}
      </Stack>
    </div>
  );
};

export default MyTask;
