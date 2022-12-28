import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Post } from "../../utility/Post";
import { imgbbUrl, url } from "../../utility/url";
import { useRef } from "react";
import * as React from "react";

function AddTask() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;
    const formData = new FormData();
    formData.append("image", form.image.files[0]);
    console.log();
    // console.log(taskRef.current?.task);
    fetch(`${imgbbUrl}?key=${process.env.REACT_APP_imgbb_key}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgbbData) => {
        if (imgbbData) {
          Post(`${url}`, { task, img: imgbbData.img });
        }
      });
  };
  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          name="task"
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input name="image" hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
        <br />
        <Button
          sx={{
            my: "1rem",
          }}
          type="submit"
          variant="contained"
        >
          Contained
        </Button>
      </form>
    </div>
  );
}

export default AddTask;
