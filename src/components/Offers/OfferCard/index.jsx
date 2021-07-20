import React from "react";
import styles from "./OfferCard.module.scss";

import { Link } from "react-router-dom";
import Overlay from "../../Overlay";

const OfferCard = ({ offerInfo }) => {
  const { image, title, path } = offerInfo;

  const cardStyle = {
    background: `linear-gradient(to top, rgba(80, 203, 147, 1), rgba(86, 212, 83, 0)), url(${image})`,
    backgroundSize: "cover",
  };

  return (
    <Link to={path} className={styles.card_container}>
      <Overlay label="See Gallery">
        <div className={styles.offer_card} style={cardStyle}>
          <h6>{title}</h6>
        </div>
      </Overlay>
    </Link>
  );
};

export default OfferCard;
