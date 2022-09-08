import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerSuccess,
  registerFailure,
  registerStart,
} from "./userRedux";
import { publicRequest } from "../requestMethods";
export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    alert("logging in....");
    window.location.href = "/";
  } catch (error) {
    dispatch(loginFailure());
    alert("invalid credentials!..");
  }
};
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  console.log(user);
  try {
    const res = await publicRequest.post("/auth/register", user);
    console.log(res.data);
    dispatch(registerSuccess(res.data));
    alert("logging in....");
    window.location.href = "/";
  } catch (error) {
    console.log(error);
    dispatch(registerFailure());
    alert("invalid credentials!..");
  }
};
