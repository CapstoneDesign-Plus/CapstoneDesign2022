import { Box, Divider, Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import AdminHeader from "../components/Admin/AdminHeader";
import { useEffect, useState } from "react";
import AdminContent from "../components/Admin/AdminContent";
import AdminTabs from "../components/Admin/AdminTabs";
import { useSetRecoilState } from "recoil";
import adminState from "../state/admin";
import paxios from "../lib/paxios";
import { useSnackbar } from "notistack";

const Wrap = ({ children, marginTop = 0 }) => {
  return (
    <Box width="800px" sx={{ margin: "0 auto", marginTop }}>
      {children}
    </Box>
  );
};

const AdminPage = () => {
  const [tab, setTab] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  const setAuthMode = useSetRecoilState(adminState);

  useEffect(() => {
    setAuthMode(true);

    paxios.interceptors.response.use((res) => {
      if (res.data.ok) {
        enqueueSnackbar("작업 성공", { variant: "success" });
      } else {
        enqueueSnackbar("작업 실패", { variant: "error" });
      }
      return res;
    });

    return () => {
      setAuthMode(false);
      paxios.interceptors.response.clear();
    };
  }, [enqueueSnackbar]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack width={"100vw"} sx={{ display: "flex", justifyContent: "center" }}>
        <Wrap>
          <AdminHeader auth={null} />
        </Wrap>
        <Divider />
        <Wrap>
          <AdminTabs tab={tab} setTab={setTab} />
        </Wrap>
        <Divider />
        <Wrap marginTop={"10px"}>
          <AdminContent tab={tab} />
        </Wrap>

        {/* <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="user" element={<UserDashboard />} />
          <Route path="log" element={<LogDashboard />} />
          <Route path="ticket" element={<TicketDashboard />} />
          <Route path="token" element={<TokenDashboard />} />
        </Routes> */}
      </Stack>
    </LocalizationProvider>
  );
};

export default AdminPage;
