import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <img src="/vite.svg" alt="logo" className={styles.logo} />
    </div>
  );
};

export default Logo;
