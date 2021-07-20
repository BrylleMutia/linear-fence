import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";

import Logo from "./Logo";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleNavMenu = () => setIsMenuOpen((prev) => !prev);


  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_container}>
        <Link to="/">
          <Logo />
        </Link>

        <ul className={isMenuOpen ? styles.open : ""}>
          <Link to="/" onClick={toggleNavMenu}>
            <li className={location.pathname === "/" && location.hash === "" ? styles.active : ""}>Home</li>
          </Link>
          <a href="/#offers" onClick={toggleNavMenu}>
            <li className={location.hash === "#offers" ? styles.active : ""}>Gallery</li>
          </a>
          <a href="/#reviews" onClick={toggleNavMenu}>
            <li className={location.hash === "#reviews" ? styles.active : ""}>Reviews</li>
          </a>
          <a href="/#contact" onClick={toggleNavMenu}>
            <li className={location.hash === "#contact" ? styles.active : ""}>Contact Us</li>
          </a>
        </ul>

        <div className={cx(styles.menu, isMenuOpen ? styles.menu_open : "")} onClick={toggleNavMenu}>
          <div className={styles.menu_hamburger}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
