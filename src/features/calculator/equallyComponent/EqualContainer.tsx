import {useAppDispatch} from '../../../store';
import {calculateResult} from '../reducer/CalculatorSlice.ts';

export const EqualContainer = () => {

  const dispatch = useAppDispatch();

  const onClickEqual = () => dispatch(calculateResult());

  return (
    <div>
      <button onClick={onClickEqual}>=</button>
    </div>
  );
};
