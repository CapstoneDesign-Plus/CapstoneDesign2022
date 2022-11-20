import { TextField } from "@mui/material";

export default function useInput(value, setValue) {
  return (
    <TextField
      variant="standard"
      fullWidth
      size="small"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
