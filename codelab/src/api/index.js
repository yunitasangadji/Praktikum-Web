//import axios
import axios from "axios";
const Api = axios.create({
  //samakan dengan url api Laravel modul 5
  baseURL: "http://localhost:8000",
});
export default Api;
