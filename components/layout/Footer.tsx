import ParitClass from '../../models/paritClass';

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
    <footer className='grid grid-cols-2 w-full fixed my-0 mx-auto bottom-0 left-0 z-0 sm:grid-cols-4'>
      <div className='person bg-hod'>
        <span>הוד</span>
        <span className='font-bold'>{`${participantCounter('hod').toFixed(
          2
        )}₪`}</span>
      </div>

      <div className='person bg-daniel'>
        <span>דניאל</span>
        <span className='font-bold'>{`${participantCounter('daniel').toFixed(
          2
        )}₪`}</span>
      </div>

      <div className='person bg-maayan'>
        <span>מעיין</span>
        <span className='font-bold'>{`${participantCounter('maayan').toFixed(
          2
        )}₪`}</span>
      </div>

      <div className='person bg-omri'>
        <span>עומרי</span>
        <span className='font-bold'>{`${participantCounter('omri').toFixed(
          2
        )}₪`}</span>
      </div>
    </footer>
  );
};

export default Footer;
