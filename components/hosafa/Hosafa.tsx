import React, { useState } from 'react';
import paritData, { participant } from '../../models/paritData';
import Dispatcher from '../../models/dispatcher';

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
    <div
      className={
        'grid pointer-events-none place-items-center top-0 left-0 right-0 bottom-0 w-screen h-screen px-4 fixed z-50'
      }
    >
      <div
        onClick={() => setShow(false)}
        className={`bg-zinc-900 absolute top-0 left-0 w-screen h-screen opacity-0 z-10 pointer-events-none transition duration-500 ${
          show ? 'opacity-40 pointer-events-auto' : ''
        }`}
      ></div>
      <div
        className={`bg-bg py-12 sm:py-10 px-6 rounded-2xl shadow-md z-20 opacity-0 pointer-events-none relative -translate-y-1/4 border-4 border-solid border-accent animate-bump transition duration-500 ${
          show ? 'opacity-100 pointer-events-auto translate-y-0' : ''
        }`}
      >
        <div
          className='absolute top-2 right-2 flex justify-center items-center cursor-pointer py-1 px-3 bg-accent text-white font-bold rounded-full shadow active:scale-95'
          onClick={() => {
            setShow(false);
          }}
        >
          סגור
        </div>
        <h2 className='text-center mb-8 text-3xl'>הוסף פריט לרשימה</h2>
        <form
          onSubmit={addParitHandler}
          className='grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8'
        >
          <div className='flex flex-col gap-2 col-span-1 sm:col-span-2'>
            <label className='font-bold' htmlFor='title'>
              תיאור:
            </label>
            <input
              id='title'
              value={title}
              onChange={changeTitleHandler}
              required
              className='w-full bg-white text-body rounded-lg py-3 px-4 shadow-inner border-none focus:outline focus:outline-2 focus:outline-accent'
            />
          </div>
          <div className='flex flex-col gap-2 col-span-1 sm:col-span-2'>
            <label className='font-bold' htmlFor='sum'>
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
              className='w-full bg-white text-body rounded-lg py-3 px-4 shadow-inner border-none focus:outline focus:outline-2 focus:outline-accent'
            />
          </div>
          <h3 className='col-span-2 sm:col-span-4 text-2xl'>מי משתתף?</h3>
          <div className='grid place-content-center place-items-center col-span-2 grid-cols-2 gap-4 sm:col-span-4 sm:grid-cols-4 sm:gap-8'>
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
          <button className='btn-primary mt-8 w-full col-span-2 sm:col-span-4'>
            הוספה
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hosafa;
