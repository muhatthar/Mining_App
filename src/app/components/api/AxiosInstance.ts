import Axios from "axios";

const AxiosInstance = () => {
  const res = Axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};

export default AxiosInstance;
