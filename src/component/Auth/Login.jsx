import React, { useState } from "react";
import axios from "axios";
import twitterLogo from "../../file/twitterLogo.png";
import styles from "./loginStyles.module.css";
import { useHistory } from "react-router-dom";

const init = {
  email: "",
  password: "",
};

const Login = () => {
  const [query, setQuery] = useState(init);
  const [loginData, setLoginData] = useState([]);

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery({
      ...query,
      [name]: value,
    });
  };
  //   console.log(query);
  const loginFunc = (data) => {
    return axios({
      method: "post",
      url: "http://localhost:9000/user/signin",
      data: data,
    })
      .then((res) => {
        setLoginData(res.data);
        if (res.status === 200) {
          history.push("/home");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  console.log(loginData.message);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginFunc(query);
  };
  return (
    <div className={styles.login_cont}>
      <div>
        <img src={twitterLogo} alt="twitter" />
        <h1>Log in to Twitter</h1>\
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <input
            placeholder="Phone , email or username"
            name="email"
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <br />
          <br />
          <input id={styles.loginBtn} type="submit" value="Submit" />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Login;

