import {arrExpressions} from '../../../common';

import {ExpressionItem} from './item/ExpressionItem.tsx';

export const ExpressionsContainer = () => {
  return (
    <div>
      {arrExpressions.map(expression =>
        <ExpressionItem
          key={expression.id}
          expressionValue={expression}
        />,
      )}
    </div>
  );
};
