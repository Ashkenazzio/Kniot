import React, { useState } from 'react';
import paritData, { participant } from '../../models/paritData';
import Dispatcher from '../../models/dispatcher';

import styles from './Hosafa.module.css';
import Participant from './Participant';

const Hosafa: React.FC<{
  show: [boolean, Dispatcher<boolean>];
  onAddItem: (data: paritData) => void;
}> = (props) => {
  const [show, setShow] = props.show;

  const [title, setTitle] = useState<string>('');
  const [sum, setSum] = useState<number>(0);
  const [participants, setParticipants] = useState<participant[]>([]);

  const changeTitleHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const changeSumHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSum(+e.currentTarget.value);
  };

  const addParitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim() === '' || sum <= 0 || participants.length === 0) {
      // handle error
      return;
    }

    const paritData: paritData = {
      title: title,
      sum: sum,
      participants: participants,
      each: sum / participants.length,
    };

    setTitle('');
    setSum(0);
    setParticipants([]);
    props.onAddItem(paritData);
  };

  return (
    <div className={`${styles.container} ${show ? styles.show : null}`}>
      <div onClick={() => setShow(false)} className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div
          className={styles.close}
          onClick={() => {
            setShow(false);
          }}
        >
          סגור
        </div>
        <h2 className={styles.title}>הוסף פריט לרשימה</h2>
        <form onSubmit={addParitHandler} className={styles.form}>
          <div className={styles.input}>
            <label className={styles.label} htmlFor='title'>
              תיאור:
            </label>
            <input
              id='title'
              value={title}
              onChange={changeTitleHandler}
              required
            />
          </div>
          <div className={styles.input}>
            <label className={styles.label} htmlFor='sum'>
              סכום:
            </label>
            <input
              value={sum}
              onChange={changeSumHandler}
              id='sum'
              type='number'
              step='0.01'
              min='0'
              required
            />
          </div>
          <h3>מי משתתף?</h3>
          <div className={styles.parti}>
            <Participant
              id={'hod'}
              person='הוד'
              participants={[participants, setParticipants]}
            />
            <Participant
              id={'daniel'}
              person='דניאל'
              participants={[participants, setParticipants]}
            />
            <Participant
              id={'maayan'}
              person='מעיין'
              participants={[participants, setParticipants]}
            />
            <Participant
              id={'omri'}
              person='עומרי'
              participants={[participants, setParticipants]}
            />
          </div>
          <button className={styles.btn}>הוספה</button>
        </form>
      </div>
    </div>
  );
};

export default Hosafa;
