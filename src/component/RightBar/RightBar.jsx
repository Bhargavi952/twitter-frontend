import React from "react";
import styles from "./styles.module.css";
import data from "./data";
import SearchIcon from "@mui/icons-material/Search";
import { style } from "@mui/system";

const RightBar = () => {
  console.log(data);
  return (
    <div
      className={style.rightbar_cont}
      style={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        right: 0,
      }}
    >
      <div className={styles.serachbar}>
        {" "}
        <SearchIcon /> &nbsp; Search Twitter
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.map((item) => {
          return (
            <div className={styles.main_cont}>
              <div className={styles.left_cont}>
                <h6>
                  {" "}
                  {item.title1}
                  <span>{item.title2}</span>
                </h6>
                <h5>{item.message}</h5>
              </div>
              <div className={styles.right_cont}>
                <img className={styles.img} src={item.img} alt="" />{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightBar;
