import styles from './Parit.module.css';

const Placeholder = () => {
  return (
    <div className={`${styles.container} ${styles.empty}`}>
      <div className={styles.cell}>--</div>

      <div className={styles.cell}>--</div>
      <div className={styles.cell}>--</div>
      <div className={styles.cell}>--</div>
    </div>
  );
};

export default Placeholder;
