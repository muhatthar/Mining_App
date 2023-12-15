import AxiosInstance from "../../api/AxiosInstance";

const postLogin = async (email: string, password: string) => {
  const axiosInstance = AxiosInstance();
  try {
    const result = await axiosInstance
      .post("auth/login", {
        email,
        password,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default postLogin;
