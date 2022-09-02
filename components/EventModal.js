import styles from "../styles/Brother.module.css";

export default function EventModal(props) {
  const { event, open, setClose } = props;
  return (
    <div
      className="modal fade"
      id="eventModal"
      tabIndex="-1"
      aria-labelledby="eventModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-m modal-s modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className={styles.EventModal}>
              <img className={styles.EventImageModal} src={event?.src} />

              <div className={styles.EventBlurb}>
                <span className={styles.BrotherNameModal}>{event?.name}</span>
                <br />

                <div className={styles.EventTime}>{event?.time}</div>
                {event?.blurb}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
