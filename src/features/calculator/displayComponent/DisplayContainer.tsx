import {useAppSelector} from '../../../store';

export const DisplayContainer = () => {

  const displayValue = useAppSelector(state => state.CalculatorReducer.displayValue);

  return (
    <div style={{
      height: '45px',
    }}>
      <div style={{
        backgroundColor: 'white',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '2px',
      }}>{displayValue === 'Infinity' ? 'Не определено' : displayValue}</div>
    </div>
  );
};
