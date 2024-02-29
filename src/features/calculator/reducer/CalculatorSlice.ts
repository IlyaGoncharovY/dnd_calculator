import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface initialStateType {
    displayValue: string
}

const initialState: initialStateType = {
  displayValue: '0',
};

const calculatorSlice = createSlice({
  name: 'calculatorSlice',
  initialState,
  reducers: {
    inputDigit: (state, action: PayloadAction<string>) => {
      state.displayValue = action.payload;
    },
  },
});
export const {inputDigit} = calculatorSlice.actions;

export default calculatorSlice.reducer;
