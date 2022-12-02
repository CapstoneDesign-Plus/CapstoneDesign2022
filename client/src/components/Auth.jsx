import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuthCheck from "../hook/useAuthCheck";
import { Box, CircularProgress } from "@mui/material";
import Loading from "./Loading";

Auth.propTypes = {
  admin: PropTypes.bool,
  el: PropTypes.node.isRequired,
};

function Auth({ el, admin = false }) {
  const { status, auth } = useAuthCheck();

  if (status === "pending") return <Loading />;

  return <>{auth && (!admin || auth.admin) ? el : <Navigate to="/" />}</>;
}

export default Auth;
