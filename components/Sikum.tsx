import ParitClass from '../models/paritClass';

import Parit from './parit/Parit';
import Placeholder from './parit/Placeholder';
import Sahach from './parit/Sahach';
import Spinner from './layout/Spinner';

const Sikum: React.FC<{
  pritim: ParitClass[];
  onDeleteItem: (paritId: number) => void;
}> = (props) => {
  return (
    <>
      {/* <Spinner /> */}
      <div className='grid my-0 mx-auto shadow-md rounded-lg mb-8'>
        <div className='grid grid-cols-4 lg:grid-cols-table rounded-t-lg bg-accent font-bold text-white text-2xl'>
          <span className='p-4 text-center'>תיאור</span>
          <span className='p-4 text-center'>משתתפים</span>
          <span className='p-4 text-center'>סכום</span>
          <span className='p-4 text-center'>כל אחד</span>
        </div>
        {props.pritim.length != 0 &&
          props.pritim.map((parit) => {
            return (
              <Parit
                key={parit.id}
                parit={parit}
                onDeleteItem={props.onDeleteItem}
              />
            );
          })}
        {props.pritim.length === 0 && <Placeholder />}
        <Sahach pritim={props.pritim} />
      </div>
    </>
  );
};

export default Sikum;
