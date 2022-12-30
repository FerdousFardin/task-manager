import { useEffect, useState } from "react";
import Task from "../../components/Task";
import { fetchTasks, Tasks } from "../../data/data";
import { Grid } from "@mui/material";
import Loading from "../../components/Loading";

const MyTask = () => {
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
      <h1>My Tasks</h1>
      <Grid container justifyContent="center" spacing={3}>
        {tasks?.map((task, idx) => (
          <Task {...{ task, path: "" }} key={idx} />
        ))}
      </Grid>
    </div>
  );
};

export default MyTask;
