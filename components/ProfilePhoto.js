import { useState, useEffect } from "react";
import styles from "../styles/Brother.module.css";

function ProfilePhoto(props) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window?.addEventListener("resize", handleResize);
  });

  const handleResize = () => {
    if (window?.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  return (
    <div className={styles.EventContainer}>
      <img
        src={props.src}
        onClick={() => props.onClick()}
        onMouseOver={() => props.onMouseOver()}
        onMouseOut={() => props.onMouseOut()}
        alt={props.delta}
        className={
          props.hasGlow ? styles.BrotherImageGlow : styles.BrotherImage
        }
      />
      <div className={styles.MobileProfileName}>
        <div
          className={props.hasGlow ? styles.EventNameGlow : styles.EventName}
        >
          {props.name}
        </div>
      </div>
    </div>
  );
}

export default ProfilePhoto;
