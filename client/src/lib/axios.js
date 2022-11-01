import axios from "axios";

const instance = axios.create({
  baseURL: 'http://bapsim.kro.kr/api/',
  timeout: 1000,
})

export default instance;