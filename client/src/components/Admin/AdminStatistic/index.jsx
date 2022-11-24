import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import fetchStatistic from "../../../lib/fetchStatistic";
import processStatistic from "../../../lib/processStatistic";
import StatisticUnit from "./StatisticUnit";

const AdminStatistic = () => {
  const [rangeType, setRangeType] = useState("7d");
  const [statistic, setStatistic] = useState();

  useEffect(() => {
    fetchStatistic(rangeType).then((v) => setStatistic(processStatistic(v)));
  }, [rangeType]);

  return (
    <Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">RangeType</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rangeType}
          label="RangeType"
          onChange={(e) => setRangeType(e.target.value)}
        >
          <MenuItem value="7d">7 days</MenuItem>
          <MenuItem value="30d">30 days</MenuItem>
          <MenuItem value="3m">3 Month</MenuItem>
          <MenuItem value="1y">A Year</MenuItem>
        </Select>
      </FormControl>

      {statistic &&
        Object.keys(statistic).map((c) => (
          <StatisticUnit key={c} data={{ name: c, data: statistic[c] }} />
        ))}
    </Box>
  );
};

export default AdminStatistic;
