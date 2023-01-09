import Dispatcher from '../../models/dispatcher';

import styles from './Header.module.css';

const Header: React.FC<{
  setShow: Dispatcher<boolean>;
  onAddDelivery: () => void;
  onClearAll: () => void;
}> = (props) => {
  return (
    <div className={styles.container}>
      <div onClick={() => props.setShow(true)} className={styles.btn}>
        הוסף פריט +
      </div>
      <div
        onClick={props.onAddDelivery}
        className={`${styles.btn} ${styles['btn-alt']}`}
      >
        הוסף משלוח
      </div>
      <div
        onClick={props.onClearAll}
        className={`${styles.btn}  ${styles.clear}`}
      >
        נקה
      </div>
    </div>
  );
};

export default Header;
