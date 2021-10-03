import { FETCH_ALL, CREATE, UPDATE, LIKE, DELETE } from "./actionType";
import axios from "axios";

export const fetchAll = () => async (dispatch) => {
  try {
    let response = await axios.get(
      "https://twitter-backedn113.herokuapp.com/post"
    );
    dispatch({ type: FETCH_ALL, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    let response = await axios.post(
      "https://twitter-backedn113.herokuapp.com/post",
      post
    );
    dispatch({ type: CREATE, payload: response });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    let response = await axios.patch(
      `https://twitter-backedn113.herokuapp.com/post${id}`,
      post
    );
    dispatch({ type: UPDATE, payload: response });
  } catch (error) {}
};
export const likePost = (id) => async (dispatch) => {
  try {
    let response = await axios.patch(
      `https://twitter-backedn113.herokuapp.com/post${id}/likePost`
    );
    dispatch({ type: UPDATE, payload: response });
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.patch(`https://twitter-backedn113.herokuapp.com/post${id}`);
    dispatch({ type: UPDATE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
