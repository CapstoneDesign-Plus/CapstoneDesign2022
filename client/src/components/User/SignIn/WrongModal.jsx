import { Alert, AlertTitle } from "@mui/material";

function WrongModal() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Alert severity="error" sx={{ width: "80%" }}>
        <AlertTitle>Failure!</AlertTitle>
        잘못된 아이디 또는 비밀번호 입니다.
      </Alert>
    </div>
  );
}

export default WrongModal;
