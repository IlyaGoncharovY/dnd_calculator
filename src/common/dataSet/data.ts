export type ArrButtonType = {
    id: number,
    value: string
}

export type ELEMENTSType = {
  id: number
  name: string
  column: ColumnTypes
}

export enum ColumnTypes {
  CONSTRUCTOR = 'Constructor',
  CALCULATOR = 'Calculator',
}

export enum elementType {
  ORDER = 'Order',
}

export const arrButtons: ArrButtonType[] = [
  {id: 1, value: '1'},
  {id: 2, value: '2'},
  {id: 3, value: '3'},
  {id: 4, value: '4'},
  {id: 5, value: '5'},
  {id: 6, value: '6'},
  {id: 7, value: '7'},
  {id: 8, value: '8'},
  {id: 9, value: '9'},
  {id: 10, value: '0'},
  {id: 11, value: '.'},
];

export const arrExpressions: ArrButtonType[] = [
  {id: 12, value: '+'},
  {id: 13, value: '-'},
  {id: 14, value: 'x'},
  {id: 15, value: '/'},
  {id: 16, value: 'CE'},
];

export const ID_ELEMENT = {
  display: 'DisplayContainer',
  keyboard: 'KeyBoardContainer',
  expression: 'ExpressionsContainer',
  equal: 'EqualContainer',
};

export const ELEMENTS: ELEMENTSType[] = [
  {id: 1, name: 'DisplayContainer', column: ColumnTypes.CONSTRUCTOR},
  {id: 2, name: 'ExpressionsContainer', column: ColumnTypes.CONSTRUCTOR},
  {id: 3, name: 'KeyBoardContainer', column: ColumnTypes.CONSTRUCTOR},
  {id: 4, name: 'EqualContainer', column: ColumnTypes.CONSTRUCTOR},
];
