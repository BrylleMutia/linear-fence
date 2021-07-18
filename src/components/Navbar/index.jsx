import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import cx from "classnames";

import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_container}>
        <Logo />

        <ul className={isMenuOpen && styles.active}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#gallery">Gallery</Link>
          </li>
          <li>
            <Link to="#reviews">Reviews</Link>
          </li>
          <li>
            <Link to="#contact">Contact Us</Link>
          </li>
        </ul>

        <div className={cx(styles.menu, isMenuOpen && styles.menu_open)} onClick={() => setIsMenuOpen((prev) => !prev)}>
          <div className={styles.menu_hamburger}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
