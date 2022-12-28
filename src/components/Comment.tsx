import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Post } from "../utility/Post";

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

  const handleSubmitClick = () => {
    if (!text) {
      setError("Text cannot be empty");
      return;
    }
    setError("");
    Post(serverUrl, text).then(() => {
      //TODO: handle after post request
      setShowTextarea(false);
      setText("");
    });
  };

  return (
    <div>
      {!showTextarea && <Button onClick={handleButtonClick}>Comment</Button>}
      {showTextarea && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Comment;
