import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import Logo from "../components/Logo";
import DropdownMenu from "../components/DropdownMenu";
import styles from "./NavBar.module.css";

const PageNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const menuItems = {
    about: [],
    service: [
      { to: "/service/consulting", label: "Consulting" },
      { to: "/development", label: "Development" },
    ],
    technology: [
      { to: "/technology/BESAI", label: "BESAI" },
      { to: "/technology/AI-ML", label: "AI/ML" },
      { to: "/technology/Multiphysics-and-Advanced-computing", label: "MAAC" },
    ],
    "case studies": [
      { to: "/project-a", label: "Project A" },
      { to: "/project-b", label: "Project B" },
    ],
    resources: [
      { to: "/blog", label: "Blog" },
      { to: "/ebooks", label: "eBooks" },
    ],
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__logo_container}>
          <Link to="/" className={styles.nav__logo}>
            <Logo />
            <span>DSinnovtech</span>
          </Link>
        </div>

        <ul className={styles.nav__list}>
          {Object.keys(menuItems).map((key) => (
            <li
              key={key}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              className={styles.list}
            >
              {menuItems[key].length === 0 ? (
                <>
                  <NavLink to={key} className={styles.nav__link}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </NavLink>
                </>
              ) : (
                <>
                  <div className={styles.nav__div}>
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <div
                      className={`${styles["dropdown-arrow"]} ${
                        activeDropdown === key ? styles.open : styles.close
                      }`}
                    >
                      <RiArrowDropDownLine size={30} />
                    </div>
                  </div>
                  {activeDropdown === key && (
                    <DropdownMenu items={menuItems[key]} />
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.contact}>
          <Link to="contact" className={styles.contact_link}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default PageNav;
