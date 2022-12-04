import { Alert, AlertTitle } from "@mui/material";

function CompleteAlert() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Alert severity="success" sx={{ width: "80%" }}>
        <AlertTitle>Complete!</AlertTitle>
        식권 구매가 완료되었습니다.
      </Alert>
    </div>
  );
}

export default CompleteAlert;
