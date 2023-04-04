import { PayloadAction } from "@reduxjs/toolkit";
import { ILeftMenu } from "./leftmenu.model";
import { HYDRATE } from "next-redux-wrapper";

export const leftMenuReducers = {
  setLeftMenu: (state: ILeftMenu, { payload }: PayloadAction<ILeftMenu>) => {
    state = payload;
    console.log("redux left menu state: ", state);
  },
};

export const leftMenuExtraReducers = {
  [HYDRATE]: (state: any, { payload }: any) => {
    state = payload.leftMenu;
    console.log("HYDRATE: ", state);
  },
};
