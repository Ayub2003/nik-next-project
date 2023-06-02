import {
    ActionReducerMapBuilder,
    PayloadAction,
    createAction,
} from "@reduxjs/toolkit";
import { ITopMenu, ItemTopNav } from "./topmenu.model";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "@/redux/store/store";


export const topMenuReducers = {
    setTopMenu: (state: ITopMenu, { payload }: PayloadAction<ItemTopNav[]>) => {
        state.data = payload;
    },
};

export const hydrate = createAction<AppState>(HYDRATE);

export const extraReducers = (builder: ActionReducerMapBuilder<ITopMenu>) => {
    builder.addCase(hydrate, (state, { payload }) => {
        if (payload.topMenu.data) {
            state.data = payload.topMenu.data;
        }
    });}