import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero} id="home">
      <div className={styles.header}>
        <h1>FOR YOUR FENCE INSTALLATION NEEDS</h1>
        <p>If you are looking for a reliable, durable, long-lasting vinyl, ornamental, or chain-link fence, give us a call today!</p>
        <a href="#contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Hero;
