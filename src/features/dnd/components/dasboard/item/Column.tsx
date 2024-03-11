import {FC, ReactNode} from 'react';
import {useDrop} from 'react-dnd';

import {elementType} from '../../../../../common';

interface IColumn {
    name: string
    children: ReactNode
}

export const Column: FC<IColumn> = ({children, name}) => {

  const [{ isOver }, dropRef] = useDrop({
    accept: elementType.ORDER,
    drop: () => ({
      name,
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div >
      <div
        style={{
          backgroundColor: '#e3e7ee',
          width: '270px',
          padding: '15px',
          minHeight: '170px',
          maxHeight: '690px',
          borderRadius: '5px',
        }}
      >
        <div
          ref={dropRef}
          style={{
            width: '100%',
            height: '75%',
            padding: '4px',
            border: isOver ? 'dashed 1px black' : '  ',
          }}
        >{children}
        </div>
      </div>
    </div>
  );
};
