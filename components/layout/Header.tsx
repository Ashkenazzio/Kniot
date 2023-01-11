import Dispatcher from '../../models/dispatcher';

const Header: React.FC<{
  setShow: Dispatcher<boolean>;
  onAddDelivery: () => void;
  onClearAll: () => void;
}> = (props) => {
  return (
    <div className='flex gap-4 items-end mb-8'>
      <div onClick={() => props.setShow(true)} className='btn-primary'>
        הוסף פריט +
      </div>
      <div onClick={props.onAddDelivery} className='btn-alt'>
        הוסף משלוח
      </div>
      <div onClick={props.onClearAll} className='btn-primary mr-auto'>
        נקה
      </div>
    </div>
  );
};

export default Header;
