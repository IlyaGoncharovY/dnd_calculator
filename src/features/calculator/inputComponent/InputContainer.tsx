import {ID_ELEMENT} from '../../../common';
import {useAppSelector} from '../../../store';

export const InputContainer = () => {

  const displayValue = useAppSelector(state => state.CalculatorReducer.displayValue);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', event.currentTarget.id);
  };

  return (
    <div draggable={true} onDragStart={handleDragStart} id={ID_ELEMENT.display}>
      <section>{displayValue === 'Infinity' ? 'Не определено' : displayValue}</section>
    </div>
  );
};
