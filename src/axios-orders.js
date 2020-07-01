import axios from "axios";

const instance = axios.create({
   baseURL: "https://my-burger-react-58764.firebaseio.com/",
});

export default instance;
