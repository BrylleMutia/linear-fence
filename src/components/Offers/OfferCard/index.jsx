import React from "react";
import styles from "./OfferCard.module.scss";

import { Link } from "react-router-dom";
import Overlay from "../../Overlay";

const OfferCard = ({ offerInfo }) => {
  const { image, title, path } = offerInfo;

  const cardStyle = {
    backgroundImage: `url(${image})`,
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
