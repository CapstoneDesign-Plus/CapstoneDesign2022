import { useState } from "react";
import { useRecoilState } from "recoil";
import fetchCheck from "../lib/fetchCheck";
import authState from "../state/auth";

export default function useAuthCheck() {
  const [status, setStatus] = useState("pending");

  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    fetchCheck().then((v) => {
      setAuth(v);
      setStatus("done");
    });
  }, []);

  return {
    status,
    auth,
  };
}
