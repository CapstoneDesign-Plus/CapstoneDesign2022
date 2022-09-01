import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export type LogoutFn = () => Promise<void>;


export interface LogoutProps {
  logout: LogoutFn
}

const Logout : React.FC<LogoutProps> = ({logout}) => {

  useEffect(()=>{
    logout();
  },[]);

  return <Navigate to='/'></Navigate>
}

export default Logout;