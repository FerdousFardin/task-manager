import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Task from "../../components/Task";
import { fetchTasks, Tasks } from "../../data/data";

const CompletedTask = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTasks().then((data) => {
      setTasks(data);
      setLoading(false);
    });
  }, []);
  if (loading) return <Loading />;
  return (
    <div>
      <h1>Completed Tasks</h1>
      <Grid container justifyContent="center" spacing={3}>
        {tasks?.map((task: Tasks, idx) => (
          <Task {...{ task, path: "completed-task" }} key={idx} />
        ))}
      </Grid>
    </div>
  );
};

export default CompletedTask;
