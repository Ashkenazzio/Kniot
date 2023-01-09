import ParitClass from '../../models/paritClass';

import styles from './Parit.module.css';

const Parit: React.FC<{
  parit: ParitClass;
  onDeleteItem: (paritId: number) => void;
}> = (props) => {
  const deleteHandler = () => {
    props.onDeleteItem(props.parit.id);
  };

  return (
    <div className={styles.container}>
      <button onClick={deleteHandler} className={styles.delete}>
        מחק
      </button>
      <div className={styles.cell}>{props.parit.title}</div>

      <div className={`${styles.cell} ${styles.tags}`}>
        {props.parit.participants.map((participant) => {
          return (
            <div
              key={participant?.id}
              data-person={participant?.person}
              className={styles.tag}
            >
              {participant?.person}
            </div>
          );
        })}
      </div>
      <div className={styles.cell}>₪ {props.parit.sum.toFixed(2)}</div>
      <div className={styles.cell}>₪ {props.parit.each.toFixed(2)}</div>
    </div>
  );
};

export default Parit;
