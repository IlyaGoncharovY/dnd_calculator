import {FC, ReactNode} from 'react';
import {useDrop} from 'react-dnd';

import {elementType} from '../../../../../../common';

import s from './Column.module.css';

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
      <div className={s.columnContainer}>
        <div
          ref={dropRef}
          className={`${s.columnChildrenContainer} ${isOver ? s.reducedBorder : s.normalBorder}`}
        >{children}
        </div>
      </div>
    </div>
  );
};
