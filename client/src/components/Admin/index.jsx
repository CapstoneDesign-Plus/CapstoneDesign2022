import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

const Admin = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}></LocalizationProvider>
  );
};

export default Admin;
