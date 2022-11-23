import UserDashboard from "./UserDashboard";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import LogDashboard from "./LogDashboard";
import TicketDashboard from "./TicketDashboard";
import TokenDashboard from "./TokenDashboard";

const Admin = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TokenDashboard />
    </LocalizationProvider>
  );
};

export default Admin;
