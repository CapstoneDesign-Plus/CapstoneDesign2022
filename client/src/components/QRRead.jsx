import { Alert, Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { lazy, useRef, useState } from "react";
const QrReader = lazy(() => import("react-qr-scanner"));
import requestTicketStateUse from "../lib/requestTicketStateUse";

const QRRead = () => {
  const codeRef = useRef();

  if (!codeRef.current) codeRef.current = "";

  const [type, setType] = useState("waiting");
  const [passed, setPassed] = useState(false);

  const handleScan = (result) => {
    console.log(codeRef.current);

    if (result && result.text !== codeRef.current) {
      codeRef.current = result.text;
      requestTicketStateUse(type === "waiting" ? 0 : 1, result.text).then(
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
    </Box>
  );
};

export default QRRead;
