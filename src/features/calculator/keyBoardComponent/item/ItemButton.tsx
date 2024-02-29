import {FC} from 'react';

import {useAppDispatch} from '../../../../store';
import {ArrButtonType} from '../../../../common';
import {inputDigit} from '../../reducer/CalculatorSlice.ts';

interface IItemButton {
    buttonValue: ArrButtonType
}
export const ItemButton:FC<IItemButton> = ({buttonValue}) => {

  const dispatch = useAppDispatch();

  const onClickInputDigit = (value: string) => {
    dispatch(inputDigit(value));
  };


  return (
    <span>
      <button
        onClick={() => onClickInputDigit(buttonValue.value)}>
        {buttonValue.value}
      </button>
    </span>
  );
};
