import React from "react";
import styles from "./MapMarker.module.scss";

import { MdLocationOn } from "react-icons/md";


const MapMarker = ({ lat, lng }) => {
  return (
    <div className={styles.marker}>
      <MdLocationOn className={styles.marker_icon}  />
      <p>Linear Fence</p>
    </div>
  );
};

export default MapMarker;