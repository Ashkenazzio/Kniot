import { useEffect, useState } from 'react';
import { participant } from '../../models/paritData';

import styles from './Participant.module.css';
import Image from 'next/image';
import hod from '../../public/images/הוד.png';
import daniel from '../../public/images/דניאל.png';
import maayan from '../../public/images/מעיין.png';
import omri from '../../public/images/עומרי.png';
import Dispatcher from '../../models/dispatcher';

const Participant: React.FC<{
  id: string;
  person: string;
  participants: [participant[], Dispatcher<participant[]>];
}> = (props) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [participants, setParticipants] = props.participants;

  useEffect(() => {
    if (participants.length === 0) {
      setChecked(false);
    }
  }, [participants]);

  const pickPic = {
    הוד: hod,
    דניאל: daniel,
    מעיין: maayan,
    עומרי: omri,
  };

  const selectHandler = () => {
    const newParticipants = participants;

    if (!checked) {
      newParticipants.push({
        id: props.id,
        person: props.person,
      });
      setParticipants(newParticipants);
    } else {
      const participantIdx = newParticipants.findIndex(
        (p) => p?.id === props.id
      );
      newParticipants.splice(participantIdx, 1);

      setParticipants(newParticipants);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type='checkbox'
        id={props.id}
        onChange={() => {
          setChecked((prevChecked) => !prevChecked);
        }}
      />
      <label onClick={selectHandler} htmlFor={props.id}>
        <Image
          className={`${styles.person} ${props.id} ${
            checked ? styles.checked : null
          }`}
          width={128}
          height={128}
          // fill
          src={pickPic[props.person as keyof typeof pickPic]}
          alt={props.person}
        ></Image>
      </label>
    </div>
  );
};

export default Participant;
