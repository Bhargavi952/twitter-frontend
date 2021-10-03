import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../Redux/actions";
import moment from "moment";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePost, likePost } from "../../Redux/actions";
import { getData } from "../../Utils/LocalStorage";
const Post = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data, "from redux");
  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  let username = Math.floor(Math.random() * 100000);
  const userData = getData("loginData");

  return (
    <>
      {data.map((item) => {
        return (
          <div className={styles.post_cont}>
            <div className={styles.user}>S</div>
            <div>
              {userData.result.name ? (
                <h4>
                  {userData.result.name}
                  <span style={{ color: "gray" }}>
                    {`@${userData.result.name}` + username}
                  </span>

                  <span style={{ color: "gray", padding: "10px" }}>
                    {moment(item.createdAt).fromNow()}
                  </span>
                </h4>
              ) : (
                <h4>
                  {item.username}
                  <span style={{ color: "gray" }}>
                    {`@${item.username}` + username}
                  </span>

                  <span style={{ color: "gray", padding: "10px" }}>
                    {moment(item.createdAt).fromNow()}
                  </span>
                </h4>
              )}
              <p>{item.message}</p>
              <img className={styles.img} src={item.selectedFile} alt="" />
              <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  onClick={() => {
                    dispatch(likePost(item._id));
                  }}
                >
                  <FavoriteOutlinedIcon color="primary" /> &nbsp;{" "}
                  {item.likeCount}
                </Button>
                <Button onClick={() => dispatch(deletePost(item._id))}>
                  <DeleteIcon color="primary" /> Delete
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
