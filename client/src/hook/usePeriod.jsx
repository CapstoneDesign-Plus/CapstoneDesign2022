import { Checkbox, Box, TextField, Stack } from "@mui/material";
import {
  DateTimePicker,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

/**
 * @typedef {object} PeriodParam
 * @property {boolean} isActive
 * @property {()=>void} changeActive
 * @property {number} start
 * @property {number} end
 * @property {(value: number) => void} setStart
 * @property {(value: number) => void} setEnd
 *
 * @param {PeriodParam}
 */
export default function usePeriod({
  isActive,
  start,
  end,
  changeActive,
  setStart,
  setEnd,
}) {
  return {
    checkBox: <Checkbox checked={isActive} onChange={changeActive} />,
    dataPicker: (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          disabled={!isActive}
          label="Start"
          inputFormat="YYYY/MM/DD - HH"
          value={start}
          onChange={(value) => setStart(Date.parse(value))}
          renderInput={(params) => <TextField {...params} />}
        />
        &nbsp; &nbsp; &nbsp;
        <DateTimePicker
          disabled={!isActive}
          label="End"
          inputFormat="YYYY/MM/DD - HH"
          value={end}
          onChange={(value) => setEnd(Date.parse(value))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    ),
  };
}
