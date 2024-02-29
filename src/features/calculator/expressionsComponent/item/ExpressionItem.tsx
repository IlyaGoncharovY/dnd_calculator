import {FC} from 'react';

import {ArrButtonType} from '../../../../common';
import {useAppDispatch} from '../../../../store';
import {clearCalculator} from '../../reducer/CalculatorSlice.ts';

interface IExpressionItem {
    expressionValue: ArrButtonType
}
export const ExpressionItem: FC<IExpressionItem> = ({expressionValue}) => {

  const dispatch = useAppDispatch();

  const onClickExpression = () => {
    dispatch(clearCalculator());
  };

  return (
    <span>
      <button onClick={onClickExpression}>{expressionValue.value}</button>
    </span>
  );
};
