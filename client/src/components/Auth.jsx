import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import authState from "../state/auth";

Auth.propTypes = {
  admin: PropTypes.bool,
  el: PropTypes.node.isRequired,
};

function Auth({ el, admin = false }) {
  const auth = useRecoilValue(authState);

  return <>{auth && (!admin || auth.admin) ? el : <Navigate to={"/"} />}</>;
}

export default Auth;
