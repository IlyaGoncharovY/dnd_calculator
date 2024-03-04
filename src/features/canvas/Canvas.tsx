import {useState} from 'react';

import {ID_ELEMENT} from '../../common';
import {
  EqualContainer, ExpressionsContainer,
  InputContainer, KeyBoardContainer,
} from '../calculator';

export const Canvas = () => {

  const [droppedElements, setDroppedElements] = useState<React.ReactNode[]>([]);

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    console.log(`Somebody dropped an element with id: ${id}`);

    const newDroppedElements = [...droppedElements, getComponentById(id)];
    setDroppedElements(newDroppedElements);
  };

  const getComponentById = (id: string): React.ReactNode => {
    switch (id) {
    case ID_ELEMENT.display:
      return <InputContainer key={id} />;
    case ID_ELEMENT.keyboard:
      return <KeyBoardContainer key={id}/>;
    case ID_ELEMENT.expression:
      return <ExpressionsContainer key={id}/>;
    case ID_ELEMENT.equal:
      return <EqualContainer key={id}/>;
    default:
      return null;
    }
  };

  return (
    <div style={{border: '1px solid red', flex: 1}} onDragOver={enableDropping} onDrop={handleDrop}>
      {droppedElements.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
    </div>
  );
};
