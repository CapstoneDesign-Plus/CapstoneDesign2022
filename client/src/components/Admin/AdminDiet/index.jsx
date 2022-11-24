import { Button, Box } from "@mui/material";
import { useState } from "react";
import fetchCrawl from "../../../lib/fetchCrawl";
import DietView from "../DietView";

const AdminDiet = () => {
  const [flag, setFlag] = useState(0);

  const update = () => setFlag((prev) => prev + 1);

  const crawl = () => fetchCrawl().then(update);

  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
      >
        <Button onClick={crawl} variant="contained">
          동기화
        </Button>
      </Box>
      <DietView flag={flag} />
    </Box>
  );
};

export default AdminDiet;
