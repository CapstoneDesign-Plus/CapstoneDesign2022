import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Admin from "../components/Admin";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import UserDashboard from "../components/Admin/UserDashboard";
import LogDashboard from "../components/Admin/LogDashboard";
import TicketDashboard from "../components/Admin/TicketDashboard";
import TokenDashboard from "../components/Admin/TokenDashboard";

const AdminPage = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box width={750}>
        <Routes>
          <Route path="user" element={<UserDashboard />} />
          <Route path="log" element={<LogDashboard />} />
          <Route path="ticket" element={<TicketDashboard />} />
          <Route path="token" element={<TokenDashboard />} />
        </Routes>
      </Box>
    </LocalizationProvider>
  );
};

export default AdminPage;
