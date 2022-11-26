import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";

const QRRead = () => {
  const [data, setData] = useState("No Result");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onCatch = (result, error) => {
    if (error) return;

    setData(data);
  };

  return (
    <Box>
      <QrReader />
    </Box>
  );
};

export default QRRead;
