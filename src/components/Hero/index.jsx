import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";

import axios from "axios";

const Hero = () => {
  const [header, setHeader] = useState("");
  const [subHeader, setSubHeader] = useState("");
  const [buttonText, setButtonText] = useState("Contact Us");

  useEffect(() => {
    axios
      .get("/hero")
      .then((response) => {
        setHeader(response.data.header);
        setSubHeader(response.data.subheader);
        setButtonText(response.data.button_text);
      })
      .catch((err) => alert(`Can't fetch website data. Error: ${err.response.data}`));
  }, []);

  return (
    <div className={styles.hero} id="home">
      <div className={styles.header}>
        <h1>{header}</h1>
        <p>{subHeader}</p>
        <div className={styles.btn_container}>
          <a className={styles.button_outlined} href="#contact">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
