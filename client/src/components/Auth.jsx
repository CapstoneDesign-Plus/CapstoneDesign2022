import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuthCheck from "../hook/useAuthCheck";
import { Box, CircularProgress } from "@mui/material";

Auth.propTypes = {
  admin: PropTypes.bool,
  el: PropTypes.node.isRequired,
};

function Auth({ el, admin = false }) {
  const { status, auth } = useAuthCheck();

  if (status === "pending")
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return <>{auth && (!admin || auth.admin) ? el : <Navigate to="/" />}</>;
}

export default Auth;
