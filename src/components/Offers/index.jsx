import React from "react";
import styles from "./Offers.module.scss";

import VinylImg from "./images/vinyl.jpg";
import OrnamentalImg from "./images/ornamental.jpg";
import ChainlinkImg from "./images/chainlink.jpg";

import OfferCard from "./OfferCard";
import SectionTitle from "../SectionTitle";

const offerDetails = [
  {
    image: VinylImg,
    title: "VINYL FENCE",
    path: "/vinyl",
  },
  {
    image: OrnamentalImg,
    title: "ORNAMENTAL FENCE",
    path: "/ornamental",
  },
  {
    image: ChainlinkImg,
    title: "CHAIN-LINK FENCE",
    path: "/chainlink",
  },
];

const Offers = () => {
  return (
    <div className={styles.offers}>
      <SectionTitle title="WHAT WE OFFER" />

      <div className={styles.cards}>
        {offerDetails.map((detail, index) => (
          <OfferCard key={index} offerInfo={detail} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
