import {useEffect, useState} from 'react';

import {ColumnTypes, ELEMENTS, ELEMENTSType} from '../../../../common';

import {Column} from './item/Column.tsx';
import {Elements} from './item/Elements.tsx';

export const DashBoardPage = () => {

  const [orders, setOrders] = useState<ELEMENTSType[]>([]);

  const { CONSTRUCTOR, CALCULATOR } = ColumnTypes;

  useEffect(() => {
    setOrders(ELEMENTS);
  }, []);

  const columnItem = (columnName: string) => {
    return (
      orders
        .filter((element) => element.column === columnName)
        .map((element) => (
          <Elements
            key={element.id}
            name={element.name}
            setOrders={setOrders}
          />
        ))
    );
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          gap: '30px',
        }}
      >
        <Column name={CONSTRUCTOR}>{columnItem(CONSTRUCTOR)}</Column>
        <Column name={CALCULATOR}>{columnItem(CALCULATOR)}</Column>
      </div>
    </div>
  );
};
