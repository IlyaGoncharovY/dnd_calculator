import {FC} from 'react';

import {ArrButtonType} from '../../../../common';
import {useAppDispatch} from '../../../../store';
import {clearCalculator, inputOperator} from '../../reducer/CalculatorSlice.ts';

interface IExpressionItem {
    expressionValue: ArrButtonType
}
export const ExpressionItem: FC<IExpressionItem> = ({expressionValue}) => {

  const dispatch = useAppDispatch();

  const onClickExpression = (operator: string) => {
    operator === 'CE' ? dispatch(clearCalculator()) : dispatch(inputOperator({operator}))
    ;
  };

  return (
    <span>
      <button onClick={() => onClickExpression(expressionValue.value)}>{expressionValue.value}</button>
    </span>
  );
};
