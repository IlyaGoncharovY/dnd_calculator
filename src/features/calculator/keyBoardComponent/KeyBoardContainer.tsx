import {arrButtons, ID_ELEMENT} from '../../../common';

import {ItemButton} from './item/ItemButton.tsx';

export const KeyBoardContainer = () => {

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', event.currentTarget.id);
  };

  return (
    <div draggable={true} onDragStart={handleDragStart} id={ID_ELEMENT.keyboard}>
      {arrButtons.map(buttonValue =>
        <ItemButton
          key={buttonValue.id}
          buttonValue={buttonValue}
        />,
      )}
    </div>
  );
};
