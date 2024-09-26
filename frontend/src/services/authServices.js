import axiosInstance from "../api/axiosInstance";

export const loginUser = async (email, password) => {
  const response = await axiosInstance.post("/users/login", {
    email,
    password,
  });
  const { data } = response.data;
  const { accessToken, refreshToken, user } = data;
  return { refreshToken, accessToken, user };
};
