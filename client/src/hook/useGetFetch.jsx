import { useEffect, useState } from "react";
import axios from "../lib/axios";

async function get(url) {
  const response = await axios.get(url);

  return response;
}

const useGetFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    get(url).then((value) => {
      //console.log(value);
      setData(value.data.result);
    });
    return () => {};
  }, []);

  return [data];
};

export default useGetFetch;
