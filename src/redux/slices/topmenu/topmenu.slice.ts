import { createSlice } from "@reduxjs/toolkit";
import { topMenuInit } from "./topmenu.init";
import { extraReducers, topMenuReducers } from "./topmenu.reducers";

export const topMenuSlice = createSlice({
    name: "topMenu",
    initialState: topMenuInit,
    reducers: topMenuReducers,
    extraReducers,
});

export const { setTopMenu } = topMenuSlice.actions;
export const topMenuReducer = topMenuSlice.reducer;