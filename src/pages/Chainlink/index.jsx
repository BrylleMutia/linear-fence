import React from "react";
import styles from "./Chainlink.module.scss";

import Contact from "../../components/Contact";
import Gallery from "../../components/Gallery";
import SectionTitle from "../../components/SectionTitle";

import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";

const images = [Image1, Image2, Image3, Image4, Image5];

const Chainlink = () => {
  return (
    <>
      <div className={styles.chainlink}>
        <SectionTitle title="CHAIN-LINK FENCE GALLERY" />
        <Gallery images={images} />
      </div>
      <Contact />
    </>
  );
};

export default Chainlink;
