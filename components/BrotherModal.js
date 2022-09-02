import styles from "../styles/Brother.module.css";

export default function BrotherModal(props) {
  const { brother, open, setClose } = props;
  console.log("OIEJROIAJR", open);
  return (
    <div
      className="modal fade"
      id="brotherModal"
      tabIndex="-1"
      aria-labelledby="brotherModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-m modal-s modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className={styles.BrotherModal}>
              <div className={styles.BrotherDelta}>▲{brother?.delta}▼</div>

              <img
                className={styles.BrotherImageModal}
                src={"./images/" + brother?.delta + ".jpg"}
              />

              <div className={styles.BrotherBlurb}>
                <span className={styles.BrotherNameModal}>{brother?.name}</span>
                <br />
                {/* <span className={styles.BrotherSection}>DELTA: </span>{" "}
                {brother?.delta}
                <br /> */}
                <span className={styles.BrotherSection}>CLASS YEAR: </span>{" "}
                {brother?.class}
                <br />
                <span className={styles.BrotherSection}>COURSE: </span>{" "}
                {brother?.course}
                <br />
                <span className={styles.BrotherSection}>INTERESTS: </span>
                {brother?.interests}
                <br />
                <br />
                {brother?.blurb}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
