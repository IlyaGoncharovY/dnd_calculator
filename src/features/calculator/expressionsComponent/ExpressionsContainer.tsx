import {arrExpressions, ID_ELEMENT} from '../../../common';

import {ExpressionItem} from './item/ExpressionItem.tsx';

import s from './Expression.module.css';

export const ExpressionsContainer = () => {

  return (
    <div
      className={s.expressionContainer}
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
