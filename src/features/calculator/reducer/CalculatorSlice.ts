import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface initialStateType {
    displayValue: string
    currentValue: string
}

const initialState: initialStateType = {
  displayValue: '0',
  currentValue: '0',
};

const calculatorSlice = createSlice({
  name: 'calculatorSlice',
  initialState,
  reducers: {
    inputDigit: (state, action: PayloadAction<string>) => {
      if (state.currentValue === '0') {
        state.currentValue = action.payload.toString();
      } else {
        state.currentValue += action.payload.toString();
      }
      state.displayValue = state.currentValue;
    },
    inputDecimal: (state) => {
      if (!state.currentValue.includes('.')) {
        state.currentValue += '.';
        state.displayValue = state.currentValue;
      }
    },
    clearCalculator: (state) => {
      state.displayValue = '0';
      state.currentValue = '0';
    },
  },
});
export const {
  inputDigit,
  inputDecimal,
  clearCalculator,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
