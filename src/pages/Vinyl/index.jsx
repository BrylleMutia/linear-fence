import React from "react";
import styles from "./Vinyl.module.scss";

import Contact from "../../components/Contact";
import Gallery from "../../components/Gallery";
import SectionTitle from "../../components/SectionTitle";

import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";
import Image6 from "./images/6.jpg";
import Image7 from "./images/7.jpg";
import Image8 from "./images/8.jpg";
import Image9 from "./images/9.jpg";
import Image10 from "./images/10.jpg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10];

const Vinyl = () => {
  return (
    <>
      <div className={styles.vinyl}>
        <SectionTitle title="VINYL FENCE GALLERY" />
        <Gallery images={images} />
      </div>
      <Contact />
    </>
  );
};

export default Vinyl;
