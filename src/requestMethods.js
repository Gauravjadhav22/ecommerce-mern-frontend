import axios from "axios";

const BASE_URL = "https://shopping-app-mern-backend.herokuapp.com/api/v1";
// const BASE_URL = "http://localhost:5000/api/v1";

var token =
  // JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.user.token || undefined;
  JSON.parse(localStorage.getItem("persist:root"))
    ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    : undefined
    ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser
    : undefined
    ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.token
    : undefined;



const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
};
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers,
});
