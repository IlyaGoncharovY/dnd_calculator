import {useAppSelector} from '../../../store';

import s from './Display.module.css';

export const DisplayContainer = () => {

  const displayValue = useAppSelector(state => state.CalculatorReducer.displayValue);

  return (
    <div style={{
      height: '45px',
    }}>
      <div
        className={s.displayContainer}
      >{displayValue === 'Infinity' ? 'Не определено' : displayValue}</div>
    </div>
  );
};
