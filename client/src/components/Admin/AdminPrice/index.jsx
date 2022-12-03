import { Grid, Box, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import useInput from "../../../hook/useInput";
import fetchPriceTable from "../../../lib/fetchPriceTable";
import updateTicketPrice from "../../../lib/updateTicketPrice";

const CenterBox = ({ children }) => {
  return (
    <Stack
      display="flex"
      alignItems="center"
      flexDirection="column"
      spacing={3}
    >
      {children}
    </Stack>
  );
};

const AdminPrice = () => {
  const [costA, setCostA] = useState(0);
  const [costB, setCostB] = useState(0);
  const [costC, setCostC] = useState(0);

  const updatePrice = (type) => () => {
    const price = type === "A" ? costA : type === "B" ? costB : costC;
    updateTicketPrice(type, price);
  };

  useEffect(() => {
    fetchPriceTable().then((v) => {
      setCostA(v["A"]);
      setCostB(v["B"]);
      setCostC(v["C"]);
    });
  }, []);

  return (
    <Grid container marginTop="20px">
      <Grid item xs={4}>
        <CenterBox>
          <Typography>Course A</Typography>
          <br />
          <Box>{useInput(costA, setCostA, true)}</Box>
          <Button variant="contained" onClick={updatePrice("A")}>
            가격 변경
          </Button>
        </CenterBox>
      </Grid>
      <Grid item xs={4}>
        <CenterBox>
          <Typography>Course B</Typography>
          <br />
          <Box>{useInput(costB, setCostB, true)}</Box>
          <Button variant="contained" onClick={updatePrice("B")}>
            가격 변경
          </Button>
        </CenterBox>
      </Grid>
      <Grid item xs={4}>
        <CenterBox>
          <Typography>Course C</Typography>
          <br />
          <Box>{useInput(costC, setCostC, true)}</Box>
          <Button variant="contained" onClick={updatePrice("C")}>
            가격 변경
          </Button>
        </CenterBox>
      </Grid>
    </Grid>
  );
};

export default AdminPrice;
