import styles from './Spinner.module.css';

function Spinner() {
  return (
    <div className={styles.container}>
      <svg
        className={styles.spinner}
        width='3rem'
        height='3rem'
        viewBox='0 0 66 66'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          className={styles.path}
          fill='none'
          stroke-width='6'
          stroke-linecap='round'
          cx='33'
          cy='33'
          r='30'
        ></circle>
      </svg>
    </div>
  );
}

export default Spinner;
