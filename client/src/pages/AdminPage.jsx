import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Admin from "../components/Admin";
import authState from "../state/auth";

const AdminPage = () => {
  const auth = useRecoilValue(authState);

  // if (!auth || !auth.admin) return <Navigate to="/" />;

  return (
    <Box width={750}>
      <Admin></Admin>
    </Box>
  );
};

export default AdminPage;
