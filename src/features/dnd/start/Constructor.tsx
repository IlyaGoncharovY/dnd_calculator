import {useState} from 'react';

import {ArrButtonType, ELEMENTS} from '../../../common';

import {ItemConstructor} from './item/ItemConstructor.tsx';

export const Constructor = () => {

  const [constructorItems, setConstructorItems] = useState<ArrButtonType[]>(ELEMENTS);

  const handleItemRemove = (id: number) => {
    setConstructorItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      {constructorItems.map((el) =>
        <ItemConstructor
          key={el.id}
          value={el.value}
          onRemove={() => handleItemRemove(el.id)}
        />)}
    </div>
  );
};
