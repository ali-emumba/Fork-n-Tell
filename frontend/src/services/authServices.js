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

export const logoutUser = async () => {
  try {
    await axiosInstance.post("/users/logout", {});
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "An error occurred during logout."
      );
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};
