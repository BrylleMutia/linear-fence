import React from "react";
import styles from "./Home.module.scss";

import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
    </main>
  );
};

export default Home;
