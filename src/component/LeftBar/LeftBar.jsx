import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import home from "./Icons/home1.png";
import hash from "./Icons/hash.png";
import bell from "./Icons/notification1.png";
import msg from "./Icons/msg.png";
import user from "./Icons/user.png";
import more from "./Icons/more.png";
import profile_more from "./Icons/profile_more.png";

import twitterlogo from "../../file/twitterLogo.png";
import { getData } from "../../Utils/LocalStorage";

const links = [
  {
    to: "/home",
    title: "Home",
    logo: home,
  },
  {
    to: "/explore",
    title: "Explore",
    logo: hash,
  },
  {
    to: "/notifications",
    title: "Notifications",
    logo: bell,
  },
  {
    to: "/messages",
    title: "Messages",
    logo: msg,
  },
  {
    to: "/profile",
    title: "Profile",
    logo: user,
  },
  {
    to: "/more",
    title: "More",
    logo: more,
  },
];

let LeftBar = () => {
  const userData = getData("loginData");
  // console.log(userData)
  return (
    <>
      <div className={styles.sidebar_cont}>
        <div style={{ marginLeft: "12px" }}>
          <img width="40px" src={twitterlogo} alt="" />
        </div>
        <div>
          {links.map((item) => {
            return (
              <div className={styles.links_cont}>
                <Link className={styles.sidebar_links} to={`${item.to}`}>
                  <img
                    className={styles.img}
                    width="30px"
                    height="30px"
                    src={item.logo}
                    alt={item.title}
                  />

                  <p className={styles.text}>{item.title}</p>
                </Link>
              </div>
            );
          })}
        </div>

        <button className={styles.tweet_btn}>Tweet</button>
        <div className={styles.profile_div}>
          <img
            width="45px"
            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            alt="profile"
          />
          <h3>
            {userData.result.name.charAt(0).toUpperCase() +
              userData.result.name.slice(1)}
          </h3>
          <img src={profile_more} alt="" />
        </div>
      </div>
    </>
  );
};

export default LeftBar;
