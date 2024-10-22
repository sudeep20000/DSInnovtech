import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import Logo from "../components/Logo";
import DropdownMenu from "../components/DropdownMenu";
import styles from "./NavBar.module.css";

const menuItems = {
  "about us": [
    { to: "/about-us/context", label: "Context" },
    { to: "/about-us/expertise", label: "Expertise" },
  ],
  service: [
    { to: "/service/core-technology", label: "Core technology" },
    { to: "/service/consulting", label: "Consulting" },
  ],
  technology: [
    { to: "/technology/BESAi", label: "BESAi" },
    { to: "/technology/DSAi", label: "DSAi" },
    // { to: "/technology/Multiphysics-and-Advanced-computing", label: "MAAC" },
  ],
  "case studies": [
    { to: "/project-a", label: "Project A" },
    { to: "/project-b", label: "Project B" },
  ],
  resources: [
    // { to: "/blog", label: "Blog" },
    // { to: "/ebooks", label: "eBooks" },
  ],
};

const PageNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__logo_container}>
          <Link to="/" className={styles.nav__logo}>
            <Logo />
            <div>
              <span className={styles.coloredPart}>DS</span>
              innovtech
            </div>
          </Link>
        </div>

        <ul className={styles.nav__list}>
          {Object.keys(menuItems).map((key) => (
            <li
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              className={styles.list}
              key={key}
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
