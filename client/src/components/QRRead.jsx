import { Alert, Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { lazy, useRef, useState } from "react";
const QrReader = lazy(() => import("react-web-qr-reader"));
import requestTicketStateUse from "../lib/requestTicketStateUse";

const QRRead = () => {
  const codeRef = useRef();

  if (!codeRef.current) codeRef.current = "";

  const [type, setType] = useState("waiting");
  const [passed, setPassed] = useState(false);

  const handleScan = (result) => {
    if (result) {
      console.log(result.data);
    }

    if (result && result.data !== codeRef.current) {
      console.log("fetch");
      codeRef.current = result.data;
      requestTicketStateUse(type === "waiting" ? 0 : 1, result.data).then(
        setPassed
      );
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <Box>
      <QrReader
        style={{ width: "100%" }}
        onScan={handleScan}
        onError={handleError}
        // facingMode="environment"
        // style={{ width: "100%" }}
      />

      <Box style={{ display: "flex", justifyContent: "center" }}>
        <ToggleButtonGroup
          color="primary"
          value={type}
          exclusive
          onChange={(e, v) => setType(v)}
          aria-label="Platform"
        >
          <ToggleButton value="waiting">Waiting</ToggleButton>
          <ToggleButton value="used">Used</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {passed ? (
        <Alert severity="success">올바른 식권</Alert>
      ) : (
        <Alert severity="error">잘못된 식권</Alert>
      )}
      <Box>token: {codeRef.current}</Box>
    </Box>
  );
};

export default QRRead;
