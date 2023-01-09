import ParitClass from '../../models/paritClass';

import styles from './Footer.module.css';

const Footer: React.FC<{ pritim: ParitClass[] }> = (props) => {
  const participantCounter = (participantId: string) => {
    const filteredPritim = props.pritim.filter((parit) =>
      parit.participants.find(
        (participant) => participant?.id === participantId
      )
    );

    let counter = 0;
    filteredPritim.map((parit) => (counter += parit.each));

    return counter;
  };

  return (
    <footer className={styles.container}>
      <div className={`${styles.person} ${styles.hod}`}>
        <span className={styles.pre}>הוד</span>
        <span className={styles.sum}>{`${participantCounter('hod').toFixed(
          2
        )}₪`}</span>
      </div>

      <div className={`${styles.person} ${styles.daniel}`}>
        <span className={styles.pre}>דניאל</span>
        <span className={styles.sum}>{`${participantCounter('daniel').toFixed(
          2
        )}₪`}</span>
      </div>

      <div className={`${styles.person} ${styles.maayan}`}>
        <span className={styles.pre}>מעיין</span>
        <span className={styles.sum}>{`${participantCounter('maayan').toFixed(
          2
        )}₪`}</span>
      </div>

      <div className={`${styles.person} ${styles.omri}`}>
        <span className={styles.pre}>עומרי</span>
        <span className={styles.sum}>{`${participantCounter('omri').toFixed(
          2
        )}₪`}</span>
      </div>
    </footer>
  );
};

export default Footer;
