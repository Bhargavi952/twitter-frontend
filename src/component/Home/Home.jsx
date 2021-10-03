import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import star from "../../file/star.png";
import { getData } from "../../Utils/LocalStorage";
import FileBase from "react-file-base64";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchAll } from "../../Redux/actions";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../RightBar/RightBar";

const Home = () => {
  const userData = getData("loginData");

  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    message: "",
    selectedFile: "",
  });
  console.log(postData.message.length);
  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
    dispatch(createPost(postData));
    clear();
  };
  const clear = () => {
    setPostData({ message: "", selectedFile: "" });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ marginLeft: "330px" }}>
          <div className={styles.home_cont}>
            <h3>Home</h3>
            <img width="35px" src={star} alt="" />
          </div>
          <div className={styles.form_cont}>
            <div className={styles.user}>
              {userData.result.name[0].toUpperCase()}
            </div>
            <form className={styles.right_cont} onSubmit={handleSubmit}>
              <div>
                <input
                  className={styles.message}
                  type="text"
                  name="message"
                  value={postData.message}
                  placeholder="What's heppening?"
                  onChange={(e) =>
                    setPostData({ ...postData, message: e.target.value })
                  }
                />
              </div>
              <div className={styles.files}>
                <div>
                  <FileBase
                    type="file"
                    value={postData.selectedFile}
                    multiple={false}
                    onDone={({ base64 }) =>
                      setPostData({ ...postData, selectedFile: base64 })
                    }
                  />
                </div>
                <input
                  disabled={postData.message.length < 1}
                  className={styles.tweet_btn}
                  type="submit"
                  value="Tweet"
                />
              </div>
            </form>
          </div>
          <Post />
        </div>
        <RightBar />
      </div>
    </>
  );
};

export default Home;
