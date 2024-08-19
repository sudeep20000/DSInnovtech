import { Outlet } from "react-router-dom";
import NavBar from "../ui/NavBar";
import styles from "./Main.module.css";
import Footer from "../ui/Footer";

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
