import Header from "../components/Header/Header";
import SideNavbar from "../components/SideNavbar/SideNavbar";
import { IDashboardLayoutProps } from "./dashboardLayout.types";
import styles from "./dashboardLayout.module.css";

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
  return (
    <div className={styles.dashboardLayout}>
      <Header />
      <SideNavbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
