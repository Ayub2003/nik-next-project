import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { leftMenuReducer } from "../slices/leftmenu/leftmenu.slice";
import { createWrapper } from "next-redux-wrapper";

export const store = () =>
  configureStore({
    reducer: { leftMenu: leftMenuReducer },
    devTools: true,
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(store);
