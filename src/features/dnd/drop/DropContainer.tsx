import {useDrop} from 'react-dnd';
import {useState} from 'react';

import {ItemConstructor} from '../start/item/ItemConstructor.tsx';

export const DropContainer = () => {

  const [droppedComponents, setDroppedComponents] = useState<string[]>([]);

  const handleDrop = (id: string) => {
    if (!droppedComponents.includes(id)) {
      setDroppedComponents((prev) => [...prev, id]);
    }
  };

  const [, drop] = useDrop({
    accept: 'DRAG_ITEM',
    drop: (item: { id: string }) => handleDrop(item.id),
  });

  return (
    <div ref={drop} style={{border: '1px solid red', flex: 1}}>
      {droppedComponents.map((id) => (
        <ItemConstructor key={id} value={id} />
      ))}
    </div>
  );
};
