import { asyncHandler } from "./../utils/asyncHandler.js";
import { User } from "./../models/user.model.js";
import { ApiError } from "./../utils/ApiError.js";
import { ApiResponse } from "./../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
  // generate access token
  // generate refresh token

  console.log(
    "GENERATING ACCESS AND REFRESH TOKENS",
    " ------------------------------------------------"
  );

  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Token generation failed");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // code to register a user
  // get user details from req.body
  // validate user details
  // check if user already exists
  // check for avatar image
  // upload avatar image to cloudinary
  // create a user object with the user details
  // save the user object to the database
  // check for user creation errors
  // remove password and refreah token from user object
  // return the user object
  console.log(
    "REGISTERING USER",
    " ------------------------------------------------"
  );
  let { email, name, password } = req.body;

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  const user = await User.create({
    email,
    password,
    name,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "User creation failed");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User Registered Successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  // code to login a user
  // get user details from req.body
  // validate user details
  // login with email
  // check if user exists
  // check if password is correct
  // generate access token
  // generate refresh token
  // save refresh token to database
  // return access token and refresh token

  console.log(
    "LOGIN USER",
    " ------------------------------------------------"
  );

  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await existingUser.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    existingUser._id
  );

  const loggedInUser = await User.findById(existingUser._id).select(
    "-password -refreshToken"
  );

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { accessToken, user: loggedInUser, accessToken, refreshToken },
        "User logged in successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  // code to logout a user
  // clear refresh token from database
  // clear refresh token from cookie
  // clear access token from cookie
  // return success message

  console.log(
    "LOGOUT USER",
    " -------------------------------------------------"
  );

  const userId = req.user._id;
  User.findByIdAndUpdate(
    userId,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  return res.status(200).json(new ApiResponse(200, {}, "User Logged Out"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  // code to refresh access token
  // get refresh token from cookie
  // check if refresh token exists
  // verify refresh token
  // generate new access token
  // return new access token

  console.log(
    "REFRESH ACCESS TOKEN",
    " ------------------------------------------------"
  );

  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    if (!decodedToken) {
      throw new ApiError(401, "Unauthorized request");
    }

    const user = await User.findById(decodedToken._id);
    if (!user) {
      throw new ApiError(401, "Unauthorized request");
    }
    console.log("user", user);
    if (user.refreshToken !== refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access Token Refreshed"
        )
      );
  } catch (error) {
    console.log("error caught in refreshing token ", error);
    throw new ApiError(401, error?.message || "Invalid Refresh Token");
  }
});

export { registerUser, loginUser, logoutUser, refreshAccessToken };
