import React from "react";
import styles from "./OfferCard.module.scss";
import axios from "axios";

import { Link } from "react-router-dom";
import Overlay from "../../Overlay";

const OfferCard = ({ offerInfo }) => {
  const { display_img, title, path_url } = offerInfo;

  const cardStyle = {
    backgroundImage: `url(${display_img})`,
    backgroundSize: "cover",
  };

  return (
    <Link to={path_url} className={styles.card_container}>
      <Overlay label="See Gallery">
        <div className={styles.offer_card} style={cardStyle}>
          <h6>{title}</h6>
        </div>
      </Overlay>
    </Link>
  );
};

export default OfferCard;
