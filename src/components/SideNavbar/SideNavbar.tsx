import styles from "./sideNavBar.module.css";
import RFQsIcon from "../../assets/3.svg?react";
import OpportunitiesIcon from "../../assets/1.svg?react";
import OrdersIcon from "../../assets/5.svg?react";
import Item from "./components/Item/Item";
import NeedHelp from "./components/NeedHelp/NeedHelp";

const SideNavbar = () => {
  return (
    <div className={styles.sideNavBar}>
      <div className={styles.title}>Meyahh</div>

      <div className={styles.items}>
        <Item icon={<RFQsIcon />} title="My RFQs" active />
        <Item icon={<OpportunitiesIcon />} title="My Opportunities" />
        <Item icon={<OrdersIcon />} title="My Orders" />
      </div>
      <NeedHelp />
    </div>
  );
};

export default SideNavbar;
