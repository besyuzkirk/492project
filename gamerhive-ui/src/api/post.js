import client from "./client";
import setAuthToken from "../utils/setAuthToken";
function getToken() {
  return localStorage.getItem("token");
}

async function createPost(postData) {
  const token = getToken();

  if (!token) {
    return Promise.resolve({ user: null });
  }

  setAuthToken(token);

  try {
    const res = await client.post("/posts", postData,  {
      headers: {
        "Content-Type": "multipart/form-data",
      }});
    console.log(res.data)
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getPosts() {
 
  try {
    const res = await client.get("/posts");
   
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getPostByUsername(username) {
  console.log("test 43" , username)
  try {
    const res = await client.get(`/posts/getPostsByUser/?username=${username}`);
    console.log(res.data, "here")
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
}


export { createPost, getPosts , getPostByUsername};
