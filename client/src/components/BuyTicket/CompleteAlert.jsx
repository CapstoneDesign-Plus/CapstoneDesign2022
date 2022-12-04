import { Alert, AlertTitle } from "@mui/material";

function CompleteAlert({ course }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Alert severity="success" sx={{ width: "80%", m: "20px auto" }}>
        <AlertTitle>Complete!</AlertTitle>
        {course}식권 구매가 완료되었습니다.
      </Alert>
      {/* {console.log(isOpen)}
      {toggle}
      {console.log(isOpen)}
      {setIssued(false)} */}
    </div>
  );
}

export default CompleteAlert;
