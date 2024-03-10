import {FC} from 'react';

import {ID_ELEMENT} from '../../../../common';
import {DisplayContainer, EqualContainer, ExpressionsContainer, KeyBoardContainer} from '../../../calculator';
import {DragContainer} from '../../drag/DragContainer.tsx';

interface IItemStart {
    value: string
    onRemove?: () => void
}

export const ItemConstructor: FC<IItemStart> = ({value, onRemove}) => {

  const getComponent = () => {
    switch (value) {
    case ID_ELEMENT.display:
      return <DisplayContainer/>;
    case ID_ELEMENT.keyboard:
      return <KeyBoardContainer/>;
    case ID_ELEMENT.expression:
      return <ExpressionsContainer/>;
    case ID_ELEMENT.equal:
      return <EqualContainer/>;
    default:
      return null;
    }
  };

  return (
    <div>
      <DragContainer id={value}>
        {getComponent()}
        <button onClick={onRemove}>Remove</button>
      </DragContainer>
    </div>
  );
};
