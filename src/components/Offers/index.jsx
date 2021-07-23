import React, { useState, useEffect } from "react";
import styles from "./Offers.module.scss";

import VinylImg from "./images/vinyl.jpg";
import OrnamentalImg from "./images/ornamental.jpg";
import ChainlinkImg from "./images/chainlink.jpg";

import OfferCard from "./OfferCard";
import SectionTitle from "../SectionTitle";
import axios from "axios";

const offersImg = [VinylImg, OrnamentalImg, ChainlinkImg];

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios
      .get("/offers")
      .then((response) => {
        setOffers(
          response.data.map((offer) => {
            return { ...offer, display_img: offersImg.filter((img, index) => offer.id === index + 1) };
          })
        );
      })
      .catch((err) => alert(`Can't fetch website data. Error: ${err.response.data}`));
  }, []);

  return (
    <div className={styles.offers} id="offers">
      <SectionTitle title="WHAT WE OFFER" />

      <div className={styles.cards}>
        {offers.map((detail, index) => (
          <OfferCard key={index} offerInfo={detail} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
