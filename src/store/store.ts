import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import {calculatorSlice} from '../features/calculator';

export const store = configureStore({
  reducer: {
    CalculatorReducer: calculatorSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
