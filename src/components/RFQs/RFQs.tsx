import styles from "./rfqs.module.css";

const RFQs = () => {
  return (
    <div className={styles.rfqs}>
      <div className={styles.title}>Welcome Samah</div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>You will view your RFQs here</div>
        <p className={styles.contentText}>
          Get your water treatment needs at the best price.
        </p>
        <button className={styles.createBtn}>Create an RFQ</button>
      </div>
    </div>
  );
};

export default RFQs;
