import { useState } from "react";
import useNoticeWrite from "../../../../hook/useNoticeWrite";
import { Box, Button, TextField } from "@mui/material";
import postNotice from "../../../../lib/postNotice";

function createEventHandler(setter) {
  return (e) => setter(e.target.value);
}

const NoticeWriter = ({ id }) => {
  const [mode, setMode] = useState(false);

  if (id) setMode(true);

  const { state, hlr } = useNoticeWrite();

  const post = () => {
    postNotice(state.header, state.title, state.content);
  };

  return (
    <Box>
      <Box>
        header:
        <TextField
          value={state.header}
          onChange={createEventHandler(hlr.setHeader)}
        />
      </Box>
      <Box>
        title:
        <TextField
          value={state.title}
          onChange={createEventHandler(hlr.setTitle)}
        />
      </Box>
      <Box>
        content:
        <TextField
          multiline
          value={state.content}
          onChange={createEventHandler(hlr.setContent)}
        />
      </Box>
      <Button onClick={post}>Post</Button>
    </Box>
  );
};

export default NoticeWriter;
