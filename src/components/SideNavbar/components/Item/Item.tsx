import { IItemProps } from "./item.types";
import styles from "./item.module.css";

const Item: React.FC<IItemProps> = ({ icon, title, active }) => {
  return (
    <div className={`${styles.item} ${active && styles.active}`}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Item;
