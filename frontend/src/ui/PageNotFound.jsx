/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.empty_box}>
      <h1 className={styles.empty_msg}>Page Not Found</h1>
      <h1 className={styles.empty_msg}>
        The page you are looking for doesn't exist or has been moved
      </h1>
      <button onClick={() => navigate("/")} className={styles.back_btn}>
        Back
      </button>
    </div>
  );
};

export default PageNotFound;
