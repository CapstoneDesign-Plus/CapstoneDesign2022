import { Box, Button } from "@mui/material";

const AdminHeader = ({ auth }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "5px",
        padding: "8px",
      }}
    >
      <img
        style={{ height: 50 }}
        className="logo"
        alt="logo"
        src="\images\logo.png"
      />
      <Box>
        <span>관리자 {auth && auth.username} 님</span>
        &nbsp;&nbsp;
      </Box>
    </Box>
  );
};

export default AdminHeader;
