import React from "react";
import styles from "./OfferCard.module.scss";

const OfferCard = ({ offerInfo }) => {
  const { image, title, path } = offerInfo;

  const cardStyle = {
    background: `linear-gradient(to top, rgba(80, 203, 147, 1), rgba(86, 212, 83, 0)), url(${image})`,
    backgroundSize: "cover"
  };

  return (
    <div className={styles.offer_card} style={cardStyle}>
      <h6>{title}</h6>
    </div>
  );
};

export default OfferCard;
