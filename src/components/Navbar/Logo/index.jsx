import React from "react";
import styles from "./Logo.module.scss";

import LogoImg from "./images/LinearFenceLogo.png";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={LogoImg} alt="Linear Fence" />
      <div>
        <h3>Linear Fence</h3>
        <p>Your Ultimate Fence Solution</p>
      </div>
    </div>
  );
}

export default Logo;
