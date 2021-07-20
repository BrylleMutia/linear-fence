import React from "react";
import styles from "./Ornamental.module.scss";

import Contact from "../../components/Contact";
import Gallery from "../../components/Gallery";
import SectionTitle from "../../components/SectionTitle";

import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";

const images = [Image1, Image2, Image3, Image4];

const Ornamental = () => {
  return (
    <>
      <div className={styles.ornamental}>
        <SectionTitle title="ORNAMENTAL FENCE GALLERY" />
        <Gallery images={images} />
      </div>
      <Contact />
    </>
  );
};

export default Ornamental;
