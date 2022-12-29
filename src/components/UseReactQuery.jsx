import { useQuery } from "@tanstack/react-query";
import React from "react";
import { url } from "../utility/url";

const TASK_CONTEXT = React.createContext();
export const UseReactQuery = ({ children }) => {
  const {
    status,
    error,
    data: tasks,
  } = useQuery(["tasks"], async () => {
    const res = await fetch(url + "/tasks");
    const data = await res.json();
    return data;
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (error) {
    return;
  }
  return (
    <TASK_CONTEXT.Provider value={{ tasks }}>{children}</TASK_CONTEXT.Provider>
  );
};
