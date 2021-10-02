import React, { useState } from "react";
import styles from "./signup.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const init = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
};

const SignUp = () => {
  const [query, setQuery] = useState(init);
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery({
      ...query,
      [name]: value,
    });
  };

  const signupFunc = (data) => {
    return axios({
      method: "post",
      url: "http://localhost:9000/user/signup",
      data: data,
    })
      .then((res) => {
        console.log(res);
        if(res.status === 200){
            history.push("/login") 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupFunc(query);
  };

  return (
    <div className={styles.signupCont}>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <h2
          style={{ marginBottom: "25px", textAlign: "left", marginLeft: "11%" }}
        >
          Create your account
        </h2>
        <input placeholder=" Name" name="name" onChange={handleChange} />
        <br />
        <br />

        <input placeholder=" Email" name="email" onChange={handleChange} />
        <br />
        <br />

        <input
          placeholder=" Phone Number"
          name="phoneNumber"
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          placeholder=" Password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <br />

        <input type="submit" value="Register" id={styles.signupBtn} />
        <br />
        <br />
      </form>
    </div>
  );
};

export default SignUp;
