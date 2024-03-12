import {FC} from 'react';
import {useDrag} from 'react-dnd';

import {DisplayContainer, EqualContainer, ExpressionsContainer, KeyBoardContainer} from '../../../../calculator';
import {elementType, ColumnTypes, ELEMENTSType, ID_ELEMENT} from '../../../../../common';

interface IElements {
    name: string;
    setOrders:  (value: (prevState: ELEMENTSType[]) => ELEMENTSType[] ) => void;
}

export const Elements: FC<IElements> = ({name, setOrders}) => {
  const orderColumnChange = (CurrentOrder: { name: string }, columnName: string) => {
    setOrders((prevState: ELEMENTSType[]) => {
      return prevState.map((item: any) => {
        return {
          ...item,
          column: item.name === CurrentOrder.name ? columnName : item.column,
        };
      });
    });
  };

  const [{isDragging}, drag] = useDrag({
    type: elementType.ORDER,
    item: {name},
    end: (order, monitor) => {
      const dropResult = monitor.getDropResult<ELEMENTSType>();

      if (dropResult) {
        const {name} = dropResult;
        const {CONSTRUCTOR, CALCULATOR} = ColumnTypes;
        switch (name) {
        case CONSTRUCTOR:
          orderColumnChange(order, ColumnTypes.CONSTRUCTOR);
          break;
        case CALCULATOR:
          orderColumnChange(order, ColumnTypes.CALCULATOR);
          break;
        default:
          break;
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });


  const getComponent = () => {
    switch (name) {
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
    <div
      ref={drag}
      title={name}
      style={{
        opacity: isDragging ? '0.5' : '1',
        marginBottom: '15px',
        boxShadow: '1px 4px 11px -2px rgba(135,135,135,0.75)',
      }}
    >
      {getComponent()}
    </div>
  );
};
