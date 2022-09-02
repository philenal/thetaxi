import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "../styles/Brother.module.css";
import HouseTabs from "./components/HouseTabs";

function House(props) {
  const elTitle = useRef(null);
  const typedTitle = useRef(null);

  useEffect(() => {
    const optionsTitle = {
      strings: [`64 | 66 BAY STATE ROAD`],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
    };

    typedTitle.current = new Typed(elTitle.current, optionsTitle);
    return () => {
      typedTitle.current.destroy();
    };
  }, []);

  return (
    <div className={styles.videoContainer}>
      <img className={styles.backgroundImage} src="./images/house.jpg" />
      <div className={styles.RushTitle}>
        <span ref={elTitle} />
      </div>
      <HouseTabs />
    </div>
  );
}

export default House;
