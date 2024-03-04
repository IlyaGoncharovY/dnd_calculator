import {FC} from 'react';

import {ArrButtonType} from '../dataSet/data.ts';

interface IUniversalButton {
    buttonValue: ArrButtonType
    onClickHandler: (value: string) => void
}

export const UniversalButton: FC<IUniversalButton> = ({
  buttonValue,
  onClickHandler,
}) => {
  return (
    <span>
      <button onClick={() => onClickHandler(buttonValue.value)}>
        {buttonValue.value}
      </button>
    </span>
  );
};
