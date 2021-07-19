import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum laborum illo quos ipsa alias quibusdam dolor eaque dolorum repellendus eum?</p>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Hero;
