import { TextField } from "@mui/material";

export default function useInput(value, setValue, type = 0) {
  return (
    <TextField
      type={type === 0 ? "text" : "number"}
      variant="standard"
      fullWidth
      size="small"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
