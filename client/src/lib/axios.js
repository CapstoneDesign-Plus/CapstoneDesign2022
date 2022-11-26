import axios from "axios";

axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: "https://bapsim.kro.kr/api/",
  timeout: 5000,
  withCredentials: true,
});

export default instance;
