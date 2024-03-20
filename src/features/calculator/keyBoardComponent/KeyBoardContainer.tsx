import {arrButtons, ID_ELEMENT} from '../../../common';

import {ItemButton} from './item/ItemButton.tsx';

import s from './KeyBoard.module.css';

export const KeyBoardContainer = () => {

  return (
    <div
      id={ID_ELEMENT.keyboard}
      className={s.keyBoardContainer}
    >
      {arrButtons.map(buttonValue =>
        <span>
          <ItemButton
            key={buttonValue.id}
            buttonValue={buttonValue}
          />
        </span>,
      )}
    </div>
  );
};
