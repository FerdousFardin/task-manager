import { Button, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Post } from "../utility/Post";
import { url } from "../utility/url";

interface Props {
  serverUrl: string;
}

const Comment: React.FC<Props> = ({ serverUrl }) => {
  const [showTextarea, setShowTextarea] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = () => {
    setShowTextarea(true);
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleSubmitClick = () => {
    if (!text) {
      setError("Text cannot be empty");
      return;
    }
    setError("");
    Post(url + serverUrl, text).then(() => {
      //TODO: handle after post request
      setShowTextarea(false);
      setText("");
    });
  };

  return (
    <div>
      <button
        style={{
          padding: 0,
          border: "none",
          outline: "none",
          font: "inherit",
          color: "inherit",
          background: "none",
        }}
        onClick={handleButtonClick}
      >
        Comment
      </button>
      <Modal
        open={showTextarea}
        onClose={() => setShowTextarea(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="filled-textarea"
            label="Comment"
            multiline
            error={!!error}
            helperText={error}
          />
          <Button onClick={handleSubmitClick}>Submit</Button>
          <Button onClick={() => setShowTextarea(false)}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Comment;
