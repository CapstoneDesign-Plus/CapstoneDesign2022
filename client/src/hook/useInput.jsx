import { TextField } from "@mui/material";

export default function useInput(value, setValue) {
  return <TextField value={value} onChange={(e) => setValue(e.target.value)} />;
}
