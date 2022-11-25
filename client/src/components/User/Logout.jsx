import { useEffect } from "react";
import logout from "../../lib/logout";

const Logout = () => {
  useEffect(() => {
    logout().then(() => (document.location.href = "/"));
  }, []);

  return <></>;
};

export default Logout;
