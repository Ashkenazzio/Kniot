import { useEffect, useState } from 'react';
import paritData from '../../models/paritData';
import ParitClass from '../../models/paritClass';

import styles from './Home.module.css';
import Hosafa from '../hosafa/Hosafa';
import Header from './Header';
import Sikum from '../Sikum';
import Footer from './Footer';

const Home = () => {
  const [show, setShow] = useState<boolean>(false);
  const [pritim, setPritim] = useState<ParitClass[]>([]);

  useEffect(() => {
    const pritimJSON = localStorage.getItem('kniot-pritim');

    if (pritimJSON) {
      const parsedPritimJSON = JSON.parse(pritimJSON);
      if (parsedPritimJSON.length != 0) {
        setPritim(parsedPritimJSON);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('kniot-pritim', JSON.stringify(pritim));
  }, [pritim]);

  const onAddItem = (paritData: paritData) => {
    const updatedPritim = [...pritim, { id: Date.now(), ...paritData }];

    setPritim(updatedPritim);
  };

  const onDeleteItem = (paritId: number) => {
    const newPritim = [...pritim];
    const paritIdx = newPritim.findIndex((parit) => parit.id === paritId);

    newPritim.splice(paritIdx, 1);

    setPritim(newPritim);
    localStorage.setItem('kniot-pritim', JSON.stringify(newPritim));
  };

  const onAddDelivery = () => {
    if (pritim.find((parit) => parit.id === 1)) {
      // propmt user ?
      return;
    }
    const withDelivery = [
      ...pritim,
      {
        id: 1,
        title: 'משלוח',
        sum: 29.9,
        participants: [
          { id: 'hod', person: 'הוד' },
          { id: 'daniel', person: 'דניאל' },
          { id: 'maayan', person: 'מעיין' },
          { id: 'omri', person: 'עומרי' },
        ],
        each: 29.9 / 4,
      },
    ];

    setPritim(withDelivery);
    localStorage.setItem('kniot-pritim', JSON.stringify(withDelivery));
  };

  const onClearAll = () => {
    setPritim([]);
    localStorage.setItem('kniot-pritim', '');
  };

  return (
    <div className={styles.home}>
      <Hosafa show={[show, setShow]} onAddItem={onAddItem} />
      <h1 className={styles.title}>Kniot</h1>

      <main className={styles.container}>
        <Header
          setShow={setShow}
          onAddDelivery={onAddDelivery}
          onClearAll={onClearAll}
        />
        <Sikum pritim={pritim} onDeleteItem={onDeleteItem} />
      </main>

      <Footer pritim={pritim} />
    </div>
  );
};

export default Home;
