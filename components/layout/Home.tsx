import { useEffect, useState } from 'react';
import paritData from '../../models/paritData';
import ParitClass from '../../models/paritClass';
import { indieFlower } from '../../pages/_app';

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
    <div className='grid grid-rows-[auto_1fr_auto] min-h-full overflow-auto'>
      <Hosafa show={[show, setShow]} onAddItem={onAddItem} />
      <h1
        className={`${indieFlower.variable} font-display text-center text-8xl p-8`}
      >
        Kniot
      </h1>

      <main className='px-4 h-full my-0 mx-auto mb-12  sm:w-4/5 sm:max-w-screen-2xl sm:mb-8 sm:px-0'>
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
