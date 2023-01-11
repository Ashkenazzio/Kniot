import ParitClass from '../../models/paritClass';
import { openSans } from '../../pages/_app';

const Parit: React.FC<{
  parit: ParitClass;
  onDeleteItem: (paritId: number) => void;
}> = (props) => {
  const deleteHandler = () => {
    props.onDeleteItem(props.parit.id);
  };

  return (
    <div className='grid grid-cols-4 lg:grid-cols-table relative bg-slate-50 hover:bg-slate-100 border-b border-solid border-accent text-xl animate-slide-down group'>
      <button
        onClick={deleteHandler}
        className='btn-primary -left-12 absolute opacity-0 translate-y-4 transition-all -rotate-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0'
      >
        מחק
      </button>
      <div className='p-4 border-l border-solid border-l-accent'>
        {props.parit.title}
      </div>

      <div
        className={`${openSans.variable} font-sans p-4 border-l border-solid border-l-accent flex flex-wrap gap-2 text-base`}
      >
        {props.parit.participants.map((participant) => {
          return (
            <div
              key={participant?.id}
              data-person={participant?.person}
              className={`flex gap-2 items-center text-white rounded-full py-1 px-2 text-xs font-bold h-fit before:content before:w-1 before:h-1 before:bg-white before:rounded-full ${
                'bg-' + participant?.id
              }`}
            >
              {participant?.person}
            </div>
          );
        })}
      </div>
      <div className='p-4 border-l border-solid border-l-accent'>
        ₪ {props.parit.sum.toFixed(2)}
      </div>
      <div className='p-4'>₪ {props.parit.each.toFixed(2)}</div>
    </div>
  );
};

export default Parit;
