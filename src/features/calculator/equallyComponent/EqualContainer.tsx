import {ID_ELEMENT} from '../../../common';
import {useAppDispatch} from '../../../store';
import {calculateResult} from '../reducer/CalculatorSlice.ts';

import s from './Equal.module.css';

export const EqualContainer = () => {

  const dispatch = useAppDispatch();

  const onClickEqual = () => dispatch(calculateResult());


  return (
    <div id={ID_ELEMENT.equal}>
      <button
        className={s.equalContainer}
        onClick={onClickEqual}
      >=</button>
    </div>
  );
};
