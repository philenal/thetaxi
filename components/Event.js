import styles from "../styles/Brother.module.css";

function Event(props) {
  return (
    <div className={styles.EventContainer}>
      <img
        src={props.src}
        onClick={() => props.onClick()}
        onMouseOver={() => props.onMouseOver()}
        onMouseOut={() => props.onMouseOut()}
        alt={props.name}
        className={props.hasGlow ? styles.EventImageGlow : styles.EventImage}
      />
      <div className={props.hasGlow ? styles.EventNameGlow : styles.EventName}>
        {props.name}

        {props.name == "The Theta Xi Arcade" ? (
          <>
            <br />{" "}
            <div style={{ fontSize: "10px", marginTop: "-5px" }}>
              League/Valorant
            </div>
          </>
        ) : (
          <br />
        )}
        {props.time}
      </div>
    </div>
  );
}

export default Event;
