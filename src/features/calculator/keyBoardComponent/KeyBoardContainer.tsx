import {arrButtons} from '../../../common';

import {ItemButton} from './item/ItemButton.tsx';

export const KeyBoardContainer = () => {

  return (
    <div>
      {arrButtons.map(buttonValue =>
        <ItemButton
          key={buttonValue.id}
          buttonValue={buttonValue}
        />,
      )}
    </div>
  );
};
