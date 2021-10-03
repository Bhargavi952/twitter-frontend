import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import twitterLogo from "../../file/twitterLogo.png";
import img from "../../file/front.png";
import google from "../../file/google.png";
import apple from "../../file/apple.png";

let WelcomePage = () => {
  return (
    <div className={styles.welcomePage}>
      <div className={styles.left_cont}>
        <div>
          <img src={img} alt="twitter" />
        </div>
      </div>
      <div className={styles.right_cont}>
        <div className={styles.twitter_logo}>
          <img src={twitterLogo} alt="twitter" />
        </div>
        <div className={styles.bigtext}>
          <h1>Happening now</h1>
        </div>
        <div className={styles.mediumtext}>
          <h2>Join Twitter today.</h2>
        </div>
        <div>
          <div className={styles.google_signup_cont}>
            <img width="30px" src={google} alt="" />
            <Link className={styles.google_signup}>Sign up with Google</Link>
          </div>
          <div className={styles.apple_signup_cont}>
            <img src={apple} alt="" />

            <Link className={styles.apple_signup}>Sign up with Apple</Link>
          </div>
          <div className={styles.email_signup_cont}>
            <Link to="/signup" className={styles.email_signup}>
              Sign up with phone or email
            </Link>
          </div>
        </div>

        <div className={styles.policy}>
          By signing up, you agree to the
          <span style={{ color: "#1d9bf0" }}> Terms of Service </span> and{" "}
          <span style={{ color: "#1d9bf0" }}> Privacy Policy </span> , including{" "}
          <span style={{ color: "#1A90DB" }}> Cookie Use </span> .
        </div>

        <div className={styles.login_link_cont}>
          Already have an account?
          <Link className={styles.login_link} to="/login">
            {" "}
            Log in{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
