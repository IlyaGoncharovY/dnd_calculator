import {useAppSelector} from '../../../store';

export const InputContainer = () => {

  const displayValue = useAppSelector(state => state.CalculatorReducer.displayValue);

  return (
    <div>
      <section>{displayValue}</section>
    </div>
  );
};
