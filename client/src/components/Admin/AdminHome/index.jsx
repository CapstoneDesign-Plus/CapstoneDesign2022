import { Box, Divider } from "@mui/material";
import AdminDiet from "../AdminDiet";
import AdminStatistic from "../AdminStatistic";

const AdminHome = () => {
  return (
    <Box>
      <AdminStatistic />
      <Divider />
      <AdminDiet />
    </Box>
  );
};

export default AdminHome;
