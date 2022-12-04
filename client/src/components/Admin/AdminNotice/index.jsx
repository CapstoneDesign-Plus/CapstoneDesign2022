import { useParams } from "react-router-dom";
import useNoticeWrite from "../../../hook/useNoticeWrite";
import updateNotice from "../../../lib/updateNotice";
import postNotice from "../../../lib/postNotice";
import { Box, Button, Divider, Table, TextField } from "@mui/material";
import styled from "styled-components";

function createEventHandler(setter) {
  return (e) => setter(e.target.value);
}

const Td = styled.td`
  padding: 10px;
`;

const AdminNotice = () => {
  const { id } = useParams();
  const { state, hlr } = useNoticeWrite(id);

  const submit = id
    ? () => {
        updateNotice(id, state.header, state.title, state.content);
      }
    : () => {
        postNotice(state.header, state.title, state.content);
      };

  console.log(id);
  return (
    <Box style={{ width: "100%" }}>
      <Box display="flex" justifyContent="flex-end" margin="10px">
        <Button onClick={submit} variant="contained">
          작성
        </Button>
      </Box>
      <Divider />
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th>Header</th>
            <Td>
              <TextField
                placeholder="말머리를 입력해 주세요."
                fullWidth
                size="small"
                value={state.header}
                onChange={createEventHandler(hlr.setHeader)}
              />
            </Td>
          </tr>
          <tr>
            <td colSpan="2">
              <Divider />
            </td>
          </tr>
          <tr>
            <th>Title</th>
            <Td>
              <TextField
                placeholder="제목을 입력해 주세요."
                fullWidth
                size="small"
                value={state.title}
                onChange={createEventHandler(hlr.setTitle)}
              />
            </Td>
          </tr>
          <tr>
            <td colSpan="2">
              <Divider />
            </td>
          </tr>
          <tr>
            <Td colSpan={2}>
              <TextField
                placeholder="내용을 입력해 주세요."
                fullWidth
                multiline
                value={state.content}
                minRows={10}
                onChange={createEventHandler(hlr.setContent)}
              />
            </Td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default AdminNotice;
