import { useQuery } from "@tanstack/react-query";
import React from "react";
import { url } from "../utility/url";

export const Test = () => {
  const { data, isloading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetch(url + "/tasks").then((res) => res.json()),
  });
  if (isloading) return <div>Loading</div>;
  if (error) return;
  console.log(data);
  return <div>Test</div>;
};
