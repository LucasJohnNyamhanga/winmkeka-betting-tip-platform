import NavPc from "./Nav";
import NavMob from "./NavMobile";
import styles from "../styles/navigationControl.module.scss";
import { countryType } from "../Engine/type";

const Navigation = ({ countries }: countryType) => {
  return (
    <div className={styles.fixed}>
      <div className={styles.pc}>
        <NavPc />
      </div>
      <div className={styles.mobile}>
        <NavMob countries={countries} />
      </div>
    </div>
  );
};

export default Navigation;
