import {arrButtons, ID_ELEMENT} from '../../../common';

import {ItemButton} from './item/ItemButton.tsx';

export const KeyBoardContainer = () => {

  return (
    <div
      id={ID_ELEMENT.keyboard}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
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
