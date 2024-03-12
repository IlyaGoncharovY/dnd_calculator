import {arrExpressions, ID_ELEMENT} from '../../../common';

import {ExpressionItem} from './item/ExpressionItem.tsx';

export const ExpressionsContainer = () => {

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
      }}
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
