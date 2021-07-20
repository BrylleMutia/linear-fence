import React from "react";
import styles from "./Contact.module.scss";

import SectionTitle from "../SectionTitle";
import { AiFillPhone } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contact_container} id="contact">
      <SectionTitle title="CONTACT US" />

      <div className={styles.contact}>
        <iframe
          width="350"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          title="linear-fence-map"
          src={`https://www.google.com/maps/embed/v1/place?q=807%20Secord%20Boulevard%20Northwest%2C%20Edmonton%2C%20AB%20T5T%207J8%2C%20Canada&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}></iframe>

        <div className={styles.contact_details}>
          <h2>
            Linear Fence
            <br /> 807 Secord Blvd NW
            <br />
            Edmonton, Ab T5T 7J8
          </h2>

          <div className={styles.phone}>
            <AiFillPhone style={{ color: "#71EFA3", fontSize: "1.5rem" }} />
            <h4>
              <a href="tel:780-719-2484">780-719-2484</a>
            </h4>
          </div>
          <div className={styles.facebook}>
            <FaFacebook style={{ color: "#395185", fontSize: "1.5rem" }} />
            <h4>
              <a href="#">Follow us on Facebook</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
