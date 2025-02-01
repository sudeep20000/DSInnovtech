import { Outlet } from "react-router-dom";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";
import styles from "./AppLayout.module.css";

const Main = () => {
  return (
    <div className={styles.app}>
      <NavBar />
      <main className={styles.main_container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
