import {FC} from 'react';

import {useAppDispatch} from '../../../../store';
import {ArrButtonType} from '../../../../common';
import {inputDecimal, inputDigit} from '../../reducer/CalculatorSlice.ts';

interface IItemButton {
    buttonValue: ArrButtonType
}
export const ItemButton:FC<IItemButton> = ({buttonValue}) => {

  const dispatch = useAppDispatch();

  const onClickChoiceButton = (value: string) => {
    value === '.' ? dispatch(inputDecimal())
      : dispatch(inputDigit(value));
  };

  return (
    <span>
      <button
        onClick={() => onClickChoiceButton(buttonValue.value)}>
        {buttonValue.value}
      </button>
    </span>
  );
};
