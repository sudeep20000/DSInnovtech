import { NavLink } from "react-router-dom";
import styles from "./DropdownMenu.module.css";

const DropdownMenu = ({ items }) => {
  return (
    <ul className={`${styles["dropdown-menu"]}`}>
      {items.map((item, index) => (
        <li key={index}>
          <NavLink to={item.to} className={styles["dropdown-item"]}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
