import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import tradeReducer from "./slices/tradeSlice";

export const store = configureStore({
  reducer: { trade: tradeReducer },
});

export type RootStateI = ReturnType<typeof store.getState>;
export type DispatchI = typeof store.dispatch;
export type AppThunkI<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateI,
  unknown,
  Action<string>
>;
