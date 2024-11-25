import styles from "./needHelp.module.css";

const NeedHelp = () => {
  return (
    <div className={styles.needHelp}>
      <span className={styles.title}>Need Help?</span>
      <p>Let Meyahh water expert help you within your water need</p>
      <button className={styles.getHelpBtn}>Get Help</button>
    </div>
  );
};

export default NeedHelp;
