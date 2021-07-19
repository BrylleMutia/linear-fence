import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <h1>For your fence installation needs</h1>
        <p>If you are looking for a reliable, durable, long-lasting vinyl, ornamental, or chain-link fence, give us a call today!</p>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Hero;
