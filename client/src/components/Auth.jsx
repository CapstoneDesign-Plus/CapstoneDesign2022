import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import authState from "../state/auth";
import adminState from "../state/admin";

Auth.propTypes = {
  admin: PropTypes.bool,
  el: PropTypes.node.isRequired,
};

function Auth({ el, admin = false }) {
  const auth = useRecoilValue(authState);

  const setAuthMode = useSetRecoilState(adminState);

  if (admin && (!auth || !auth.admin)) setAuthMode(false);

  return <>{auth && (!admin || auth.admin) ? el : <Navigate to={"/"} />}</>;
}

export default Auth;
