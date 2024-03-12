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
    <>
      <button
        onClick={() => onClickHandler(buttonValue.value)}
        style={{
          width: buttonValue.value === '0' ? '133px' : '66px',
          height: '66px',
        }}
      >
        {buttonValue.value}
      </button>
    </>
  );
};
