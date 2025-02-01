import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import styles from "./Auth.module.css";

const Auth = () => {
  const [tab, setTab] = useState("login");

  useEffect(() => {
    const pageName = localStorage.getItem("page");
    setTab(pageName);
  }, []);

  const handelSetTab = (value) => {
    setTab(value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.main_container}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="logo" loading="lazy" />
          <span>DS</span>innovtech
        </div>

        {tab === "register" ? (
          <Register handelSetTab={handelSetTab} />
        ) : (
          <Login handelSetTab={handelSetTab} />
        )}
      </div>
    </div>
  );
};

export default Auth;
