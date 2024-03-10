import {FC, ReactNode} from 'react';
import {useDrag} from 'react-dnd';

interface IDragContainer {
    children: ReactNode;
    id: string;
}

export const DragContainer: FC<IDragContainer> = ({children, id}) => {

  const [, drag] = useDrag({
    type: 'DRAG_ITEM',
    item: { id },
  });

  return (
    <div ref={drag} id={id}>
      {children}
    </div>
  );
};
