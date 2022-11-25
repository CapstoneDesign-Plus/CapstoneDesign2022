import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import adminState from "../../../state/admin";

const AdminHeader = ({ auth }) => {
  const setAdminMode = useSetRecoilState(adminState);

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
      <Link to="/">
        <img
          onClick={() => setAdminMode(false)}
          style={{ height: 50 }}
          className="logo"
          alt="logo"
          src="\images\logo.png"
        />
      </Link>
      <Box>
        <span>관리자 {auth && auth.username} 님</span>
        &nbsp;&nbsp;
      </Box>
    </Box>
  );
};

export default AdminHeader;
