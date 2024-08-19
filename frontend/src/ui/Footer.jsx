import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_content}>
        © 2024 DSinnovtech Inc. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
