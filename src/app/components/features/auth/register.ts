import AxiosInstance from "../../api/AxiosInstance";

const postRegister = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const axiosInstance = AxiosInstance();
  try {
    const result = await axiosInstance
      .post("/auth/register", {
        firstName,
        lastName,
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
    console.error(error);
  }
};

export default postRegister;
