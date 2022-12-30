import { CircularProgress } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <CircularProgress sx={{}} size={100} />
    </div>
  );
}

export default Loading;
