/// <reference types="vite-plugin-svgr/client" />
import LogoIcon from "../../assets/8.svg?react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <LogoIcon />
      <div className={styles.file}>
        <span className={styles.fileType}>W</span>
        <span className={styles.fileName}>waterx</span>
      </div>
      </div>
      <div className={styles.profile}>
        <span>john clone</span>
        <div className={styles.profileLetter}>J</div>
        <span className={styles.arrowDown}>{`>`}</span>
      </div>
    </div>
  );
};

export default Header;
