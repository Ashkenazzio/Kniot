import ParitClass from '../models/paritClass';

import styles from './Sikum.module.css';
import Parit from './parit/Parit';
import Placeholder from './parit/Placeholder';
import Sahach from './parit/Sahach';
import Spinner from './layout/Spinner';

const Sikum: React.FC<{
  pritim: ParitClass[];
  onDeleteItem: (paritId: number) => void;
}> = (props) => {
  return (
    <div className={styles.container}>
      <h2>רשימה:</h2>
      {/* <Spinner /> */}
      <div className={styles.table}>
        <div className={styles.first}>
          <span className={styles.cell}>תיאור</span>
          <span className={styles.cell}>משתתפים</span>
          <span className={styles.cell}>סכום</span>
          <span className={styles.cell}>כל אחד</span>
        </div>
        {props.pritim.length != 0 &&
          props.pritim.map((parit) => {
            return (
              <Parit
                key={parit.id}
                parit={parit}
                onDeleteItem={props.onDeleteItem}
              />
            );
          })}
        {props.pritim.length != 0 && <Sahach pritim={props.pritim} />}

        {props.pritim.length === 0 && <Placeholder />}
      </div>
    </div>
  );
};

export default Sikum;
