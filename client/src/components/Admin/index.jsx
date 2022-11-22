import UserDashboard from "./UserDashboard";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import LogDashboard from "./LogDashboard";
import TicketDashboard from "./TicketDashboard";

const Admin = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TicketDashboard />
    </LocalizationProvider>
  );
};

export default Admin;
