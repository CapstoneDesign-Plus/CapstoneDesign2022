import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

Auth.propTypes = {
  auth: PropTypes.shape({ admin: PropTypes.bool }),
  admin: PropTypes.bool,
  el: PropTypes.node.isRequired,
};

function Auth({ auth, el, admin = false }) {
  return <>{auth && (!admin || auth.admin) ? el : <Navigate to={"/"} />}</>;
}

export default Auth;
