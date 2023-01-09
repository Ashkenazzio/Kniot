import ParitClass from '../../models/paritClass';
import styles from './Parit.module.css';

const Sahach: React.FC<{ pritim: ParitClass[] }> = (props) => {
  const sahach = () => {
    let acc = 0;
    for (let i = 0; i < props.pritim.length; i++) {
      acc += props.pritim[i].sum;
    }
    return acc;
  };

  return (
    <div className={`${styles.container} ${styles.sahach}`}>
      <div className={styles.cell}>סך הכל</div>

      <div className={styles.cell}>{sahach().toFixed(2)}</div>
    </div>
  );
};

export default Sahach;
