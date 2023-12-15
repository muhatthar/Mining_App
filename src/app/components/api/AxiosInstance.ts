import axios from "axios";

const AxiosInstance = () => {
  const res = axios.create({
    baseURL: "https://localhost:8000/api/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};

export default AxiosInstance;
