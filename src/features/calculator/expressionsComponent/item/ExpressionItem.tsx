import {FC} from 'react';

import {ArrButtonType} from '../../../../common';
import {useAppDispatch} from '../../../../store';
import {clearCalculator, inputOperator} from '../../reducer/CalculatorSlice.ts';
import {UniversalButton} from '../../../../common/Components/UniversalButton.tsx';

interface IExpressionItem {
    expressionValue: ArrButtonType
}
export const ExpressionItem: FC<IExpressionItem> = ({expressionValue}) => {

  const dispatch = useAppDispatch();

  const onClickExpression = (operator: string) => {
    operator === 'CE' ? dispatch(clearCalculator())
      : dispatch(inputOperator(operator));
  };

  return (
    <>
      <UniversalButton buttonValue={expressionValue} onClickHandler={onClickExpression}/>
    </>
  );
};
