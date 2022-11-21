import UserDashboard from "./UserDashboard";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import LogDashboard from "./LogDashboard";

const Admin = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <LogDashboard />
    </LocalizationProvider>
  );
};

export default Admin;
