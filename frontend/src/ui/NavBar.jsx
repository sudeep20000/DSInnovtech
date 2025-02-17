import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
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
  // resources: [
  //   { to: "/blog", label: "Blog" },
  //   { to: "/ebooks", label: "eBooks" },
  // ],
};

const PageNav = () => {
  const [isTokenPresent, setIsTokenPresent] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("details"));
    if (!details) return;
    if (details.token) setIsTokenPresent(true);
  }, []);

  const fixLabel = (key) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast("This feature is under development", {
      duration: 4000,
    });
    // navigate("/auth");
  };

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("details");
    navigate("/auth");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const handleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <div className={styles.container}>
          <div
            className={styles.logo_container}
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/" className={styles.logo_link}>
              <img src="/logo.svg" alt="logo" className={styles.logo} />
              <span className={styles.company_name}>DSinnovtech</span>
            </Link>
          </div>

          <button
            className={styles.ham_container}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {!isMenuOpen ? (
              <span className={styles.hamburger_icon}>
                <RxHamburgerMenu size={40} color="white" />
              </span>
            ) : (
              <span className={styles.cancel_icon}>
                <MdOutlineCancel size={40} color="white" />
              </span>
            )}
          </button>

          <div
            className={`${styles.navList_Wrapper} ${
              isMenuOpen ? styles.active : ""
            }`}
          >
            <ul className={styles.nav_list}>
              {Object.keys(menuItems).map((key) => (
                <li
                  className={styles.list}
                  onMouseEnter={() => !isMenuOpen && setActiveDropdown(key)}
                  onMouseLeave={() => !isMenuOpen && setActiveDropdown(null)}
                  key={key}
                >
                  {menuItems[key].length === 0 ? (
                    <>
                      <NavLink to={key} className={styles.nav_link}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <button
                        className={styles.navButton}
                        onClick={() => handleDropdown(key)}
                        aria-expanded={activeDropdown === key}
                        aria-haspopup="true"
                      >
                        <span>{fixLabel(key)}</span>
                        <span
                          className={`${styles["dropdown-arrow"]} ${
                            activeDropdown === key ? styles.open : ""
                          }`}
                        >
                          <RiArrowDropDownLine size={30} />
                        </span>
                      </button>

                      <div
                        className={`${styles.dropdownWrapper} ${
                          activeDropdown === key ? styles.open : ""
                        }`}
                        role="region"
                        aria-hidden={!activeDropdown === key}
                      >
                        <ul className={styles["dropdown-menu"]}>
                          {menuItems[key].map((item, i) => (
                            <li key={i}>
                              <NavLink
                                to={item.to}
                                className={styles["dropdown-item"]}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              ))}
              <li className={`${styles.list} ${styles.contact}`}>
                <Link
                  to="contact"
                  className={styles.contact_link}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className={styles.btn_container}>
          {!isTokenPresent && (
            <button
              onClick={(e) => handleLogin(e)}
              className={styles.login_btn}
            >
              Log in
            </button>
          )}
          {isTokenPresent && (
            <button
              onClick={(e) => handleLogout(e)}
              className={styles.logout_btn}
            >
              Log out
            </button>
          )}
        </div> */}
        </div>
      </nav>
    </header>
  );
};

export default PageNav;

{
  /* {activeDropdown === key && (
                      <DropdownMenu items={menuItems[key]} />
                      )} */
}
