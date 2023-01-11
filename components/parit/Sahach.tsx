import ParitClass from '../../models/paritClass';

const Sahach: React.FC<{ pritim: ParitClass[] }> = (props) => {
  const sahach = () => {
    let acc = 0;
    for (let i = 0; i < props.pritim.length; i++) {
      acc += props.pritim[i].sum;
    }
    return acc;
  };

  return (
    <div className='grid grid-cols-4 lg:grid-cols-table relative bg-slate-50 hover:bg-slate-100 border-solid border-accent text-2xl font-bold text-accent'>
      <div className='p-4 border-l border-solid border-l-accent'>סך הכל</div>
      <div className='p-4'>{sahach().toFixed(2)}</div>
    </div>
  );
};

export default Sahach;
