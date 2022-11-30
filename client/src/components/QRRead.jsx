import {
  Alert,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { lazy, useRef, useState } from "react";
const QrReader = lazy(() => import("react-web-qr-reader"));
import requestTicketStateUse from "../lib/requestTicketStateUse";

const QRRead = () => {
  const [code, setCode] = useState("");
  const prevRef = useRef("");

  const [type, setType] = useState("waiting");
  const [face, setFace] = useState("user");

  const [passed, setPassed] = useState(false);

  const handleScan = (result) => {
    if (result && result.data !== prevRef.current) {
      prevRef.current = result.data;
      requestTicketStateUse(type === "waiting" ? 0 : 1, result.data).then(
        (v) => {
          setCode(prevRef.current);
          setPassed(v);
        }
      );
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <Box>
      <QrReader
        delay={1000}
        style={{ width: "100%" }}
        onScan={handleScan}
        onError={handleError}
        facingMode="user"
        // style={{ width: "100%" }}
      />
      <Box
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <Box>Camera</Box>
        <ToggleButtonGroup
          color="primary"
          value={face}
          exclusive
          onChange={(e, v) => setFace(v)}
          aria-label="Platform"
        >
          <ToggleButton value="user">Face</ToggleButton>
          <ToggleButton value="environment">Env</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <Box>Kind</Box>
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
      {code.length > 0 &&
        (passed ? (
          <Alert severity="success">올바른 식권</Alert>
        ) : (
          <Alert severity="error">잘못된 식권</Alert>
        ))}
      <Box style={{ fontSize: "12px" }}>{code}</Box>
    </Box>
  );
};

export default QRRead;
