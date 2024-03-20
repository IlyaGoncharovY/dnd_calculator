import {useEffect, useState} from 'react';

import {
  ColumnTypes,
  ELEMENTS,
  ELEMENTSType,
} from '../../../../common';

import {Column} from './item/column/Column.tsx';
import {Elements} from './item/element/Elements.tsx';
import s from './DashboardPage.module.css';

export const DashBoardPage = () => {

  const [orders, setOrders] = useState<ELEMENTSType[]>([]);

  const {CONSTRUCTOR, CALCULATOR} = ColumnTypes;

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
      <div className={s.dashboardContainer}>
        <Column name={CONSTRUCTOR}>{columnItem(CONSTRUCTOR)}</Column>
        <Column name={CALCULATOR}>{columnItem(CALCULATOR)}</Column>
      </div>
    </div>
  );
};
