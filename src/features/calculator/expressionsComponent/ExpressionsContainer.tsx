import {arrExpressions, ID_ELEMENT} from '../../../common';

import {ExpressionItem} from './item/ExpressionItem.tsx';

export const ExpressionsContainer = () => {

  // const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.dataTransfer.setData('text', event.currentTarget.id);
  // };

  return (
    <div
      // draggable={true}
      // onDragStart={handleDragStart}
      id={ID_ELEMENT.expression}
    >
      {arrExpressions.map(expression =>
        <ExpressionItem
          key={expression.id}
          expressionValue={expression}
        />,
      )}
    </div>
  );
};
