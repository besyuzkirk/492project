import jwtDecode from "jwt-decode";
import client from "./client";
import setAuthToken from "../utils/setAuthToken";

function handleResponse({ user, token }) {
  localStorage.setItem("token", token);
  setAuthToken(token);
  return { user, token };
}

function registerUser(userData) {
  return client
    .post("/auth/sign-up", userData)
    .then((res) => handleResponse(res.data));
}

function loginUser(userData) {

  return client
    .post("/auth/login", userData)
    .then((res) => handleResponse(res.data));
}

async function getUserName(userId) {
  try {

    if(userId) {
      const res = await client.get(`/user/getUserName/?id=${userId}`);
      return res.data;
    }
    else {
      return null;
    }
    
  } catch (error) {
    return Promise.reject(error);
  }
}

async function loadUser() {
  const token = getToken();

  if (!token) {
    return Promise.resolve({ user: null });
  }

  setAuthToken(token);

  const decoded = jwtDecode(token);
  console.log(decoded)
  try {
    const res = await client.get(`/user/?id=${decoded.id}`);
    console.log(res.data)
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

function logoutUser() {
  localStorage.removeItem("token");
  setAuthToken(null);
}

function getToken() {
  return localStorage.getItem("token");
}

async function getUserProfile(username) {
 
  try {
    const res = await client.get(`/user/getuserprofile/?id=${username}`);
    console.log(res.data)
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { registerUser, loginUser, logoutUser, getToken, loadUser, getUserName, getUserProfile };


