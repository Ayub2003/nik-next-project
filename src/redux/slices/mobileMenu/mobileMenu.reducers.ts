import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAction,
} from "@reduxjs/toolkit";
import { IMobileMenu } from "./mobileMenu.model";
import { AppState } from "@/redux/store/store";
import { HYDRATE } from "next-redux-wrapper";

export const mobileMenuReducers = {
  setMobileMenuData: (
    state: IMobileMenu,
    { payload }: PayloadAction<IMobileMenu>
  ) => {
    state.data.isOpen = payload.data.isOpen;
  },
};

export const hydrate = createAction<AppState>(HYDRATE);

export const mobileMenuExtraReducers = (
  builder: ActionReducerMapBuilder<IMobileMenu>
) => {
  builder.addCase(hydrate, (state, { payload }) => {
    if (payload.mobileMenu.data.isOpen) {
      state.data.isOpen = payload.mobileMenu.data.isOpen;
    }
  });
};
