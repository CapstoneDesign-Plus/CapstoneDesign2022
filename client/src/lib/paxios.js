import axios from "axios";

const paxios = axios.create({
  baseURL: "http://bapsim.kro.kr/api",
  timeout: 5000,
});

export default paxios;
