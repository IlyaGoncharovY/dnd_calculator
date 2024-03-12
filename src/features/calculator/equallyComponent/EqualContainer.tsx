import {ID_ELEMENT} from '../../../common';
import {useAppDispatch} from '../../../store';
import {calculateResult} from '../reducer/CalculatorSlice.ts';

export const EqualContainer = () => {

  const dispatch = useAppDispatch();

  const onClickEqual = () => dispatch(calculateResult());


  return (
    <div id={ID_ELEMENT.equal}>
      <button
        style={{
          width: '100%',
          height: '60px',
        }}
        onClick={onClickEqual}
      >=</button>
    </div>
  );
};
