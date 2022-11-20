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
 * @property {number} start
 * @property {number} end
 * @property {(value: number) => void} setStart
 * @property {(value: number) => void} setEnd
 *
 * @param {PeriodParam}
 * @param {number} height
 */
export default function usePeriod({ isActive, start, end, setStart, setEnd }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        disabled={!isActive}
        inputFormat="YY/MM/DD HH:MM"
        value={start}
        onChange={(value) => setStart(Date.parse(value))}
        renderInput={(params) => (
          <Box width={170}>
            <TextField {...params} size="small" margin="dense" />
          </Box>
        )}
      />
      &nbsp; &nbsp; &nbsp;
      <DateTimePicker
        disabled={!isActive}
        inputFormat="YY/MM/DD HH:MM"
        value={end}
        onChange={(value) => setEnd(Date.parse(value))}
        renderInput={(params) => (
          <Box width={170}>
            <TextField {...params} size="small" margin="dense" />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
}
