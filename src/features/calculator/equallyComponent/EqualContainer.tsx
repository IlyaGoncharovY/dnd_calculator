import {ID_ELEMENT} from '../../../common';
import {useAppDispatch} from '../../../store';
import {calculateResult} from '../reducer/CalculatorSlice.ts';

export const EqualContainer = () => {

  const dispatch = useAppDispatch();

  const onClickEqual = () => dispatch(calculateResult());

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', event.currentTarget.id);
  };

  return (
    <div draggable={true} onDragStart={handleDragStart} id={ID_ELEMENT.equal}>
      <button onClick={onClickEqual}>=</button>
    </div>
  );
};
