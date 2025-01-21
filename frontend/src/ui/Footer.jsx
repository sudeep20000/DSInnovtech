import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_content}>
        © {new Date().getFullYear()} DSinnovtech Inc. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
